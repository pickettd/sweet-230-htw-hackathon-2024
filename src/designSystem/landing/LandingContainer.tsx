import { HTMLAttributes } from 'react'
import { LandingFooter } from './LandingFooter'
import { LandingNavBar } from './LandingNavBar/landing.navbar'

interface Props extends HTMLAttributes<HTMLElement> {
  navItems: {
    link: string
    title: string
    target?: '_blank'
  }[]
  children: React.ReactNode
}

export const LandingContainer: React.FC<Props> = ({
  navItems,
  children,
  ...props
}) => {
  return (
    <main {...props} className="bg-[#FFA07A] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LandingNavBar navItems={navItems} />
        {children}
        <LandingFooter />
      </div>
    </main>
  )
}
