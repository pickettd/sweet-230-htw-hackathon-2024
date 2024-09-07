'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'
import { SendOutlined } from '@ant-design/icons'
import { Button, Col, Input, List, Row, Typography } from 'antd'
import dayjs from 'dayjs'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
const { Title, Text } = Typography

export default function ChatbotInteractionPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [question, setQuestion] = useState<string>('')
  const [chatHistory, setChatHistory] = useState<
    { question: string; answer: string; timestamp: number }[]
  >([])

  const { mutateAsync: generateText } = Api.ai.generateText.useMutation()

  const handleAskQuestion = async () => {
    if (!question.trim()) {
      enqueueSnackbar('Please enter a question', { variant: 'error' })
      return
    }
    try {
      const response = await generateText({ prompt: question })
      setChatHistory([
        { question, answer: response.answer, timestamp: Date.now() },
        ...chatHistory,
      ])
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
            responses from the AI chatbot. This is loaded with the PMF handbook.
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
                <div style={{ width: '100%' }}>
                  <Text strong>Question: </Text>
                  <Text>{item.question}</Text>
                  <br />
                  <Text strong>Answer: </Text>
                  <Text>{item.answer}</Text>
                  <div style={{ textAlign: 'right' }}>
                    <Text type="secondary">
                      {dayjs(item.timestamp).format('YYYY-MM-DD HH:mm:ss')}
                    </Text>
                  </div>
                </div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </PageLayout>
  )
}
