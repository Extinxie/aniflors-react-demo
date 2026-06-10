import { useState } from "react";
import type { IAnimeLatest } from "../../shared/types/animes.type";
import { Link } from "react-router-dom";

type AniCardProps = {
  item: IAnimeLatest;
  onNavigate?: () => void;
};

export const AniCard = ({ item, onNavigate }: AniCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/anime/${item.slug}`} onClick={onNavigate}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer relative group overflow-hidden rounded-lg"
      >
        <img
          src={item.poster}
          alt={item.russianTitle}
          className={`rounded-lg w-full h-auto object-cover transition-all duration-300 ${
            isHovered ? "blur-md scale-95" : ""
          }`}
        />
        <div
          className={`absolute inset-0 bg-opacity-60 rounded-lg flex items-center justify-center text-white font-bold transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {isHovered && (
            <div className="text-center p-2 z-10">{item.russianTitle}</div>
          )}
        </div>
      </div>
    </Link>
  );
};
