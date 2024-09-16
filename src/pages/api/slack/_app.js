import { RagService } from '@/server/libraries/rag'
import { PrismaClient } from '@prisma/client'
import { AppRunner } from '@seratch_/bolt-http-runner'
import { PrismaInstallationStore } from '@seratch_/bolt-prisma'
import { App, LogLevel } from '@slack/bolt'

const prismaClient = new PrismaClient({
  log: [
    {
      emit: 'stdout',
      level: 'query',
    },
  ],
})

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

app.message('', async ({ message, say }) => {
  const msgText = message?.text
  // console.log('hello message')
  console.log('This is the IM Message from Slack', msgText)
  let answer = 'checking LLM: ' + msgText
  answer = await RagService.query(msgText, [], [])
  // say() sends a message to the channel where the event was triggered
  await say(answer)
})

appRunner.setup(app)
