import { makeAutoObservable, runInAction } from 'mobx'
import type { IUser } from '../sign-verser'
import { API_URI } from '../../../api/api.const'

class UserTop {
	usersAll: IUser | null = null

	constructor() {
		makeAutoObservable(this)
	}

	async getTopUsers() {
		try {
			const res = await fetch(`${API_URI}/users/users-top​`)
			const data = await res.json()
			runInAction(() => {
				this.usersAll = data
			})
		} catch (e) {
			console.error(e)
		}
	}
}

export const userTop = new UserTop()
