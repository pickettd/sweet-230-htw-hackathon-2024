import { App, LogLevel, FileInstallationStore } from "@slack/bolt";
import { FileStateStore } from "@slack/oauth";
import { AppRunner } from "@seratch_/bolt-http-runner";
import { PrismaClient } from '@prisma/client';
import { PrismaInstallationStore } from '@seratch_/bolt-prisma';

const prismaClient = new PrismaClient({
  log: [
    {
      emit: 'stdout',
      level: 'query',
    },
  ],
});

const installationStore = new PrismaInstallationStore({
  // The name `slackAppInstallation` can be different
  // if you use a different name in your Prisma schema
  prismaTable: prismaClient.slackAppInstallation,
  clientId: process.env.SLACK_CLIENT_ID,
});

// Use PrismaInstallationStore
export const appRunner = new AppRunner({
  logLevel: LogLevel.DEBUG,
  // token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  clientId: process.env.SLACK_CLIENT_ID,
  clientSecret: process.env.SLACK_CLIENT_SECRET,
  stateSecret: process.env.SLACK_STATE_SECRET,
  scopes: ["commands", "chat:write", "app_mentions:read"],
  installationStore
});

// // Use FileInstallationStore
// export const appRunner = new AppRunner({
//   logLevel: LogLevel.DEBUG,
//   // token: process.env.SLACK_BOT_TOKEN,
//   signingSecret: process.env.SLACK_SIGNING_SECRET,
//   clientId: process.env.SLACK_CLIENT_ID,
//   clientSecret: process.env.SLACK_CLIENT_SECRET,
//   stateSecret: process.env.SLACK_STATE_SECRET,
//   scopes: ["commands", "chat:write", "app_mentions:read"],
//   installationStore: new FileInstallationStore(),
//   installerOptions: {
//     stateStore: new FileStateStore({}),
//   },
// });

const app = new App(appRunner.appOptions());

app.event("app_mention", async ({ say }) => {
  await say("Hi there!");
});

app.command("/hi-nextjs", async ({ ack }) => {
  await ack("Hi there!");
});

appRunner.setup(app);
