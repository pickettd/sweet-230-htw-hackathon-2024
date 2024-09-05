'use client'

import { useState } from 'react'
import { Typography, Input, Button, List, Spin, Row, Col } from 'antd'
import { SendOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ChatbotInteractionPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [question, setQuestion] = useState<string>('')
  const [chatHistory, setChatHistory] = useState<
    { question: string; answer: string }[]
  >([])

  const { mutateAsync: generateText } = Api.ai.generateText.useMutation()

  const handleAskQuestion = async () => {
    if (!question.trim()) {
      enqueueSnackbar('Please enter a question', { variant: 'error' })
      return
    }
    try {
      const response = await generateText({ prompt: question })
      setChatHistory([...chatHistory, { question, answer: response.answer }])
      setQuestion('')
    } catch (error) {
      enqueueSnackbar('Failed to get response from AI', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>AI Chatbot</Title>
          <Text>
            Ask questions about company policies, time off, and benefits. View
            responses from the AI chatbot.
          </Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={24}>
          <Input
            placeholder="Type your question here..."
            value={question}
            onChange={e => setQuestion(e.target.value)}
            onPressEnter={handleAskQuestion}
            suffix={
              <Button
                type="primary"
                icon={<SendOutlined />}
                onClick={handleAskQuestion}
              >
                Ask
              </Button>
            }
          />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={24}>
          <List
            bordered
            dataSource={chatHistory}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<Text strong>Question:</Text>}
                  description={item.question}
                />
                <div>
                  <Text strong>Answer:</Text> {item.answer}
                </div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </PageLayout>
  )
}
