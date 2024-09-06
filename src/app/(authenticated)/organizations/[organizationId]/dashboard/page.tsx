'use client'

import { Prisma } from '@prisma/client'
import { Typography, Row, Col, Card, Spin, List } from 'antd'
import { UserOutlined, BarChartOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function WorkspaceDashboardPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, checkOrganizationRole } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const isAdmin = checkOrganizationRole('admin')
  const organizationId = params.organizationId

  const { data: interactions, isLoading: interactionsLoading } =
    Api.interaction.findMany.useQuery({
      where: { userId: user?.id },
      include: { chatbot: true },
    })

  const { data: statistics, isLoading: statisticsLoading } =
    Api.statistics.findMany.useQuery({
      where: { organizationId },
    })

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Workspace Dashboard</Title>
      <Paragraph>
        View your recent interactions and workspace statistics.
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <UserOutlined /> Recent Interactions
              </>
            }
            loading={interactionsLoading}
          >
            {interactionsLoading ? (
              <Spin />
            ) : (
              <List
                itemLayout="horizontal"
                dataSource={interactions}
                renderItem={(interaction: any) => (
                  <List.Item>
                    <List.Item.Meta
                      title={interaction.chatbot?.name}
                      description={dayjs(interaction.dateCreated).format(
                        'YYYY-MM-DD HH:mm',
                      )}
                    />
                  </List.Item>
                )}
              />
            )}
          </Card>
        </Col>
        {isAdmin && (
          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <BarChartOutlined /> Workspace Statistics
                </>
              }
              loading={statisticsLoading}
            >
              {statisticsLoading ? (
                <Spin />
              ) : (
                <List
                  itemLayout="horizontal"
                  dataSource={statistics}
                  renderItem={(stat: any) => (
                    <List.Item>
                      <List.Item.Meta
                        title={stat.metric}
                        description={stat.value?.toString()}
                      />
                    </List.Item>
                  )}
                />
              )}
            </Card>
          </Col>
        )}
      </Row>
    </PageLayout>
  )
}
