import ModelCard from '@/components/ModelCard'
import { Model } from '@/lib/types'
import SortControls from './SortControls'
import LoadingUI from './LoadingUI'
import type { TransitionStartFunction } from 'react'
import NotFoundUI from './NotFoundUI'


export default function ModelsGrid({ models, categoryName, search, isPending, startTransition }: { models: Model[], categoryName?: string, search?: string, isPending: boolean, startTransition: TransitionStartFunction }) {

  let title = "3D Models"
  if (categoryName) title = categoryName
  if (search) title = `Search results for "${search}"`
  if (categoryName && search) title = `Search results for "${search}" in ${categoryName}`
  return (
    <div className="container px-4 py-8 mx-auto">

      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:item-center mb-8">
        <h1 className="mb-8 text-3xl font-bold">{title}</h1>
        <SortControls startTransition={startTransition} />
      </div>


      {isPending ? (
        <LoadingUI>Loading Models...</LoadingUI>
      ) :
        models.length === 0 ? (
          <NotFoundUI
            title="No Models Found"
            subtitle="We couldn't find any models matching your search"
            link_text="See all models"
            link_href="/3d-models" />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {models.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        )}

    </div>
  )
}