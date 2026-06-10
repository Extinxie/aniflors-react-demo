import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { animesLatest } from '../../shared/store'

export const PlaylistOfAnime = observer(() => {
	const { FindAnimesPopular, animeData } = animesLatest

	useEffect(() => {
		FindAnimesPopular
	}, [])

	console.log(animeData)

	return (
		<div className="text-black">
			{animeData.map((anime) => (
				<div key={anime.id}>{anime.russianTitle}</div>
			))}
		</div>
	)
})
