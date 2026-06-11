import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { generalAnimes } from '../../shared/store/general-store/general-store'
import Header from '../../widgets/layout/header/ui/header'

export const TitleParams = observer(() => {
	const { id } = useParams()
	const { aplication } = generalAnimes

	useEffect(() => {
		if (id) {
			generalAnimes.getGeneralAnimes(id)
		}
	}, [id])

	return (
		<div className="min-h-screen bg-neutral-950">
			<Header />

			{aplication.map((item) => (
				<main
					key={item.slug}
					className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
				>
					<div className="text-sm text-gray-500 mb-6">
						<span className="hover:text-gray-300 cursor-pointer">
							<Link to={'/'}>Lacrimosa</Link>
						</span>
						<span className="mx-2">•</span>
						<span className="hover:text-gray-300 cursor-pointer">
							Аниме
						</span>
						<span className="mx-2">•</span>
						<span className="text-gray-300 font-medium">
							{item.russianTitle}
						</span>
					</div>

					<div className="flex flex-col lg:flex-row gap-8">
						<div className="lg:w-80 shrink-0">
							{item.poster && (
								<>
									<img
										src={item.poster}
										alt={item.russianTitle ?? 'poster'}
										className="w-full rounded-xl shadow-lg"
									/>
									<span className="inline-block mt-3 text-xs text-gray-500 bg-neutral-900 px-2 py-1 rounded">
										18+
									</span>
								</>
							)}
						</div>

						<div className="flex-1">
							<h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
								{item.russianTitle}
							</h1>

							<div className="flex flex-wrap items-center gap-3 mb-4">
								<span className="text-gray-300 text-lg">
									{item.englishTitle}
								</span>
								{item.nativeTitle && (
									<span className="text-gray-500 text-sm">
										({item.nativeTitle})
									</span>
								)}
							</div>

							<div className="flex flex-wrap items-center gap-4 mb-6">
								{item.shikimoriRating != null && (
									<div className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full">
										<span className="text-2xl font-bold text-yellow-400">
											{item.shikimoriRating}
										</span>
										<span className="text-sm text-gray-400">
											/ 10
										</span>
									</div>
								)}
								<div className="text-gray-500 text-sm">
									122 591 оценка • 7 рецензий
								</div>
								<button className="border border-gray-300 rounded-full px-5 py-1.5 text-sm font-medium hover:border-yellow-400 hover:text-yellow-500 transition">
									Оценить
								</button>
							</div>

							<div>
								<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 rounded-xl p-5 shadow-sm mb-6">
									{item.status && (
										<div>
											<div className="text-xs text-gray-400 mb-1">
												Статус
											</div>
											<div className="font-medium">
												{item.status}
											</div>
										</div>
									)}
									{item.year && (
										<div>
											<div className="text-xs text-gray-400 mb-1">
												Год
											</div>
											<div className="font-medium">
												{item.year}
											</div>
										</div>
									)}
									{item.episodesCount != null && (
										<div>
											<div className="text-xs text-gray-400 mb-1">
												Эпизодов
											</div>
											<div className="font-medium">
												{item.episodesCount}
											</div>
										</div>
									)}
									<div>
										<div className="text-xs text-gray-400 mb-1">
											Страна
										</div>
										<div className="font-medium">
											Япония
										</div>
									</div>
									<div>
										<div className="text-xs text-gray-400 mb-1">
											Жанр
										</div>
										<div className="font-medium">
											Романтика, Комедия, Школа
										</div>
									</div>
								</div>

								<div className="flex flex-wrap gap-4">
									<button className="relative cursor-pointer overflow-hidden bg-linear-to-r from-gray-700 via-gray-500 to-gray-700 bg-size-[200%_100%] animate-shimmer text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-500/20 active:scale-95">
										<span className="font-bold">
											Смотреть сериал
										</span>
									</button>
									<button className="border border-gray-300 hover:border-gray-400 px-4 py-3 rounded-full font-medium transition">
										кнопка
									</button>
									<button className="border border-gray-300 hover:border-gray-400 px-4 py-3 rounded-full font-medium transition">
										вау еще кнопка
									</button>
									<button className="border border-gray-300 hover:border-gray-400 px-4 py-3 rounded-full font-medium transition">
										кнопка смотреть вместе
									</button>
								</div>

								<div className="rounded-xl p-5 shadow-sm mb-6">
									<div className="text-xs text-neutral-400 mb-1">
										Описание
									</div>
									<div className="font-semibold text-neutral-500 leading-relaxed">
										Действие аниме происходит в мире, где
										люди оказались вовсе не последним звеном
										в пищевой цепи, и любой ничего не
										подозревающий обыватель при должной доле
										невезения может оказаться съеденным
										демонами, которые воплощают собой
										негативные человеческие эмоции. Таких
										созданий называют проклятиями.
									</div>
								</div>
							</div>

							<div className="border-b border-gray-200 mb-4">
								<div className="flex gap-6">
									<button className="pb-3 font-medium text-neutral-500 border-b-2 border-neutral-200">
										Сезоны и серии
									</button>
									<button className="pb-3 font-medium text-neutral-500 hover:text-neutral-700">
										Похожее
									</button>
									<button className="pb-3 font-medium text-neutral-500 hover:text-neutral-700">
										Скриншоты
									</button>
								</div>
							</div>

							<div className="rounded-xl p-4 mb-6">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div>
										<div className="text-xs text-gray-400 uppercase mb-1">
											Озвучки
										</div>
										<div className="space-y-1">
											<div className="font-medium">
												Русский - Студийная Банда
												(стерео)
											</div>
											{/* <div className="font-medium text-gray-600">
												Японский (стерео)
											</div> */}
										</div>
									</div>
									<div>
										<div className="text-xs text-gray-400 uppercase mb-1">
											Субтитры
										</div>
										<div className="font-medium">
											Русские
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			))}
		</div>
	)
})
