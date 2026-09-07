import PaginationButton from '@/components/PaginationButton'
import { TransitionStartFunction } from 'react'

export default function PaginationControls({ totalPages, currentPage, startTransition }: { totalPages: number, currentPage: number, startTransition: TransitionStartFunction }) {

    return (
        <div className="flex justify-center gap-1">
            {/* firstpage button */}
            {currentPage !== 1 && <PaginationButton
                isActive={false}
                page={1}
                pageLabel="<<"
                startTransition={startTransition}
            />}
            {/* prev button */}
            {currentPage !== 1 && <PaginationButton
                isActive={false}
                page={currentPage - 1}
                startTransition={startTransition}
            />}
            {/* current button */}
            <PaginationButton
                isActive={true}
                page={currentPage}
                startTransition={startTransition}
            />
            {/* next button */}
            {currentPage !== totalPages && <PaginationButton
                isActive={false}
                page={currentPage + 1}
                startTransition={startTransition}
            />}
            {/* lastpage button */}
            {currentPage !== totalPages && <PaginationButton
                isActive={false}
                page={totalPages}
                pageLabel=">>"
                startTransition={startTransition}
            />}
        </div>
    )
}