import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { generalAnimes } from '../../shared/store/general-store/general-store'
import Header from '../../widgets/layout/header/ui/header'

export const TitleParams = observer(() => {
	const { id } = useParams()
	const { aplication, loading } = generalAnimes

	useEffect(() => {
		if (id) {
			generalAnimes.getGeneralAnimes(id)
		}
	}, [id])

	if (loading) {
		return <div>Загрузка...</div>
	}

	if (!aplication.length) {
		return <div>Аниме не найдено</div>
	}

	return (
		<div>
			<div>
				<Header />
				{aplication.map((item) => (
					<div className="text-black" key={item.id}>
						<div>
							<p>{item.russianTitle}</p>
							<div>
								<div>
									<span>{item.englishTitle}</span>
									<span>{item.nativeTitle}</span>
								</div>
								<div>
									{item.shikimoriRating != null && (
										<p>Рейтинг: {item.shikimoriRating}</p>
									)}
								</div>
							</div>
							{item.status && <p>Статус: {item.status}</p>}
							{item.year && <p>Год: {item.year}</p>}
							{item.episodesCount != null && (
								<p>Эпизодов: {item.episodesCount}</p>
							)}
							{item.poster && (
								<img
									src={item.poster}
									alt={item.russianTitle ?? 'poster'}
								/>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	)
})
