import { getModels, getModelsCount } from '@/lib/controllers/models'
import { Model } from '@/lib/types'
import ModelsBrowser from '@/components/ModelsBrowser'
import { getQueryParams } from '@/lib/utils'
import { redirect } from 'next/navigation'
import { MODELS_PER_PAGE } from '@/lib/constants'



export default async function ModelsPage({ searchParams }: { searchParams: Promise<{ search?: string, sort?: string, page?: string }> }) {

  const { search, sort, page } = await getQueryParams({ searchParams })

  const models: Model[] = await getModels({ search, sort, page, modelsPerPage: MODELS_PER_PAGE })
  const totalModels = await getModelsCount({ search })
  const totalPages = Math.max(1, Math.ceil(totalModels / MODELS_PER_PAGE))


  if (page < 1 || page > totalPages || sort === null) {
    redirect('/3d-models')
  }



  return (
    <div>
      <ModelsBrowser search={search} models={models} totalPages={totalPages} currentPage={page} />
    </div>
  )
}