import { Link } from "react-router-dom";
import Header from "../../widgets/layout/header/ui/header";
import { Background } from "../../widgets/layout/home/background/background";
import { ItarationLatestCards } from "../../widgets/layout/home/itaration-cards/itaration-latest-cards";
import { MainPageWidget } from "../../widgets/layout/home/title-widgets/title-widget";
import { ArrowRight } from "../../shared/data/svg/arrow-home/arrow-home";

const Homepage = () => {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <Background />
      <MainPageWidget />
      <Link className="flex ml-2 mt-5 text-xl opacity-80" to={"/animes"}>
        <div className="flex justify-center items-center">
          <p className="font-bold text-neutral-300">Популярные подборки</p>
          <ArrowRight />
        </div>
      </Link>
      <ItarationLatestCards />
    </div>
  );
};

export default Homepage;
