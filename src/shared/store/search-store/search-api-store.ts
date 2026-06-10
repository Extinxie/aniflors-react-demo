import { makeAutoObservable, runInAction } from 'mobx'
import { API_URI } from '../../api/api.const'
import type { IAnimeLatest } from '../../types/animes.type'

class SearchAnimes {
	items: IAnimeLatest[] = []
	query = ''
	loading = false

	constructor() {
		makeAutoObservable(this)
	}

	setQuery = (value: string) => {
		this.query = value
	}

	reset = () => {
		this.query = ''
		this.items = []
		this.loading = false
	}

	foundedSearcherAnimes = async (searchQuery: string) => {
		const trimmed = searchQuery.trim()

		runInAction(() => {
			this.query = searchQuery
		})

		if (!trimmed) {
			runInAction(() => {
				this.items = []
				this.loading = false
			})
			return
		}

		try {
			runInAction(() => {
				this.loading = true
			})

			const res = await fetch(`${API_URI}/post-animes`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ query: trimmed, limit: 20 })
			})

			if (!res.ok) {
				runInAction(() => {
					this.loading = false
					this.items = []
				})
				return
			}

			const data = await res.json()
			const list = Array.isArray(data)
				? data
				: Array.isArray(data?.data)
					? data.data
					: []

			runInAction(() => {
				this.loading = false
				this.items = list
			})
		} catch (error) {
			runInAction(() => {
				this.loading = false
				this.items = []
			})
			console.error(error)
		}
	}
}

export const searchAnimes = new SearchAnimes()
