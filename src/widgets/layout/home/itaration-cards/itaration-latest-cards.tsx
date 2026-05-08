import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { animesLatest } from "../../../../shared/store/api-latest-store/api-latest-store";
import { AniCard } from "../../../../features/anime-card/anime-card";

export const ItarationLatestCards = observer(() => {
  const { FindLatestAnimes, latests, loading } = animesLatest;

  useEffect(() => {
    FindLatestAnimes();
  }, [FindLatestAnimes]);

  if (loading) {
    return (
      <div className="text-white">
        ну тут скелетон, я ни разу не работал с ним
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 overflow-x-auto overflow-y-hidden px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ml-1">
      {latests.map((item) => (
        <div
          key={item.id}
          className="shrink-0 w-[150px] md:w-[220px] lg:w-[230px]"
        >
          <AniCard item={item} />
        </div>
      ))}
    </div>
  );
});
