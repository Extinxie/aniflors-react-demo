import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import loginimage from '../../pages/imags/anime.jpg'
import { signVersers } from '../../shared/store/auth/sign-verser'

export const LoginPage = observer(() => {
	const { signIn } = signVersers
	const navigate = useNavigate()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const res = await signIn({ email, password })
			if (res?.success) {
				navigate('/')
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div
			className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
			style={{
				backgroundImage: `url(${loginimage})`
			}}
		>
			<div className="absolute inset-0 bg-linear-to-r from-purple-900/20 to-pink-900/30 backdrop-blur-[2px]"></div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start max-w-6xl mx-auto px-4">
				<div className="relative z-10 w-full max-w-md px-6">
					<div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
						<div className="text-center mb-8 flex items-center justify-center gap-2 cursor-pointer">
							<Link
								to={'/'}
								className="text-white transition-all duration-300 hover:scale-110 inline-block hover:text-pink-100 hover:not-2xl:"
							>
								/ Главная
							</Link>
							<h2 className="text-3xl font-bold text-white mb-0 transition-all duration-300 hover:scale-110">
								/ Вход
							</h2>
						</div>

						<form onSubmit={handleLogin} className="space-y-6">
							<div>
								<input
									type="email"
									placeholder="Логин"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition"
								/>
							</div>

							<div>
								<input
									type="password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
									placeholder="Пароль"
									className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition"
								/>
							</div>

							<div className="space-y-4">
								<button
									type="submit"
									className="w-full bg-linear-to-r cursor-pointer from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center transform hover:scale-[1.02] active:scale-[0.98]"
									// disabled={isLoading}
								>
									Войти
								</button>
							</div>
						</form>

						<div className="mt-6 text-center flex ">
							<p className="text-gray-100">
								У вас ещё нет аккаунта?
							</p>
							<Link
								to="/registration"
								className="text-pink-800 hover:text-pink-600 font-semibold duration-150"
							>
								Зарегистрироваться
							</Link>
						</div>
					</div>
				</div>
				<div className="relative z-10 w-full max-w-md px-6">
					<h1 className="text-2xl font-bold">Войти с помощью</h1>
					<div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
						<div className="flex items-center gap-4">
							<button
								type="button"
								className="flex-1 bg-linear-to-r cursor-pointer from-blue-500/80 via-blue-400/70 to-blue-600/30 hover:from-blue-600/40 hover:via-blue-500/40 hover:to-blue-700/40 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
							>
								Vk
							</button>
							<button
								type="button"
								className="flex-1 bg-linear-to-r cursor-pointer from-red-500/30 to-pink-500/30 hover:from-red-500/40 hover:to-pink-500/40 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
							>
								Google
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-4 text-center text-white/60 text-sm cursor-pointer">
				<span className="text-white/60 mr-2">
					Политика конфиденциальности и условия
				</span>
				<span className="text-pink-400 hover:text-pink-500 font-semibold duration-150">
					Anixie openAPI
				</span>
			</div>
		</div>
	)
})
