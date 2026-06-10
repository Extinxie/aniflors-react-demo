import { observer } from 'mobx-react-lite'
import { useEffect, useRef } from 'react'
import { searchAnimes } from '../../shared/store/search-store/search-api-store'
import { AniCard } from '../anime-card/anime-card'

type SearchPanelProps = {
	onNavigate?: () => void
}

export const SearchPanel = observer(({ onNavigate }: SearchPanelProps) => {
	const { items, query, loading, foundedSearcherAnimes } = searchAnimes
	const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

	useEffect(() => {
		return () => {
			if (debounceRef.current) {
				clearTimeout(debounceRef.current)
			}
		}
	}, [])

	const handleChange = (value: string) => {
		searchAnimes.setQuery(value)

		if (debounceRef.current) {
			clearTimeout(debounceRef.current)
		}

		debounceRef.current = setTimeout(() => {
			foundedSearcherAnimes(value)
		}, 300)
	}

	return (
		<div className="w-full">
			<input
				className="bg-neutral-800 rounded-2xl text-white font-semibold px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-neutral-600"
				type="text"
				placeholder="Начать поиск"
				value={query}
				autoFocus
				onChange={(e) => handleChange(e.target.value)}
			/>

			<div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[60vh] overflow-y-auto">
				{loading ? (
					<div className="col-span-full text-center text-gray-400 py-8">
						Поиск...
					</div>
				) : items.length > 0 ? (
					items.map((item) => (
						<AniCard
							key={item.id}
							item={item}
							onNavigate={onNavigate}
						/>
					))
				) : query.trim() ? (
					<div className="col-span-full text-center text-gray-400 py-8">
						Ничего не найдено
					</div>
				) : (
					<div className="col-span-full text-center text-gray-400 py-8">
						Введите запрос для поиска
					</div>
				)}
			</div>
		</div>
	)
})
