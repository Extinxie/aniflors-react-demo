export const Background = () => {
	return (
		<div className="w-full h-screen z-[-1] fixed top-0 left-0">
			<img
				className="w-full h-full object-cover blur-xs scale-105 brightness-40"
				src="juster.jpg"
				alt="juster"
			/>

			<div className="absolute inset-0 bg-black/10"></div>

			<div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/20"></div>

			<div className="absolute inset-0 bg-linear-to-b from-transparent from-50% via-black/50 via-70% to-black"></div>
		</div>
	)
}
