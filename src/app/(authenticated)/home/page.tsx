'use client'

import { useUserContext } from '@/core/context'
import { PageLayout } from '@/designSystem/layouts/Page.layout'
import { TeamOutlined } from '@ant-design/icons'
import { Card, Col, Row, Typography } from 'antd'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
const { Title, Text, Paragraph } = Typography

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, checkOrganizationRole } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  // const { data: chatbotInteractions, isLoading: isLoadingChatbot } =
  //   Api.chatbotInteraction.findMany.useQuery({
  //     where: { userId: user?.id },
  //     include: { user: true },
  //   })

  // const { data: workspaceActivities, isLoading: isLoadingWorkspace } =
  //   Api.workspaceActivity.findMany.useQuery({
  //     where: { organizationId: params.organizationId },
  //     include: { organization: true, user: true },
  //   })

  const isAdmin = checkOrganizationRole('admin')

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Dashboard Overview</Title>
      <Paragraph>
        Hello!
        {/* {isAdmin
          ? 'As an admin, you can see an overview of workspace activity and user engagement.'
          : "As a user, you can see an overview of the chatbot's capabilities and recent interactions."} */}
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        {isAdmin && (
          <Col span={24}>
            <Card title="Workspace Activity" bordered={false}>
              <TeamOutlined />

              {/* {isLoadingWorkspace ? (
                <Spin />
              ) : (
                workspaceActivities?.map(activity => (
                  <div key={activity.id}>
                    <Text strong>{activity.user?.name}</Text> engaged in{' '}
                    <Text strong>{activity.organization?.name}</Text> on{' '}
                    {dayjs(activity.dateCreated).format('MMMM D, YYYY')}
                  </div>
                ))
              )} */}
            </Card>
          </Col>
        )}
        {/* {!isAdmin && (
          <Col span={24}>
            <Card title="Recent Chatbot Interactions" bordered={false}>
              <UserOutlined />

              {isLoadingChatbot ? (
                <Spin />
              ) : (
                chatbotInteractions?.map(interaction => (
                  <div key={interaction.id}>
                    <Text strong>{interaction.user?.name}</Text> interacted with
                    the chatbot on{' '}
                    {dayjs(interaction.dateCreated).format('MMMM D, YYYY')}
                  </div>
                ))
              )}
            </Card>
          </Col>
        )} */}
      </Row>
    </PageLayout>
  )
}
