import { useUserContext } from '@/core/context'
import { DollarOutlined } from '@ant-design/icons'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { useDesignSystem } from '../../provider'
import { Leftbar } from './components/Leftbar'
import { Topbar } from './components/Topbar'

import { OrganizationSelect } from './components/OrganizationSelect'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const { organization, authenticationStatus: isLoggedIn } = useUserContext()

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  const itemsOrganization = [
    // {
    //   key: '/organizations/:organizationId/dashboard',
    //   label: 'Workspace Dashboard',
    //   onClick: () =>
    //     goTo(
    //       '/organizations/:organizationId/dashboard'.replace(
    //         ':organizationId',
    //         organization.id,
    //       ),
    //     ),
    // },

    {
      key: '/organizations/:organizationId/chat',
      label: 'Chat',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/chat'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/users',
      label: 'Users',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/users'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/billing',
      label: 'Billing',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/billing'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/ai-rag-upload',
      label: 'Upload',
      onClick: () =>
        goTo(
          '/organizations/:organizationId/ai-rag-upload'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    // {
    //   key: '/organizations/:organizationId/pricing',
    //   icon: <DollarOutlined />,
    //   label: 'Pricing',
    //   onClick: () =>
    //     goTo(
    //       '/organizations/:organizationId/pricing'.replace(
    //         ':organizationId',
    //         organization.id,
    //       ),
    //     ),
    // },
  ].filter(_ => !!organization)

  const itemsLeftbar = []

  const itemsTopbar = [
    {
      key: '/home',
      label: 'Home',
      onClick: () => goTo('/home'),
    },

    ...itemsOrganization,
  ]

  const itemsLeftbarBottom = []

  const itemsMobile = [
    {
      key: '/profile',
      label: 'Profile',
      onClick: () => goTo('/profile'),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
    ...itemsLeftbarBottom,
  ]

  const isLeftbar = itemsLeftbar.length > 0 && !isMobile

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar
                header={<OrganizationSelect />}
                items={itemsLeftbar}
                itemsBottom={itemsLeftbarBottom}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              itemsMobile={itemsMobile}
              isLoggedIn={isLoggedIn === 'authenticated'}
              items={itemsTopbar}
              header={!isLeftbar && <OrganizationSelect />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}
