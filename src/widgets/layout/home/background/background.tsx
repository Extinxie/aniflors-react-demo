export const Background = () => {
  return (
    <div className="w-full h-screen z-[-1] fixed top-0 left-0">
      <img
        className="w-full h-full object-cover blur-sm scale-110 brightness-40"
        src="OIP.webp"
        alt="sword art online"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/40"></div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent from-50% via-black/50 via-70% to-black"></div>
    </div>
  );
};
