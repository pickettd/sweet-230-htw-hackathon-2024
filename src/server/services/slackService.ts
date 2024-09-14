import { WebClient } from '@slack/web-api'

const slackClient = new WebClient(process.env.SLACK_BOT_TOKEN)

export async function generateSlackBotToken(
  userId: string,
  workspaceId: string,
): Promise<string> {
  try {
    const response = await slackClient.apps.connections.open({
      user_id: userId,
      workspace_id: workspaceId,
    })

    if (response.ok && response.bot_token) {
      return response.bot_token
    } else {
      throw new Error('Failed to generate Slack bot token')
    }
  } catch (error) {
    console.error('Error generating Slack bot token:', error)
    throw error
  }
}
