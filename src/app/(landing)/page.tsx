'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  SmileOutlined,
  DollarOutlined,
  MessageOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Instant Answers',
      description:
        'Get immediate responses to your HR queries, from company policies to benefits.',
      icon: <ClockCircleOutlined />,
    },
    {
      heading: 'Seamless Integration',
      description:
        'Integrated with Slack and SMS for easy access and communication.',
      icon: <MessageOutlined />,
    },
    {
      heading: 'Role-Based Access',
      description:
        'Admins can manage workspaces and invite users, while employees interact with the chatbot.',
      icon: <TeamOutlined />,
    },
    {
      heading: 'Scalable Billing',
      description:
        'Team-based billing system that scales with your business size.',
      icon: <DollarOutlined />,
    },
    {
      heading: 'Enhanced Productivity',
      description:
        'Automate routine HR tasks, freeing up time for strategic initiatives.',
      icon: <EditOutlined />,
    },
    {
      heading: 'Employee Satisfaction',
      description:
        'Quick access to information reduces frustration and increases satisfaction.',
      icon: <SmileOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'HR Manager',
      content:
        'Mel has revolutionized our HR processes. Our team is more productive and employees are happier!',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'CEO',
      content:
        'Integrating Mel into our company was a game-changer. Immediate access to information has boosted our efficiency.',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Michael Johnson',
      designation: 'CTO',
      content:
        'The seamless integration with Slack and SMS makes Mel an invaluable tool for our team.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Emily Davis',
      designation: 'HR Specialist',
      content:
        'Mel has significantly reduced the time we spend on routine HR tasks. Highly recommend!',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: 'David Wilson',
      designation: 'Operations Manager',
      content:
        'Our employees love the instant answers they get from Mel. It’s a fantastic addition to our HR toolkit.',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: 'Sophia Brown',
      designation: 'HR Director',
      content:
        'Mel has streamlined our HR processes, making our team more efficient and our employees more satisfied.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
    {
      title: 'Testimonials',
      link: '#testimonials',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'Ideal for small teams',
      monthly: 9,
      yearly: 69,
      features: ['Instant Answers', 'Slack Integration'],
    },
    {
      title: 'Pro',
      description: 'Perfect for growing businesses',
      monthly: 29,
      yearly: 249,
      features: ['All Basic Features', 'SMS Integration', 'Role-Based Access'],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'Best for large organizations',
      monthly: 99,
      yearly: 999,
      features: [
        'All Pro Features',
        'Dedicated Support',
        'Custom Integrations',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: 'How does Mel integrate with Slack?',
      answer:
        'Mel can be added to your Slack workspace, allowing employees to ask questions directly within Slack.',
    },
    {
      question: 'Is there a limit to the number of users?',
      answer:
        'No, Mel’s team-based billing system scales with your business, accommodating any number of users.',
    },
    {
      question: 'Can admins manage user roles?',
      answer:
        'Yes, admins have the ability to manage the workspace and invite users.',
    },
    {
      question: 'What kind of support is available?',
      answer:
        'We offer various support options depending on your package, including dedicated support for Enterprise users.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description: 'Create an account and set up your workspace.',
    },
    {
      heading: 'Integrate',
      description: 'Add Mel to your Slack or SMS system.',
    },
    {
      heading: 'Customize',
      description: 'Set up user roles and permissions.',
    },
    {
      heading: 'Start Chatting',
      description:
        'Employees can now interact with Mel for instant HR support.',
    },
  ]

  const painPoints = [
    {
      emoji: '⏳',
      title: 'Time-Consuming HR Tasks',
    },
    {
      emoji: '😤',
      title: 'Employee Frustration',
    },
    {
      emoji: '📉',
      title: 'Productivity Losses',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Revolutionize Your HR Processes with Mel"
        subtitle="Instant, Accurate, and Efficient HR Support at Your Fingertips"
        buttonText="Get Started"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/cmu2QU-melthehr-gwAm"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy users"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints
        title="HR Challenges Impacting Your Business"
        painPoints={painPoints}
      />
      <LandingHowItWorks title="How Mel Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Seamless HR Operations with Mel"
        subtitle="Empower Your HR Team and Enhance Employee Satisfaction"
        features={features}
      />
      <LandingTestimonials
        id="testimonials"
        title="What Our Customers Are Saying"
        subtitle="Real Stories of Transformation and Success"
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Flexible Pricing to Suit Your Needs"
        subtitle="Choose a Plan That Works Best for Your Business"
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Get Answers to Common Queries"
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Transform Your HR Processes?"
        subtitle="Sign up now and experience the efficiency of Mel"
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
