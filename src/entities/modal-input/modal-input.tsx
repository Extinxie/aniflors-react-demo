import { useDisclosure } from '@mantine/hooks'
import { Modal } from '@mantine/core'
import { observer } from 'mobx-react-lite'
import { SearchIcon } from 'lucide-react'
import { SearchPanel } from '../../features/search/search-panel'
import { searchAnimes } from '../../shared/store/search-store/search-api-store'

export const Demo = observer(() => {
	const [opened, { open, close }] = useDisclosure(false)

	const handleClose = () => {
		searchAnimes.reset()
		close()
	}

	return (
		<>
			<Modal
				size="55rem"
				opened={opened}
				onClose={handleClose}
				title="Поиск"
				styles={{
					root: {
						backgroundColor: 'rgba(0, 0, 0, 0.5)'
					},
					overlay: {
						backgroundColor: 'rgba(0, 0, 0, 0.5)'
					},
					content: {
						backgroundColor: '#111',
						width: '55rem',
						maxWidth: '55rem'
					},
					header: {
						backgroundColor: '#111',
						borderBottom: '1px solid #333'
					},
					title: {
						color: 'white',
						backgroundColor: '#111'
					},
					body: {
						backgroundColor: '#111',
						color: 'white'
					}
				}}
			>
				<SearchPanel onNavigate={handleClose} />
			</Modal>

			<div
				onClick={open}
				className="flex items-center gap-1 md:gap-3 lg:gap-4 shrink-0"
			>
				<div className="hidden md:block">
					<button
						className="bg-neutral-800 opacity-100 rounded-2xl
			text-white font-bold px-2 pl-6 p-2
			focus:outline-none flex gap-3 items-center
			w-auto md:w-12 lg:w-36
			justify-center md:justify-start"
					>
						<SearchIcon size={20} />
						<p className="font-bold hidden md:block">Поиск</p>
					</button>
				</div>
			</div>
		</>
	)
})
