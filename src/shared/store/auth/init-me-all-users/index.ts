import { makeAutoObservable, runInAction } from 'mobx'
import { API_URI } from '../../../api/api.const'

export type IUser = {
	id: string
	username: string
	avatar?: string | null
	aboutUser?: string | null
	email: string
	isOnline?: boolean
}

class UsersMe {
	me: IUser | null = null

	constructor() {
		makeAutoObservable(this)
	}

	fetchMe = async () => {
		try {
			const responce = await fetch(`${API_URI}/auth/profile`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include'
			})
			const payload = await responce.json()
			if (!responce.ok || !payload?.success || !payload.data) {
				runInAction(() => {
					this.me = null
				})
				return
			}
			runInAction(() => {
				this.me = payload.data as IUser
			})
		} catch (e) {
			runInAction(() => {
				this.me = null
			})
			console.error(e)
		}
	}
	updateMe = async (updatedData: {
		username: string
		avatar?: string
		aboutUser?: string
	}) => {
		try {
			const responce = await fetch(`${API_URI}/auth/profile`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(updatedData),
				credentials: 'include'
			})
			const payload = await responce.json()
			if (!responce.ok) {
				throw new Error()
			}
			const next = payload.data as IUser
			runInAction(() => {
				this.me = next
			})
		} catch (e) {
			console.error(e)
		}
	}
}

export const userMe = new UsersMe()
