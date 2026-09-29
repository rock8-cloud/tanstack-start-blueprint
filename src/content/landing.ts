import {
  BellOff,
  Globe,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// Driftwave is a fictional product. All copy below is placeholder content for
// the blueprint's landing page — replace it with your own.

export const deployUrl =
  'https://app.rock8.cloud/login?redirect=%2Fnew-deployment%3Fblueprint%3Dtanstack-start'

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Customers', href: '#customers' },
  { label: 'Pricing', href: '#pricing' },
]

export const customers = [
  'Northwind',
  'Hollow Pine',
  'Quillstack',
  'Brightlane',
  'Otterly',
  'Parcel & Co.',
]

export const features: Array<{
  icon: LucideIcon
  title: string
  body: string
}> = [
  {
    icon: MessageSquareText,
    title: 'Standups in three lines',
    body: 'Yesterday, today, blockers. Everyone posts when it suits them — no call, no calendar Tetris.',
  },
  {
    icon: Sparkles,
    title: 'AI digest every morning',
    body: 'One readable summary per team, with blockers pulled to the top and owners already tagged.',
  },
  {
    icon: Globe,
    title: 'Built for every timezone',
    body: 'Check-ins open at each person’s local morning, so nobody answers at midnight.',
  },
  {
    icon: BellOff,
    title: 'Quiet by default',
    body: 'One nudge, one digest. Driftwave never adds to the notification pile it replaces.',
  },
  {
    icon: TrendingUp,
    title: 'Spot drift early',
    body: 'Recurring blockers and stalled work surface as trends, weeks before a retro would find them.',
  },
  {
    icon: ShieldCheck,
    title: 'Private where it matters',
    body: 'SSO, per-channel visibility and data residency in the region you choose.',
  },
]

export const mockUpdates = [
  {
    name: 'Maya R.',
    initials: 'MR',
    tone: 'bg-[#f4b183]',
    time: '8:04 am · Lisbon',
    text: 'Shipped the billing retry flow. Today: webhook tests.',
    status: { label: 'On track', className: 'bg-emerald-100 text-emerald-800' },
  },
  {
    name: 'Tomás K.',
    initials: 'TK',
    tone: 'bg-[#9fd3c7]',
    time: '9:12 am · Berlin',
    text: 'Search indexing is waiting on the new API keys.',
    status: { label: 'Blocked', className: 'bg-rose-100 text-rose-800' },
  },
  {
    name: 'Aiko S.',
    initials: 'AS',
    tone: 'bg-[#b7c4f5]',
    time: '8:47 am · Osaka',
    text: 'Onboarding copy is in review. Pairing with Maya at 3.',
    status: { label: 'In review', className: 'bg-amber-100 text-amber-800' },
  },
]

export const stats = [
  { value: '4.2 h', label: 'meetings saved per person, per week' },
  { value: '93%', label: 'of check-ins posted before 10 am local' },
  { value: '1,800+', label: 'teams shipping with Driftwave' },
  { value: '12 min', label: 'median time to the first digest' },
]

export const testimonial = {
  quote:
    'We cancelled our daily call in week one and never looked back. The digest tells me more in two minutes than the meeting did in thirty.',
  name: 'Jordan Lee',
  initials: 'JL',
  role: 'VP Engineering, Quillstack',
}

export const tiers = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'up to 8 people',
    blurb: 'Everything a small team needs to drop the daily call.',
    perks: ['Unlimited check-ins', 'Daily digest', 'Slack & email delivery'],
    featured: false,
  },
  {
    name: 'Team',
    price: '$6',
    cadence: 'per person / month',
    blurb: 'For teams spread across timezones and projects.',
    perks: [
      'AI summaries & blocker detection',
      'Timezone-aware schedules',
      'Trends & drift alerts',
      'Jira and Linear links',
    ],
    featured: true,
  },
  {
    name: 'Company',
    price: 'Custom',
    cadence: 'annual billing',
    blurb: 'Rollouts across departments, with the controls to match.',
    perks: [
      'SSO & SCIM',
      'Data residency',
      'Audit log',
      'Dedicated success manager',
    ],
    featured: false,
  },
]

export const footerColumns = [
  {
    title: 'Product',
    links: ['Features', 'Integrations', 'Pricing', 'Changelog'],
  },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
  { title: 'Resources', links: ['Docs', 'Guides', 'Status', 'Security'] },
]
