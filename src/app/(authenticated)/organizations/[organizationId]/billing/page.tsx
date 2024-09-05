'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import {
  Typography,
  Form,
  Input,
  Button,
  Row,
  Col,
  Card,
  Spin,
  Table,
  Space,
  Modal,
} from 'antd'
import {
  EditOutlined,
  UserAddOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function BillingandSubscriptionPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, organization } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [isEditing, setIsEditing] = useState(false)
  const [billingInfo, setBillingInfo] =
    useState<
      Prisma.BillingDataGetPayload<{ include: { organization: true } }>
    >()
  const [users, setUsers] = useState<
    Prisma.UserGetPayload<{ include: { organizationRoles: true } }[]>
  >([])

  const {
    data: billingData,
    isLoading: billingLoading,
    refetch: refetchBilling,
  } = Api.billingData.findFirst.useQuery({
    where: { organizationId: organization?.id },
    include: { organization: true },
  })

  const {
    data: usersData,
    isLoading: usersLoading,
    refetch: refetchUsers,
  } = Api.user.findMany.useQuery({
    where: {
      organizationRoles: { some: { organizationId: organization?.id } },
    },
    include: { organizationRoles: true },
  })

  const { mutateAsync: updateBilling } = Api.billingData.update.useMutation()
  const { mutateAsync: deleteUser } = Api.user.delete.useMutation()

  useEffect(() => {
    if (billingData) setBillingInfo(billingData)
    if (usersData) setUsers(usersData)
  }, [billingData, usersData])

  const handleUpdateBilling = async (values: any) => {
    try {
      await updateBilling({ where: { id: billingInfo?.id }, data: values })
      enqueueSnackbar('Billing information updated successfully', {
        variant: 'success',
      })
      setIsEditing(false)
      refetchBilling()
    } catch (error) {
      enqueueSnackbar('Failed to update billing information', {
        variant: 'error',
      })
    }
  }

  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser({ where: { id: userId } })
      enqueueSnackbar('User deleted successfully', { variant: 'success' })
      refetchUsers()
    } catch (error) {
      enqueueSnackbar('Failed to delete user', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteUser(record.id)}
          />
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Billing and Subscription</Title>
      <Text>
        Manage your current billing plan and usage, update billing information,
        and manage users for billing purposes.
      </Text>

      <Spin spinning={billingLoading || usersLoading}>
        <Card
          title="Current Billing Plan"
          extra={
            <Button icon={<EditOutlined />} onClick={() => setIsEditing(true)}>
              Edit
            </Button>
          }
        >
          {billingInfo && (
            <>
              <p>Number of Users: {billingInfo.numberOfUsers}</p>
              <p>Billing Date: {billingInfo.billingDate}</p>
            </>
          )}
        </Card>

        <Modal
          title="Update Billing Information"
          visible={isEditing}
          onCancel={() => setIsEditing(false)}
          footer={null}
        >
          <Form layout="vertical" onFinish={handleUpdateBilling}>
            <Form.Item
              label="Number of Users"
              name="numberOfUsers"
              initialValue={billingInfo?.numberOfUsers}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="Billing Date"
              name="billingDate"
              initialValue={billingInfo?.billingDate}
            >
              <Input type="date" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Card
          title="Manage Users"
          extra={<Button icon={<UserAddOutlined />}>Add User</Button>}
        >
          <Table dataSource={users} columns={columns} rowKey="id" />
        </Card>
      </Spin>
    </PageLayout>
  )
}
