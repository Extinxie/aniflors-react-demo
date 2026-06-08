import { makeAutoObservable, runInAction } from 'mobx'
import { API_URI } from '../../api/api.const'
import type { IAnimeLatest } from '../../types/animes.type'

class SearchAnimes {
	items: IAnimeLatest[] = []
	query: string = ''

	constructor() {
		makeAutoObservable(this)
	}

	foundedSearcherAnimes = async (searchQuery: string = '') => {
		this.query = searchQuery
		try {
			const res = await fetch(
				`${API_URI}/animes/search?q=${encodeURIComponent(searchQuery)}`
			)
			const data = await res.json()
			runInAction(() => {
				this.items = data
			})
		} catch (error) {
			console.error('Search error:', error)
		}
	}
}

export const searchAnimes = new SearchAnimes()
