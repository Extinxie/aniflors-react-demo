import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Modal } from '../../../../shared/ui/modal/modal'
import { ExploreIcon } from '../../../../shared/data/svg/explore/explore'
import { BellSvg } from '../../../../shared/data/svg/bell/bell'
import { LikeSvg } from '../../../../shared/data/svg/likes/likes'
import { Menu } from '@mantine/core'
import { Demo } from '../../../../entities/modal-input/modal-input'
import { SearchPanel } from '../../../../features/search/search-panel'
import { observer } from 'mobx-react-lite'
import { signVersers } from '../../../../shared/store/auth/sign-verser'
import { searchAnimes } from '../../../../shared/store/search-store/search-api-store'
import rimsolo from '../ui/rim/rimsolo.jpg'

const Header = observer(() => {
	const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
	const { user, isAuth, signOut } = signVersers

	const closeSearchModal = () => {
		searchAnimes.reset()
		setIsSearchModalOpen(false)
	}

	return (
		<>
			<header className="w-full flex items-center justify-between gap-2 md:gap-4 px-2 md:px-4 lg:px-8 py-4 z-10 relative max-w-full overflow-hidden">
				<div className="flex items-center gap-2 md:gap-4 lg:gap-6 min-w-0">
					<Link to={'/'} className="text-4xl font-bold text-white">
						Lacrimosa
					</Link>
				</div>

				<div className="flex items-center gap-1 md:gap-3 lg:gap-4 shrink-0">
					<Demo />

					<button
						onClick={() => setIsSearchModalOpen(true)}
						className="bg-neutral-700 w-9 h-9 flex justify-center cursor-pointer items-center rounded-full md:hidden text-white hover:opacity-80 transition-opacity"
						aria-label="Поиск"
					>
						<ExploreIcon />
					</button>

					<div className="w-9 h-9 rounded-full bg-neutral-700 cursor-pointer flex items-center justify-center">
						<LikeSvg />
					</div>
					<div className="hidden md:block">
						<div className="w-9 h-9 rounded-full bg-neutral-700 cursor-pointer flex items-center justify-center">
							<BellSvg />
						</div>
					</div>

					{isAuth && user ? (
						<Menu
							width={200}
							position="bottom-start"
							classNames={{
								dropdown: 'custom-menu-dropdown',
								item: 'custom-menu-item'
							}}
						>
							<Menu.Target>
								<div className="w-12 h-12 md:w-12 md:h-12 rounded-full border-2 border-green-500 cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center">
									{user?.username}
									<img
										src={user?.avatar || undefined}
										alt=""
									/>
								</div>
							</Menu.Target>
							<Menu.Dropdown style={{ opacity: '80%' }}>
								<Menu.Item component={Link} to={'/profile'}>
									Профиль
								</Menu.Item>
								<Menu.Item>Премиум</Menu.Item>
								<Menu.Item>Коллекции</Menu.Item>
								<Menu.Item>Каталог</Menu.Item>
								<Menu.Item onClick={signOut}>
									Выйти из аккаунта
								</Menu.Item>
							</Menu.Dropdown>
						</Menu>
					) : (
						<Link to={'/registration'}>
							<div className="w-12 h-12 md:w-12 md:h-12 rounded-full border-2  cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center">
								<img
									src={rimsolo}
									className="rounded-full w-11 h-11"
									alt=""
								/>
							</div>
						</Link>
					)}
				</div>
			</header>

			<Modal
				isOpen={isSearchModalOpen}
				onClose={closeSearchModal}
				contentClassName="max-w-3xl"
			>
				<div className="w-full">
					<h2 className="text-white text-xl font-semibold mb-4">
						Поиск
					</h2>
					<SearchPanel onNavigate={closeSearchModal} />
				</div>
			</Modal>
		</>
	)
})

export default Header

{
	/* <img
										// src="kura.jpg"
										className="rounded-full w-11 h-11"
										alt=""
									/> */
}

{
	/* <Menu
						width={200}
						position="bottom-start"
						classNames={{
							dropdown: 'custom-menu-dropdown',
							item: 'custom-menu-item'
						}}
					>
						<Menu.Target>
							<Link to={'/registration'}>
								<div className="w-12 h-12 md:w-12 md:h-12 rounded-full border-2 border-fuchsia-500 cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center">
									<img
										src="kura.jpg"
										className="rounded-full w-11 h-11"
										alt=""
									/>
								</div>
							</Link>
						</Menu.Target>
						<Menu.Dropdown style={{ opacity: '80%' }}>
							<Menu.Item>Профиль</Menu.Item>
							<Menu.Item>Премиум</Menu.Item>
							<Menu.Item>Коллекции</Menu.Item>
							<Menu.Item>Каталог</Menu.Item>
						</Menu.Dropdown>
					</Menu> */
}
