import { Typography } from 'antd'
import { HTMLAttributes, ReactNode } from 'react'
import { DesignSystemUtility } from '../helpers/utility'
import LandingButton from './LandingButton'

const { Title, Paragraph } = Typography

interface Props extends HTMLAttributes<HTMLElement> {
  title: string
  subtitle: string
  buttonText: string
  pictureUrl?: string
  socialProof?: ReactNode
}

export const LandingHero: React.FC<Props> = ({
  title,
  subtitle,
  buttonText,
  pictureUrl,
  socialProof = '',
  className,
  ...props
}) => {
  return (
    <section
      className={DesignSystemUtility.buildClassNames(
        'bg-primary text-white',
        className,
      )}
      {...props}
    >
      <div className="py-16 lg:py-24 px-5 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <Title
            level={1}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            {title}
          </Title>
          <Paragraph className="text-lg mb-8 text-white/80">
            {subtitle}
          </Paragraph>
          <div className="flex justify-center lg:justify-start">
            <LandingButton
              href={'/login'}
              className="bg-white text-primary hover:bg-white/90"
              size="large"
            >
              {buttonText}
            </LandingButton>
          </div>
          {socialProof && <div className="mt-8">{socialProof}</div>}
        </div>

        <div className="relative">
          <img
            src={pictureUrl}
            alt="Hero image"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </div>
    </section>
  )
}
