'use client'

import { useUserContext } from '@/core/context'
import { useUploadPublic } from '@/core/hooks/upload'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'
import { Product } from '@/server/libraries/payment'
import { DeleteOutlined, UploadOutlined } from '@ant-design/icons'
import { Button, Col, List, Row, Spin, Typography, Upload } from 'antd'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
const { Title, Text } = Typography

export default function AIRAGFileUploadPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [fileList, setFileList] = useState<any[]>([])
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

  const {
    data: files,
    isLoading,
    refetch,
  } = Api.ragVector.findMany.useQuery({})
  const { mutateAsync: upload } = useUploadPublic()
  const { mutateAsync: loadFile } = Api.rag.loadFile.useMutation()
  const { mutateAsync: deleteFile } = Api.ragVector.delete.useMutation()

  const handleUpload = async (file: any) => {
    try {
      const { url } = await upload({ file })
      const { key } = await loadFile({ url })
      enqueueSnackbar('File uploaded successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to upload file', { variant: 'error' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteFile({ where: { id } })
      enqueueSnackbar('File deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete file', { variant: 'error' })
    }
  }

  const uploadProps = {
    onRemove: (file: any) => {
      setFileList(prevFileList => {
        const index = prevFileList.indexOf(file)
        const newFileList = prevFileList.slice()
        newFileList.splice(index, 1)
        return newFileList
      })
    },
    beforeUpload: (file: any) => {
      setFileList(prevFileList => [...prevFileList, file])
      handleUpload(file)
      return false
    },
    fileList,
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>AI RAG File Upload</Title>
          <Text>
            As an admin, you can upload and manage files to be used in the AI
            RAG context.
          </Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col span={24}>
          <Upload {...uploadProps} fileList={fileList}>
            <Button icon={<UploadOutlined />}>Upload File</Button>
          </Upload>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col span={24}>
          {isLoading ? (
            <Spin />
          ) : (
            <List
              itemLayout="horizontal"
              dataSource={files}
              renderItem={(file: any) => (
                <List.Item
                  actions={[
                    <Button
                      type="link"
                      icon={<DeleteOutlined />}
                      onClick={() => handleDelete(file.id)}
                    />,
                  ]}
                >
                  <List.Item.Meta
                    title={file.key}
                    description={`Uploaded on ${file.dateCreated}`}
                  />
                </List.Item>
              )}
            />
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
