import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { generalAnimes } from "../../shared/store/general-store/general-store";

export const TitleParams = observer(() => {
  const { code } = useParams();
  const { aplication, loading } = generalAnimes;

  useEffect(() => {
    if (code) {
      generalAnimes.getGeneralAnimes(code);
    }
  }, [code]);

  if (loading) {
    return <div>Загрузка...</div>;
  }
  console.log(aplication);

  return (
    <div>
      {aplication &&
        aplication.length > 0 &&
        aplication.map((item) => (
          <div key={item.id}>
            <div>
              <p>{item.russianTitle}</p>
              <p>{item.shikimoriRating}</p>
              <p>{item.status}</p>
              <p>{item.year}</p>
              <p>{item.episodesCount}</p>
              <img src={item.poster} alt={item.poster} />
            </div>
          </div>
        ))}
    </div>
  );
});
