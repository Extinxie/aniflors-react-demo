export type IAnimeLatest = {
	id: string
	shikimoriId: number
	slug: string
	nativeTitle: string
	russianTitle: string
	englishTitle: null
	poster: string
	type: string
	status: string
	year: number
	shikimoriRating: any
}

export type ITag = {
	id: string
	shikimoriId: number
	russianTitle: string
	englishTitle: string
	type: 'GENRE' | 'DEMOGRAPHIC'
	createdAt: string
	updatedAt: string
}

export type IEpisode = {
	id: string
	number: number
	duration: number | null
	createdAt: string
	updatedAt: string
	screenshots: unknown[]
	translations: unknown[]
}

export type IAnimeFull = {
	id: string
	slug: string
	shikimoriId: number
	myanimelistId: number | null
	anilistId: number | null
	anilibriaId: number | null
	kinopoiskId: number | null
	imdbId: string | null
	kodikId: number | null
	description: string | null
	aksorId: number | null
	nativeTitle: string
	romajiTitle: string
	russianTitle: string
	englishTitle: string | null
	poster: string
	banner: string
	synonyms: string[]
	tags: ITag[]
	note: string | null
	hashtag: string | null
	country: string
	status: string
	type: string
	rating: string
	season: string | null
	year: number
	airedOn: string
	releasedOn: string
	nextEpisodeAt: string | null
	episodesCount: number
	episodesAired: number
	duration: number | null
	shikimoriRating: number
	myanimelistRating: number
	anilistRating: number
	kinopoiskRating: number
	imdbRating: number
	averageRating: number
	bayesianRating: number
	hasLgbt: boolean
	isCensored: boolean
	isDeleted: boolean
	createdAt: string
	updatedAt: string
	deletedAt: string | null
	studios: unknown[]
	licensors: unknown[]
	episodes: IEpisode[]
	screenshots: unknown[]
	videos: unknown[]
}
