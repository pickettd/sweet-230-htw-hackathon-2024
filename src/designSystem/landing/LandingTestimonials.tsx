import { HTMLAttributes } from 'react'
import { Typography, Avatar, Card } from 'antd'
import { DesignSystemUtility } from '../helpers/utility'

const { Title, Paragraph } = Typography

type Testimonial = {
  name: string
  content: string
  designation?: string
  avatar?: string
}

interface Props extends HTMLAttributes<HTMLElement> {
  anchorId?: string
  title: string
  subtitle: string
  testimonials: Testimonial[]
}

export const LandingTestimonials: React.FC<Props> = ({
  title,
  subtitle,
  testimonials,
  className,
  ...props
}) => {
  return (
    <section
      className={DesignSystemUtility.buildClassNames('py-16 px-5', className)}
      {...props}
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Title level={2} className="text-4xl font-bold mb-4">
            {title}
          </Title>
          <Paragraph className="text-lg text-gray-600">{subtitle}</Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial: Testimonial, idx: number) => (
            <TestimonialCard key={`testimonial-${idx}`} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

const TestimonialCard = ({
  name,
  content,
  designation,
  avatar,
}: Testimonial) => {
  return (
    <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <Avatar src={avatar} size={64} className="mr-4" />
        <div>
          <Title level={4} className="mb-0">
            {name}
          </Title>
          <Paragraph className="text-gray-600 mb-0">{designation}</Paragraph>
        </div>
      </div>
      <Paragraph className="text-gray-700">{content}</Paragraph>
    </Card>
  )
}
