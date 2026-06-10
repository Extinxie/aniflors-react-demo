import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { userTop } from '../../../../shared/store/auth/top-users/top-users-homepage'

export const TopListUserComponent = observer(() => {
	const { usersAll, getTopUsers } = userTop

	useEffect(() => {
		getTopUsers()
	}, [])

	console.log('usersAll:', usersAll)

	return (
		<div>
			{usersAll?.map((item) => (
				<div key={item.id}>{item.username}</div>
			))}
		</div>
	)
})
