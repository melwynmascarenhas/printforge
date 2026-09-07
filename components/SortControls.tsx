import SortButton from '@/components/SortButton'
import { TransitionStartFunction } from 'react'

export default function SortControls({ startTransition }: { startTransition: TransitionStartFunction }) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>

            <SortButton sort="alpha" startTransition={startTransition}>A-Z</SortButton>
            <SortButton sort="popular" startTransition={startTransition}>Popular</SortButton>
            <SortButton sort="recent" startTransition={startTransition}>Recent</SortButton>
        </div>
    )
}