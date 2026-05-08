import { observer } from 'mobx-react-lite'
import { userMe } from '../../shared/store/auth'
import { useEffect, useState } from 'react'

export const ProfilePage = observer(() => {
	const { me, fetchMe, updateMe } = userMe
	const [field, setField] = useState('')
	const [username, setUsername] = useState('')

	useEffect(() => {
		fetchMe()
	}, [])

	const fetchUpdateMe = async (e: React.FormEvent) => {
		e.preventDefault()

		const data = await updateMe({
			username: username,
			aboutUser: field
		})
		return data
	}

	return (
		<div className="bg-black">
			<div>{me?.username}</div>
			<div>
				<img src={me?.avatar || ''} alt="" />
			</div>
			<form onSubmit={fetchUpdateMe}>
				<div>
					<input
						onChange={(e) => setField(e.target.value)}
						value={field}
						type="text"
						placeholder="О себе"
					/>
					<input
						onChange={(e) => setUsername(e.target.value)}
						value={username}
						type="text"
						placeholder="Никнейм"
					/>
					<button onSubmit={fetchUpdateMe}>обновить</button>
				</div>
			</form>
			<h1>info</h1>
			<h1>{me?.username}</h1>
			<h1>{me?.aboutUser}</h1>
		</div>
	)
})
