import { observer } from 'mobx-react-lite'
import { Link, useNavigate } from 'react-router-dom'
import wife from '../../pages/imags/wife.jpg'
import { signVersers } from '../../shared/store/auth/sign-verser'
import { useState } from 'react'

export const RegistationPage = observer(() => {
	const { fetchSignUp } = signVersers
	const navigate = useNavigate()
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const dataAuthFetch = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const result = await fetchSignUp({
				username,
				email,
				password
			})
			if (result.success) {
				navigate('/login')
			}
		} catch (e) {
			console.error(e)
		}
	}

	// useEffect(() => {
	// 	dataAuthFetch
	// }, [])

	return (
		<div
			className="text-white min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
			style={{
				backgroundImage: `url(${wife})`
			}}
		>
			<div className="absolute inset-0 bg-linear-to-r from-purple-900/20 to-pink-900/30 backdrop-blur-[1px] bg-black/5"></div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start max-w-6xl mx-auto px-4">
				<div className="relative z-10 w-full max-w-md px-6">
					<div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 shadow-2xl border border-white/20">
						<div className="text-center mb-8 flex items-center justify-center gap-2 cursor-pointer">
							<Link
								to={'/'}
								className="text-white transition-all duration-300 hover:scale-105 inline-block hover:text-pink-100 hover:not-2xl:"
							>
								/ Главная
							</Link>
							<h2 className="text-3xl font-bold text-white mb-0 transition-all hover:text-pink-100 duration-300 hover:scale-110">
								/ Регистрация
							</h2>
						</div>

						<form onSubmit={dataAuthFetch} className="space-y-6">
							<div>
								<input
									type="text"
									value={username}
									onChange={(e) =>
										setUsername(e.target.value)
									}
									placeholder="Никнейм"
									className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition"
								/>
							</div>
							<div>
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Логин"
									className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition"
								/>
							</div>

							<div>
								<input
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
									type="password"
									placeholder="Пароль"
									className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition"
								/>
							</div>

							<div className="space-y-4">
								<button className="w-full cursor-pointer bg-linear-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center transform hover:scale-[1.02] active:scale-[0.98]">
									Зарегистрироваться
								</button>
							</div>
						</form>

						<div className="w-full flex justify-center mt-2">
							<p className="text-gray-800 ">
								У вас уже есть аккаунт?
								<Link
									to="/login"
									className="text-pink-600 hover:text-pink-600 font-semibold duration-150 ml-1"
								>
									Войти
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div className="relative z-10 w-full max-w-md px-6">
					<h1 className="text-2xl font-bold">Войти с помощью</h1>
					<div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
						<div className="flex items-center gap-4">
							<button
								type="button"
								className="flex-1 bg-linear-to-r cursor-pointer from-blue-500 via-blue-400/90 to-blue-600/30 hover:from-blue-600/40 hover:via-blue-500/40 hover:to-blue-700/40 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
							>
								Vk
							</button>
							<button
								type="button"
								className="flex-1 bg-linear-to-r cursor-pointer from-neutral-600 to-neutral-500/80 hover:from-neutral-500/40 hover:to-neutral-500/40 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
							>
								Google
							</button>
							<button
								type="button"
								className="flex-1 bg-linear-to-r cursor-pointer from-indigo-600 to-indigo-500/80 hover:from-indigo-500/40 hover:to-indigo-500/40 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
							>
								Discord
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-3 text-center text-white/60 text-md font-bold cursor-pointer">
				<span className="text-white mr-2">
					Политика конфиденциальности и условия
				</span>
				<span className="text-pink-400 hover:text-pink-500 font-semibold text-xl duration-150">
					Anixie openAPI
				</span>
			</div>
		</div>
	)
})
