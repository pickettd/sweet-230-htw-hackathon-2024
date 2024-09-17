'use client'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import {
  ApiOutlined,
  BarChartOutlined,
  RobotOutlined,
  SafetyOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'AI-Powered Responses',
      description:
        'Get instant, accurate answers to HR queries using advanced AI technology.',
      icon: <RobotOutlined />,
    },
    {
      heading: 'Multi-Platform Integration',
      description:
        'Seamlessly works with Slack, MS Teams, and email for universal access.',
      icon: <ApiOutlined />,
    },
    {
      heading: 'Customizable Workflows',
      description:
        'Create tailored HR processes and automate routine tasks effortlessly.',
      icon: <SettingOutlined />,
    },
    {
      heading: 'Data-Driven Insights',
      description:
        'Gain valuable HR analytics to make informed decisions and improve policies.',
      icon: <BarChartOutlined />,
    },
    {
      heading: 'Compliance Management',
      description:
        'Stay up-to-date with changing regulations and ensure policy adherence.',
      icon: <SafetyOutlined />,
    },
    {
      heading: 'Employee Self-Service',
      description:
        'Empower employees with easy access to HR information and request management.',
      icon: <UserOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      designation: 'Chief People Officer',
      content:
        'Mel has transformed our HR department. The AI-powered responses have reduced query resolution time by 70%.',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    },
    {
      name: 'Alex Chen',
      designation: 'Head of Talent Acquisition',
      content:
        'The customizable workflows in Mel have streamlined our onboarding process, saving us countless hours.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Priya Patel',
      designation: 'Compliance Manager',
      content:
        "Mel's compliance management features keep us ahead of regulatory changes. It's been a game-changer for risk mitigation.",
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Tom Baker',
      designation: 'Employee Experience Lead',
      content:
        'The self-service portal has empowered our employees and significantly reduced the load on our HR team.',
      avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    },
    {
      name: 'Maria Rodriguez',
      designation: 'HR Analytics Specialist',
      content:
        'The data-driven insights from Mel have allowed us to make informed decisions about our HR policies and practices.',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    },
    {
      name: 'James Lee',
      designation: 'IT Director',
      content:
        'Integrating Mel with our existing systems was seamless. The multi-platform support is impressive.',
      avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
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
      title: 'Starter',
      description: 'For small businesses',
      monthly: 19,
      yearly: 190,
      features: [
        'AI-Powered Responses',
        'Slack Integration',
        'Basic Analytics',
      ],
    },
    {
      title: 'Professional',
      description: 'For growing companies',
      monthly: 49,
      yearly: 490,
      features: [
        'All Starter Features',
        'MS Teams Integration',
        'Custom Workflows',
        'Advanced Analytics',
      ],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'For large organizations',
      monthly: 'Custom',
      yearly: 'Custom',
      features: [
        'All Professional Features',
        'Dedicated Account Manager',
        'Custom Integrations',
        'On-Premise Deployment Option',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: "How accurate are Mel's AI-powered responses?",
      answer:
        "Mel's AI is trained on vast HR datasets and continuously learns from interactions, achieving over 95% accuracy in responses.",
    },
    {
      question: "Can Mel be customized for our company's specific policies?",
      answer:
        "Absolutely! Mel can be trained on your company's unique HR policies and procedures for tailored, accurate responses.",
    },
    {
      question: 'How does Mel ensure data security and privacy?',
      answer:
        'Mel employs bank-level encryption, regular security audits, and is fully GDPR and CCPA compliant to protect your sensitive HR data.',
    },
    {
      question: 'What kind of analytics does Mel provide?',
      answer:
        'Mel offers comprehensive analytics including query trends, response times, employee satisfaction metrics, and custom reports to drive HR insights.',
    },
    {
      question: 'How often is Mel updated with new features?',
      answer:
        'We release major updates quarterly, with minor improvements and bug fixes rolled out continuously based on user feedback and industry trends.',
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
      description: 'Create your Mel account and choose your plan.',
    },
    {
      heading: 'Configure',
      description: 'Set up your HR knowledge base and customize workflows.',
    },
    {
      heading: 'Integrate',
      description: 'Connect Mel with your existing communication platforms.',
    },
    {
      heading: 'Train',
      description: "Provide company-specific information to enhance Mel's AI.",
    },
    {
      heading: 'Launch',
      description:
        'Introduce Mel to your team and start revolutionizing your HR processes.',
    },
  ]

  const painPoints = [
    {
      emoji: '⏳',
      title: 'Time-Consuming HR Processes',
    },
    {
      emoji: '😤',
      title: 'Employee Dissatisfaction',
    },
    {
      emoji: '📉',
      title: 'Inefficient Resource Allocation',
    },
    {
      emoji: '❓',
      title: 'Inconsistent Policy Implementation',
    },
    {
      emoji: '📊',
      title: 'Lack of Actionable HR Insights',
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
      {/*<LandingHero
        title="Transform Your HR with AI-Powered Mel"
        subtitle="Streamline Processes, Boost Efficiency, and Enhance Employee Experience"
        buttonText="Start Free Trial"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/cmu2QU-melthehr-gwAm"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={10000}
            suffixText="satisfied users worldwide"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Trusted By" />
      <LandingPainPoints
        title="Common HR Challenges Solved by Mel"
        painPoints={painPoints}
      />
      <LandingFeatures
        id="features"
        title="Revolutionize Your HR Operations"
        subtitle="Harness the Power of AI to Transform Your Workplace"
        features={features}
      />
      <LandingHowItWorks title="Getting Started with Mel" steps={steps} />
      <LandingTestimonials
        id="testimonials"
        title="Success Stories from HR Leaders"
        subtitle="See How Mel is Transforming HR Departments Worldwide"
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Choose the Perfect Plan for Your Team"
        subtitle="Scalable Solutions for Businesses of All Sizes"
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Everything You Need to Know About Mel"
        questionAnswers={questionAnswers}
      />*/}
    </LandingContainer>
  )
}
