"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { TransitionStartFunction } from "react"

export default function PaginationButton({ isActive, page, pageLabel, startTransition }: {
    isActive?: boolean,
    page: number
    pageLabel?: string | number
    startTransition: TransitionStartFunction
}) {

    const pathName = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()


    function handlePageChange() {
        //extracting existing query paramters
        const urlSearchParams = new URLSearchParams(searchParams.toString())
        //adding new (page) query params
        urlSearchParams.set('page', page.toString())
        //constructing url
        const url = `${pathName}?${urlSearchParams.toString()}`
        //setting new url
        startTransition(() => {
            router.push(url)
        })
    }


    return (
        <button onClick={handlePageChange} className={`px-3 py-1.5 text-sm rounded-md border cursor-pointer ${isActive ? 'text-white bg-orange-400 border-orange-300' : "border-gray-300 text-gray-700 hover:bg-gray-100"}`}>
            {pageLabel ? pageLabel : page}
        </button>
    )
}