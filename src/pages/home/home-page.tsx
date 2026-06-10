import { Link } from 'react-router-dom'
import Header from '../../widgets/layout/header/ui/header'
import { Background } from '../../widgets/layout/home/background/background'
import { ItarationLatestCards } from '../../widgets/layout/home/itaration-cards/itaration-latest-cards'
import { MainPageWidget } from '../../widgets/layout/home/title-widgets/title-widget'
import { ArrowRight } from '../../shared/data/svg/arrow-home/arrow-home'
import { ItarationLatestCards2 } from '../../widgets/layout/home/itaration-cards/all-animes-cards'
import { TopListUserComponent } from '../../widgets/layout'

const Homepage = () => {
	return (
		<div className="w-full max-w-full overflow-x-hidden">
			<Header />
			<Background />
			<MainPageWidget />
			<Link
				className="flex ml-2 mt-5 text-xl opacity-80"
				to={'/collections'}
			>
				<div className="flex justify-center items-center">
					<p className="font-bold text-neutral-300">
						Популярные подборки
					</p>
					<ArrowRight />
				</div>
			</Link>
			<TopListUserComponent />
			<ItarationLatestCards />
			<ItarationLatestCards2 />
		</div>
	)
}

export default Homepage
