import { WebClient } from '@slack/web-api'

// Slack OAuth configuration
const SLACK_CLIENT_ID = process.env.SLACK_CLIENT_ID
const SLACK_CLIENT_SECRET = process.env.SLACK_CLIENT_SECRET

// Initialize Slack WebClient
const slackClient = new WebClient()

/**
 * Generates the Slack OAuth URL
 * @param {string} redirectUri - The redirect URI after OAuth
 * @returns {string} The Slack OAuth URL
 */
export const generateSlackOAuthUrl = (redirectUri: string): string => {
  const scopes = ['chat:write', 'channels:read', 'users:read']

  return slackClient.oauth.v2.authorizeUrl({
    client_id: SLACK_CLIENT_ID,
    scope: scopes.join(','),
    redirect_uri: redirectUri,
  })
}
