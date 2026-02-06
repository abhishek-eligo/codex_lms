import type { UserRole } from '~/stores/auth'

export interface Course {
  id: string
  title: string
  lessons: number
  status: 'Draft' | 'Published'
  progress?: number
}

export interface Company {
  id: string
  name: string
  industry: string
  email: string
  phone: string
  city: string
  country: string
}

export interface MarketplaceItem {
  id: string
  title: string
  coursesIncluded: number
  price: string
  licenses: number
  category: string
}

const courses: Course[] = [
  { id: 'c-101', title: 'Leadership Foundations', lessons: 8, status: 'Published', progress: 72 },
  { id: 'c-102', title: 'Compliance 2024', lessons: 12, status: 'Published', progress: 40 },
  { id: 'c-103', title: 'Customer Success Mastery', lessons: 6, status: 'Draft', progress: 0 }
]

const companies: Company[] = [
  {
    id: 'co-001',
    name: 'Acme Corp',
    industry: 'Technology',
    email: 'contact@acme.com',
    phone: '+1 555-0101',
    city: 'San Francisco',
    country: 'USA'
  },
  {
    id: 'co-002',
    name: 'Nordic Health',
    industry: 'Healthcare',
    email: 'hello@nordichealth.com',
    phone: '+46 555-2211',
    city: 'Stockholm',
    country: 'Sweden'
  }
]

const marketplaceItems: MarketplaceItem[] = [
  { id: 'm-101', title: 'Onboarding Essentials', coursesIncluded: 4, price: '$499', licenses: 100, category: 'HR' },
  { id: 'm-102', title: 'Sales Enablement Pack', coursesIncluded: 6, price: '$799', licenses: 200, category: 'Sales' },
  { id: 'm-103', title: 'Cybersecurity Starter', coursesIncluded: 3, price: '$599', licenses: 150, category: 'IT' }
]

export const getCourses = () => courses
export const getCompanies = () => companies
export const getMarketplaceItems = () => marketplaceItems

export const getNavigationForRole = (role: UserRole) => {
  if (role === 'SA') {
    return [
      { label: 'Dashboard', to: '/sa/dashboard' },
      { label: 'Course List', to: '/sa/courses' },
      { label: 'Create Course', to: '/sa/courses/create' },
      { label: 'Lesson Builder', to: '/sa/courses/builder' },
      { label: 'Companies', to: '/sa/companies' },
      { label: 'Users', to: '/sa/users' },
      { label: 'Marketplace', to: '/sa/marketplace' },
      { label: 'Business Rules', to: '/sa/rules' },
      { label: 'Config', to: '/sa/config' }
    ]
  }

  if (role === 'CA') {
    return [
      { label: 'Dashboard', to: '/ca/dashboard' },
      { label: 'Users', to: '/ca/users' },
      { label: 'Groups', to: '/ca/groups' },
      { label: 'Orders', to: '/ca/orders' },
      { label: 'My Learning', to: '/ca/my-learning' },
      { label: 'Discover', to: '/ca/discover' }
    ]
  }

  return [
    { label: 'Dashboard', to: '/learner/dashboard' },
    { label: 'My Learning', to: '/learner/my-learning' },
    { label: 'Discover', to: '/learner/discover' }
  ]
}
