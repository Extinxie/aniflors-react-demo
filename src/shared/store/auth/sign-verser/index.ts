import { makeAutoObservable, runInAction } from 'mobx'
import { API_URI } from '../../../api/api.const'
// import { API_URI } from '../../api/api.const'

export type IUser = {
	id: string
	username: string
	email: string
	avatar: string | null
	aboutUser: string | null
}

class SignVersers {
	user: IUser | null = null
	isAuth: boolean = false

	constructor() {
		makeAutoObservable(this)
		this.checkAuthProfile()
	}

	fetchSignUp = async (userData: {
		username: string
		email: string
		password: string
	}) => {
		try {
			const res = await fetch(`${API_URI}/auth/sign-up`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(userData)
			})

			const data = await res.json()

			if (!res.ok) {
				throw new Error(data.error || 'Registration failed')
			}

			runInAction(() => {
				if (data.data) {
					this.user = data.data
				}
			})

			return { success: true, data }
		} catch (e: any) {
			runInAction(() => {})
			console.error(e)
			return { success: false, error: e.message }
		}
	}

	signIn = async (credentials: { email: string; password: string }) => {
		try {
			const res = await fetch(`${API_URI}/auth/sign-in`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(credentials),
				credentials: 'include'
			})

			const data = await res.json()

			if (!res.ok) {
				throw new Error(data.error || 'Login failed')
			}

			if (data.success) {
				runInAction(() => {
					if (data.data?.user) {
						this.user = data.data.user
					}
				})
				return { success: true, data: data.data }
			} else {
				throw new Error(data.error || 'Login failed')
			}
		} catch (e) {
			console.error(e)
		}
	}

	checkAuthProfile = async () => {
		try {
			const res = await fetch(`${API_URI}/auth/profile`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include'
			})
			const text = await res.text()
			if (!res.ok || !text.trim()) {
				runInAction(() => {
					this.user = null
					this.isAuth = false
				})
				return false
			}
			const data = JSON.parse(text)
			if (data.success) {
				runInAction(() => {
					this.user = data.data
					this.isAuth = true
				})
				return true
			}
			runInAction(() => {
				this.user = null
				this.isAuth = false
			})
		} catch (e) {
			runInAction(() => {
				this.user = null
				this.isAuth = false
			})
			console.error(e)
		}
		return false
	}

	signOut = async () => {
		try {
			const res = await fetch(`${API_URI}/auth/sign-out`, {
				method: 'POST',
				// headers: {
				// 	'Content-Type': 'application/json'
				// },
				credentials: 'include'
			})
			runInAction(() => {
				this.user = null
				this.isAuth = false
			})
			return { success: true, res }
		} catch (e) {
			console.error(e)
		}
	}
}

export const signVersers = new SignVersers()
