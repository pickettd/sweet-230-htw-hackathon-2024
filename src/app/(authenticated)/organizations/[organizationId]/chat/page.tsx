'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'
import { Product } from '@/server/libraries/payment'
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
  const { user, organization } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [question, setQuestion] = useState<string>('')
  const [chatHistory, setChatHistory] = useState<
    { question: string; answer: string; timestamp: number }[]
  >([])
  const { data: products } = Api.billing.findManyProducts.useQuery(
    {},
    { initialData: [] },
  )
  const { data: subscriptions } = Api.billing.findManySubscriptions.useQuery(
    {
      organizationId: params.organizationId,
    },
    { initialData: [] },
  )
  const isSubscribed = (product: Product) => {
    return subscriptions.find(
      subscription => subscription.productId === product.id,
    )
  }
  const isAnySubscribed = () => {
    return (
      subscriptions.find(
        subscription =>
          subscription.status === 'active' ||
          subscription.status === 'trialing',
      ) !== undefined
    )
  }

  const { mutateAsync: generateAssistantText } =
    Api.ai.generateAssistantText.useMutation()
  const { mutateAsync: generateText } = Api.rag.generateText.useMutation()

  const handleAskQuestion = async () => {
    if (!question.trim()) {
      enqueueSnackbar('Please enter a question', { variant: 'error' })
      return
    }
    try {
      console.log('Starting Rag query now with org id', organization.id)
      const response = await generateText({
        prompt: question,
        tags: [organization.id],
      })
      const respAnswer = response.answer
      console.log(response)

      // console.log('also launching assistant')
      // const assistResponse = await generateAssistantText({ prompt: question })
      // const respAnswer = assistResponse.answer
      //console.log(assistResponse)

      setChatHistory([
        { question, answer: respAnswer, timestamp: Date.now() },
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
