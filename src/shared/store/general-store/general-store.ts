import { makeAutoObservable, runInAction } from 'mobx'
import { API_URI } from '../../api/api.const'
import type { IAnimeFull } from '../../types/animes.type'

class GeneralAnimes {
	aplication: IAnimeFull[] = []
	loading = false

	constructor() {
		makeAutoObservable(this)
	}

	getGeneralAnimes = async (id: string) => {
		try {
			this.loading = true
			this.aplication = []

			const res = await fetch(`${API_URI}/post-animes/${id}`)
			if (!res.ok) {
				runInAction(() => {
					this.loading = false
				})
				return
			}

			const data = await res.json()
			const anime = data?.result ?? data
			const list = Array.isArray(anime) ? anime : anime ? [anime] : []

			runInAction(() => {
				this.loading = false
				this.aplication = list
			})
		} catch (e) {
			runInAction(() => {
				this.loading = false
			})
			console.error(e)
		}
	}
}
export const generalAnimes = new GeneralAnimes()
