export interface ServiceOffering {
  title: string
  description: string
  whyItMatters?: string[]
  cipherValue?: string
  capabilities?: string[]
  benefits?: string[]
}

export interface ServiceCategory {
  slug: string
  title: string
  shortTitle: string
  tagline: string
  description: string
  icon: string
  navTitle?: string
  offerings: ServiceOffering[]
}
