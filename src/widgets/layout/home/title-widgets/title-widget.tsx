export const MainPageWidget = () => {
  return (
    <>
      <div className="mt-10 flex justify-center px-4">
        <h1 className="font-bold text-3xl md:text-5xl md:ml-10 text-center text-white">
          Поднятие уровня в одиночку
        </h1>
      </div>
      <div className="flex justify-center gap-2 md:gap-4 flex-wrap mt-3">
        <p style={{ color: "limegreen", fontWeight: "bold" }}>8.61 </p>
        <p className="text-neutral-400">Solo Leveling</p>
        <p className="text-neutral-400">Соло левелинг</p>
        <p className="text-neutral-400">Ore dake Level Up na Ken</p>
      </div>
      <div className="flex justify-center mt-3">
        <button className="cursor-pointer flex items-center px-5 bg-white rounded-xl text-black p-1 justify-center font-bold mb-10">
          Доступно
        </button>
      </div>
    </>
  );
};
