import { serviceCategories, getCategoryBySlug } from '@/lib/services'
import { SectionBlocks } from '@/components/SectionBlocks'
import { CTASection } from '@/components/ui/CTASection'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return serviceCategories.map((cat) => ({ slug: cat.slug }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  return (
    <>
      <div className="pt-24">
        <SectionBlocks category={category} />
      </div>
      <CTASection />
    </>
  )
}
