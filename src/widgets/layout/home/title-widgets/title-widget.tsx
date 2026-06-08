export const MainPageWidget = () => {
	return (
		<div className="mb-25">
			<div className="mt-20 flex justify-start px-4 md:px-8">
				<h1 className="font-bold text-4xl md:text-6xl mb-3 text-start text-white">
					Судьба: Ночь схватки
				</h1>
			</div>
			<div className="flex justify-start items-center gap-3 md:gap-4 flex-wrap mt-1 px-4 md:px-8">
				<p
					className="text-xl"
					style={{ color: 'limegreen', fontWeight: 'bold' }}
				>
					8.2
				</p>
				<p className="text-neutral-400 text-xl">Судьба: Ночь схватки</p>
				<p className="text-neutral-400 text-xl">Fate/Zero</p>
				<p className="text-neutral-400 text-xl">Fate/stay night</p>
			</div>
			<div className="flex justify-start mt-3 px-4 md:px-8">
				<button className="cursor-pointer flex items-center px-7 bg-white rounded-xl text-black p-1.5 justify-center font-bold">
					<p className="font-bold text-lg">Доступно</p>
				</button>
			</div>
		</div>
	)
}
