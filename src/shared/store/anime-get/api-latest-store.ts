import { makeAutoObservable, runInAction } from 'mobx'
import { API_URI } from '../../api/api.const'
import type { IAnimeLatest } from '../../types/animes.type'

class AnimeLatest {
	loading = false
	latests: IAnimeLatest[] = []
	animeData: IAnimeLatest[] = []

	constructor() {
		makeAutoObservable(this)
	}

	FindAnimesPopular = async () => {
		try {
			this.loading = true
			const res = await fetch(`${API_URI}/shikimori/post-animes/animes`)

			if (!res.ok) {
				runInAction(() => {
					this.loading = false
					this.animeData = []
				})
				return
			}

			const payload = await res.json()

			const list = Array.isArray(payload)
				? payload
				: Array.isArray(payload?.data)
					? payload.data
					: []

			runInAction(() => {
				this.loading = false
				this.animeData = list
			})
		} catch (e) {
			runInAction(() => {
				this.loading = false
			})
			console.error(e)
		}
	}

	FindLatestAnimes = async () => {
		try {
			this.loading = true
			const res = await fetch(`${API_URI}/shikimori/post-animes/latests`)
			if (!res.ok) {
				runInAction(() => {
					this.loading = false
					this.latests = []
				})
				return
			}
			const payload = await res.json()
			const list = Array.isArray(payload)
				? payload
				: Array.isArray(payload?.data)
					? payload.data
					: []
			runInAction(() => {
				this.loading = false
				this.latests = list
			})
		} catch (e) {
			runInAction(() => {
				this.loading = false
			})
			console.error(e)
		}
	}
}

export const animesLatest = new AnimeLatest()
