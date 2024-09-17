import { AnchorHTMLAttributes } from 'react'
import { Button } from 'antd'

export interface IButton extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  size?: 'small' | 'middle' | 'large'
  block?: boolean
  type?: 'default' | 'primary' | 'dashed' | 'link' | 'text'
  children?: React.ReactNode
}

const LandingButton = (props: IButton) => {
  const {
    href,
    block,
    size = 'middle',
    type = 'primary',
    children,
    ...remainingProps
  } = props

  return (
    <Button
      href={href}
      block={block}
      size={size}
      type={type}
      {...remainingProps}
    >
      {children}
    </Button>
  )
}

export default LandingButton
