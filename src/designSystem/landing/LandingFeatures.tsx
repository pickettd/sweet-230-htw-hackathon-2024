import { HTMLAttributes } from 'react'
import { DesignSystemUtility } from '../helpers/utility'
import { Card, Typography } from 'antd'

const { Title, Paragraph } = Typography

type FeatureType = {
  heading: string
  description: string | any
  icon: any
}

interface Props extends HTMLAttributes<HTMLElement> {
  title: string
  subtitle: string
  features: FeatureType[]
}

export const LandingFeatures: React.FC<Props> = ({
  title,
  subtitle,
  features,
  className,
  ...props
}) => {
  return (
    <section
      className={DesignSystemUtility.buildClassNames('py-16 px-5', className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto text-center">
        <Title
          level={2}
          className="text-4xl lg:text-5xl font-bold lg:tracking-tight mb-4"
        >
          {title}
        </Title>
        <Paragraph className="text-lg mb-12 text-slate-600 dark:text-slate-400">
          {subtitle}
        </Paragraph>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features?.map((item, idx) => (
            <Card
              key={idx + 'feature'}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-primary text-4xl mb-4">{item.icon}</div>
              <Title level={4} className="font-semibold mb-2">
                {item.heading}
              </Title>
              <Paragraph className="text-slate-600 dark:text-slate-400">
                {item.description}
              </Paragraph>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
