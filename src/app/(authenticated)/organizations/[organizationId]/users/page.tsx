'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import {
  Typography,
  Table,
  Button,
  Modal,
  Input,
  Space,
  Popconfirm,
} from 'antd'
import { UserAddOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function UserManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [newUserEmail, setNewUserEmail] = useState('')

  const { data: users, isLoading, refetch } = Api.user.findMany.useQuery({})

  const { mutateAsync: createUser } = Api.user.create.useMutation()
  const { mutateAsync: deleteUser } = Api.user.delete.useMutation()

  const handleInviteUser = async () => {
    try {
      await createUser({ data: { email: newUserEmail, status: 'invited' } })
      enqueueSnackbar('User invited successfully', { variant: 'success' })
      refetch()
      setIsModalVisible(false)
      setNewUserEmail('')
    } catch (error) {
      enqueueSnackbar('Failed to invite user', { variant: 'error' })
    }
  }

  const handleRemoveUser = async (userId: string) => {
    try {
      await deleteUser({ where: { id: userId } })
      enqueueSnackbar('User removed successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to remove user', { variant: 'error' })
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
      render: (text: any, record: Prisma.User) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => handleRemoveUser(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger icon={<DeleteOutlined />}>
              Remove
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>User Management</Title>
      <Paragraph>
        As an admin, you can view, invite, and remove users in the workspace.
      </Paragraph>
      <Button
        type="primary"
        icon={<UserAddOutlined />}
        onClick={() => setIsModalVisible(true)}
      >
        Invite User
      </Button>
      <Table
        dataSource={users}
        columns={columns}
        rowKey="id"
        loading={isLoading}
        style={{ marginTop: 20 }}
      />
      <Modal
        title="Invite New User"
        visible={isModalVisible}
        onOk={handleInviteUser}
        onCancel={() => setIsModalVisible(false)}
      >
        <Input
          placeholder="Enter user email"
          value={newUserEmail}
          onChange={e => setNewUserEmail(e.target.value)}
        />
      </Modal>
    </PageLayout>
  )
}
