import crypto from 'crypto'
//import { sendGPTResponse } from './_chat'
import { WebClient } from '@slack/web-api'
import { RagService } from '../../server/libraries/rag'

const slack = new WebClient(process.env.SLACK_BOT_TOKEN)

export const config = {
  maxDuration: 30,
}

async function isValidSlackRequest(request: Request, body: any) {
  const signingSecret = process.env.SLACK_SIGNING_SECRET!
  const timestamp = request.headers['x-slack-request-timestamp']!
  const slackSignature = request.headers['x-slack-signature']!
  const base = `v0:${timestamp}:${JSON.stringify(body)}`
  const hmac = crypto
    .createHmac('sha256', signingSecret)
    .update(base)
    .digest('hex')
  const computedSignature = `v0=${hmac}`
  return computedSignature === slackSignature
}

export default async function POST(request: Request, res) {
  const body = request.body as any
  const requestType = body.type

  if (requestType === 'url_verification') {
    return res.status(200).json(body.challenge)
  }

  if (await isValidSlackRequest(request, body)) {
    if (requestType === 'event_callback') {
      const slackEvent = body.event
      const eventType = slackEvent.type
      const channel_type = slackEvent.channel_type
      // Subtype would exist if is something like a message deleted
      const subType = slackEvent.subtype
      //console.log('Received this type', eventType)
      //console.log('Whole slackEvent', slackEvent)
      console.log('Message from Slack', slackEvent)
      if (eventType === 'message' && channel_type === 'im' && !subType) {
        const msgText = slackEvent.text
        console.log('This is the IM Message from Slack', msgText)

        const answer = await RagService.query(
          msgText,
          [],
          [],
        )

        await slack.chat.postMessage({
          channel: slackEvent.channel,
          thread_ts: slackEvent.ts,
          text: answer,
        })
        return res.status(200).json('Success!')
      }
    }
  }

  return res.status(200).json('OK')
}
