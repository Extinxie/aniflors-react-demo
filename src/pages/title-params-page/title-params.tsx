import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { generalAnimes } from '../../shared/store/general-store/general-store'
import Header from '../../widgets/layout/header/ui/header'
import type { ITag } from '../../shared/types/animes.type'
import { cleanDescription } from '../../entities/utils/clear-description/clean-description'

export const TitleParams = observer(() => {
	const { id } = useParams()
	const { aplication } = generalAnimes

	useEffect(() => {
		if (id) {
			generalAnimes.getGeneralAnimes(id)
		}
	}, [id])

	const groupTagsByType = (tags: ITag[]) => {
		const genres = tags?.filter((tag) => tag.type === 'GENRE') || []
		const demographics =
			tags?.filter((tag) => tag.type === 'DEMOGRAPHIC') || []
		return { genres, demographics }
	}

	return (
		<div className="min-h-screen bg-neutral-950">
			<Header />

			{aplication.map((item) => {
				const { genres, demographics } = groupTagsByType(
					item.tags || []
				)

				return (
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

								<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-neutral-900/30 rounded-xl p-5 mb-6">
									{item.status && (
										<div>
											<div className="text-xs text-gray-400 mb-1">
												Статус
											</div>
											<div className="font-medium text-white">
												{item.status === 'ONGOING'
													? 'Онгоинг'
													: item.status === 'RELEASED'
														? 'Вышел'
														: item.status ===
															  'ANNOUNCE'
															? 'Анонсирован'
															: item.status}
											</div>
										</div>
									)}
									{item.year && (
										<div>
											<div className="text-xs text-gray-400 mb-1">
												Год
											</div>
											<div className="font-medium text-white">
												{item.year}
											</div>
										</div>
									)}
									{item.episodesCount != null &&
										item.episodesCount > 0 && (
											<div>
												<div className="text-xs text-gray-400 mb-1">
													Эпизодов
												</div>
												<div className="font-medium text-white">
													{item.episodesCount}
												</div>
											</div>
										)}
									<div>
										<div className="text-xs text-gray-400 mb-1">
											Страна
										</div>
										<div className="font-medium text-white">
											Япония
										</div>
									</div>
									{item.type && (
										<div>
											<div className="text-xs text-gray-400 mb-1">
												Тип
											</div>
											<div className="font-medium text-white">
												{item.type}
											</div>
										</div>
									)}
									{item.duration && (
										<div>
											<div className="text-xs text-gray-400 mb-1">
												Длительность
											</div>
											<div className="font-medium text-white">
												{item.duration} мин.
											</div>
										</div>
									)}

									{genres.length > 0 && (
										<div className="col-span-2 sm:col-span-3">
											<div className="text-xs text-gray-400 mb-2">
												Жанры
											</div>
											<div className="flex flex-wrap gap-2">
												{genres.map((genre) => (
													<Link
														key={genre.id}
														to={`/genre/${genre.englishTitle?.toLowerCase() || genre.shikimoriId}`}
														className="inline-block px-3 py-1 text-sm bg-neutral-800 hover:bg-neutral-700 rounded-full text-neutral-400 transition"
													>
														{genre.russianTitle}
													</Link>
												))}
											</div>
										</div>
									)}

									{demographics.length > 0 && (
										<div>
											<div className="text-xs text-gray-400 mb-1">
												Категория
											</div>
											<div className="font-medium text-white">
												{demographics
													.map((d) => d.russianTitle)
													.join(', ')}
											</div>
										</div>
									)}
								</div>

								<div className="flex flex-wrap gap-4 mb-8">
									<button className="relative cursor-pointer overflow-hidden bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 bg-[length:200%_100%] animate-shimmer text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-500/20 active:scale-95">
										<span className="font-bold">
											Смотреть сериал
										</span>
									</button>
									<button className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-full font-medium text-gray-300 hover:text-white transition">
										Кнопкаблять
									</button>
									<button className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-full font-medium text-gray-300 hover:text-white transition">
										Смотреть вместе
									</button>
								</div>

								{item.description && (
									<div className="rounded-xl p-5 bg-neutral-900/30 mb-8">
										<div className="text-xs text-neutral-400 mb-2 uppercase tracking-wide">
											Описание
										</div>
										<div className="text-neutral-300 leading-relaxed whitespace-pre-wrap">
											<p>
												{cleanDescription(
													item.description.slice(
														0,
														169
													) + '...'
												)}
											</p>
										</div>
									</div>
								)}

								<div className="border-b border-gray-800 mb-6">
									<div className="flex gap-6">
										<button className="pb-3 font-medium text-neutral-400 border-b-2 border-neutral-100">
											Сезоны и серии
										</button>
										<button className="pb-3 font-medium text-gray-500 hover:text-gray-300 transition">
											Похожее
										</button>
										<button className="pb-3 font-medium text-gray-500 hover:text-gray-300 transition">
											Скриншоты
										</button>
									</div>
								</div>

								{/* Список серий */}
								{item.episodes && item.episodes.length > 0 && (
									<div className="space-y-2 mb-8">
										<h3 className="text-white font-semibold mb-3">
											Список серий
										</h3>
										<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
											{item.episodes.map((ep) => (
												<div
													key={ep.id}
													className="bg-neutral-900/50 hover:bg-neutral-800 rounded-lg p-3 text-center cursor-pointer transition"
												>
													<span className="text-yellow-400 text-sm font-medium">
														Серия {ep.number}
													</span>
												</div>
											))}
										</div>
									</div>
								)}

								{/* Аудио и субтитры */}
								<div className="rounded-xl p-4 bg-neutral-900/20">
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										<div>
											<div className="text-xs text-gray-400 uppercase mb-2">
												Озвучки
											</div>
											<div className="space-y-1">
												<div className="font-medium text-gray-300">
													Русский - Студийная Банда
													(стерео)
												</div>
												<div className="font-medium text-gray-500">
													Японский (стерео) — оригинал
												</div>
											</div>
										</div>
										<div>
											<div className="text-xs text-gray-400 uppercase mb-2">
												Субтитры
											</div>
											<div className="font-medium text-gray-300">
												Русские
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
				)
			})}
		</div>
	)
})
