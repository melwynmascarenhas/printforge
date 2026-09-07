"use client"

import SearchForm from "./SearchForm"
import ModelsGrid from "./ModelsGrid"
import { Model } from "@/lib/types"
import { useTransition } from "react"
import PaginationControls from "./PaginationControls"

export default function ModelsBrowser({ search, models, categoryName, totalPages, currentPage }: { search?: string, models: Model[], categoryName?: string, totalPages: number, currentPage: number }) {
    const [isPending, startTransition] = useTransition()
    return (
        <div className="container mx-auto py-8">

            <SearchForm search={search} startTransition={startTransition} />
            <ModelsGrid models={models} search={search} categoryName={categoryName} isPending={isPending} startTransition={startTransition} />
            {totalPages > 1 && <PaginationControls totalPages={totalPages} currentPage={currentPage} startTransition={startTransition} />}
        </div>
    )
}