import { getModels } from '@/lib/controllers/models'
import { Model } from '@/lib/types'
import { getCategoryBySlug } from '@/lib/controllers/categories'
import ModelsBrowser from '@/components/ModelsBrowser'
import { notFound } from 'next/navigation'
import { getModelsCount } from '@/lib/controllers/models'
import { getQueryParams } from '@/lib/utils'
import { redirect } from 'next/navigation'
import { MODELS_PER_PAGE } from '@/lib/constants'

export default async function CategoryPage({ params, searchParams }: {
    params: Promise<{ categorySlug: string }>,
    searchParams: Promise<{ search?: string, sort?: string, page?: string }>
}) {
    const { categorySlug } = await params
    const { search, sort, page } = await getQueryParams({ searchParams })
    const models: Model[] = await getModels({ search, sort, categorySlug, page, modelsPerPage: MODELS_PER_PAGE })
    const totalModels = await getModelsCount({ search, categorySlug })
    const totalPages = Math.max(1, Math.ceil(totalModels / MODELS_PER_PAGE))
    const category = await getCategoryBySlug(categorySlug)

    if (!category) {
        notFound()
    }



    if (page < 1 || page > totalPages || sort === null) {
        redirect(`/3d-models/categories/${categorySlug}`)
    }


    return (
        <div>
            <ModelsBrowser search={search} models={models} categoryName={category?.name} currentPage={page} totalPages={totalPages} />
        </div>
    )
}