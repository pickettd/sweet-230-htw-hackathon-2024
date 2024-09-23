import { RagService } from '@/server/libraries/rag'
import { PrismaClient } from '@prisma/client'
import { AppRunner } from '@seratch_/bolt-http-runner'
import { PrismaInstallationStore } from '@seratch_/bolt-prisma'
import { App, LogLevel } from '@slack/bolt'

function extractCookieValue(req, name) {
  const allCookies = req.headers.cookie
  if (allCookies) {
    const found = allCookies
      .split(';')
      .find(c => c.trim().startsWith(`${name}=`))
    if (found) {
      return found.split('=')[1].trim()
    }
  }
  return undefined
}

const prismaClient = new PrismaClient({
  log: [
    {
      emit: 'stdout',
      level: 'query',
    },
  ],
})

const installerOptions = {
  installPathOptions: {
    beforeRedirection: async (req, res, options) => {
      const marbOrgId = '1111'
      res.setHeader('Set-Cookie', [
        `marbOrgId=${marbOrgId}; Secure; HttpOnly; Path=/; Max-Age=600`,
      ])
      return true // continuing
    },
  },
  callbackOptions: {
    afterInstallation: async (installation, options, req, res) => {
      // Attach an additional value to the installation object
      // After this function execution, InstallationStore#storeInstallation() will be performed with the modified installation
      installation.marbOrgId = extractCookieValue(req, 'marbOrgId')
      console.log({ installation })
      return true // continuing
    },
  },
}

const installationStore = new PrismaInstallationStore({
  // The name `slackAppInstallation` can be different
  // if you use a different name in your Prisma schema
  prismaTable: prismaClient.slackAppInstallation,
  clientId: process.env.SLACK_CLIENT_ID,
})

// Use PrismaInstallationStore
export const appRunner = new AppRunner({
  logLevel: LogLevel.DEBUG,
  // token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  clientId: process.env.SLACK_CLIENT_ID,
  clientSecret: process.env.SLACK_CLIENT_SECRET,
  stateSecret: process.env.SLACK_STATE_SECRET,
  scopes: [
    'commands',
    'chat:write',
    'app_mentions:read',
    'im:history',
    'im:read',
  ],
  installationStore,
  installerOptions,
})

const app = new App(appRunner.appOptions())

// Don't think we're going to use app_mention
// app.event('app_mention', async ({ say }) => {
//   console.log('app_mention')
//   await say('Hi there from app mention!')
// })

// Example from the bolt docs for listening to messages that contain 'hello'
// Listens to incoming messages that contain "hello"
// app.message('hello', async ({ message, say }) => {
//   // say() sends a message to the channel where the event was triggered
//   await say(`Hey there <@${message.user}>!`);
// });

app.message('', async ({ message, say, context }) => {
  // console.log('Starting app.message, context is ', { context })
  // const prismaInstallation = await installationStore.fetchInstallation({
  //   teamId: context.teamId,
  //   enterpriseId: context.enterpriseId,
  //   isEnterpriseInstall: context.isEnterpriseInstall,
  // })
  // console.log(
  //   `\nprismaInstallationStore.fetchInstallation: ${JSON.stringify(prismaInstallation)}\n`,
  // )
  // if we can get the orgId for the install from fetchInstallation
  // can pass it into the RagService.query tags param

  const msgText = message?.text
  // console.log('hello message')
  console.log('This is the IM Message from Slack', msgText)
  let answer = 'checking LLM: ' + msgText
  answer = await RagService.query(msgText, [], [])
  // say() sends a message to the channel where the event was triggered
  await say(answer)
})

appRunner.setup(app)
