import { ReadStream } from 'fs'
import OpenaiSDK from 'openai'
import { zodResponseFormat } from 'openai/helpers/zod'
import { ParsedChatCompletion } from 'openai/resources/beta/chat/completions'
import { z, ZodType } from 'zod'

enum OpenaiModel {
  DEFAULT = 'gpt-4o-mini',
  JSON = 'gpt-4o-mini',
  IMAGE = 'dall-e-3',
  AUDIO_TO_TEXT = 'whisper-1',
  TEXT_TO_AUDIO = 'tts-1',
}

export class Openai {
  private api: OpenaiSDK
  private assistantApi: OpenaiSDK
  private exampleAssistantId: any

  constructor() {
    this.initialize()
  }

  private initialize(): void {
    try {
      const apiKey = process.env.SERVER_OPENAI_API_KEY
      const exampleAssistantId = process.env.TEST_ASSISTANT_PMF_HB_ID
      const assistKey = process.env.ASSISTANT_API_KEY

      if (!apiKey) {
        console.log(`Set SERVER_OPENAI_API_KEY in your .env to activate OpenAI`)
        return
      }
      if (!exampleAssistantId) {
        console.log(
          `Set TEST_ASSISTANT_PMF_HB_ID in your .env to activate OpenAI Assistants`,
        )
        return
      }

      this.assistantApi = new OpenaiSDK({ apiKey: assistKey })
      this.api = new OpenaiSDK({ apiKey })
      this.exampleAssistantId = exampleAssistantId

      console.log(`Openai is active`)
    } catch (error) {
      console.error(error)
      console.error(`Openai failed to start`)
    }
  }

  isActive(): boolean {
    if (this.api) {
      return true
    } else {
      return false
    }
  }

  async generateText(
    prompt: string,
    attachmentUrls?: string[],
  ): Promise<string> {
    console.log('in generateText - building messages first', { prompt })
    const messages = this.buildMessages(prompt, attachmentUrls)

    const response = await this.api.chat.completions.create({
      model: OpenaiModel.DEFAULT,
      messages: messages,
    })

    const content = this.parseResponseContent(response)

    return content
  }

  async generateAssistantText(
    prompt: string,
    attachmentUrls?: string[],
  ): Promise<string> {
    console.log('in generateAssistantText - building messages first', {
      prompt,
    })
    const messages = this.buildMessages(prompt, attachmentUrls)
    const thread = await this.assistantApi.beta.threads.create({
      messages,
    })
    let threadId = thread.id
    console.log('Created thread with Id: ' + threadId)

    // See if we can create an assistant
    // const assistant = await this.api.beta.assistants.create({
    //   model: OpenaiModel.DEFAULT,
    //   name: 'Math Tutor',
    //   instructions: 'You are working in the HR department.',
    //   // tools = [],
    // })
    const run = await this.assistantApi.beta.threads.runs.createAndPoll(
      thread.id,
      {
        assistant_id: this.exampleAssistantId,
        //assistant_id: assistant.id,
      },
    )

    console.log('Run finished with status: ' + run.status)

    if (run.status == 'completed') {
      const messages = await this.assistantApi.beta.threads.messages.list(
        thread.id,
      )
      const paginatedMsgs = messages.getPaginatedItems()
      return paginatedMsgs[0]?.content[0]?.text?.value
      // for (const message of messages.getPaginatedItems()) {
      //   console.log(message);
      // }
    }

    return null
  }

  async generateJson<
    SchemaType extends ZodType,
    JsonType = z.infer<SchemaType>,
  >(
    instruction: string,
    content: string,
    schema: SchemaType,
    attachmentUrls?: string[],
  ): Promise<JsonType> {
    const messages = this.buildMessages(content, attachmentUrls)

    const response = await this.api.beta.chat.completions.parse({
      model: OpenaiModel.JSON,
      messages: [{ role: 'system', content: instruction }, ...messages],
      response_format: zodResponseFormat(schema, 'result'),
    })

    const json = this.parseResponseJson<JsonType>(response)

    return json
  }

  async generateImage(prompt: string): Promise<string> {
    const response = await this.api.images.generate({
      model: OpenaiModel.IMAGE,
      prompt: prompt,
    })

    const imageUrl = this.parseResponseImage(response)

    return imageUrl
  }

  async fromAudioToText(readStream: ReadStream): Promise<string> {
    const transcription = await this.api.audio.transcriptions.create({
      file: readStream,
      model: OpenaiModel.AUDIO_TO_TEXT,
    })

    return transcription.text
  }

  async fromTextToAudio(text: string): Promise<Buffer> {
    const mp3 = await this.api.audio.speech.create({
      model: OpenaiModel.TEXT_TO_AUDIO,
      voice: 'alloy',
      input: text,
    })

    const buffer = Buffer.from(await mp3.arrayBuffer())

    return buffer
  }

  private buildMessages(content: string, attachmentUrls: string[] = []) {
    const message = {
      role: 'user',
      content: [
        { type: 'text', text: content },
        ...attachmentUrls.map(url => ({
          type: 'image_url',
          image_url: { url },
        })),
      ],
    }

    return [message] as OpenaiSDK.Chat.Completions.ChatCompletionMessageParam[]
  }

  private parseResponseContent(
    response: OpenaiSDK.Chat.Completions.ChatCompletion,
  ): string {
    return response.choices[0].message.content
  }

  private parseResponseImage(
    response: OpenaiSDK.Images.ImagesResponse,
  ): string {
    return response.data[0].url
  }

  private parseResponseJson<JsonType = unknown>(
    response: ParsedChatCompletion<JsonType>,
  ) {
    return response.choices[0].message.parsed
  }
}
