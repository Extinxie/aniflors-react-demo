import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import { searchAnimes } from "../../../shared/store/search-store/search-api-store";

export const InputForm = observer(() => {
  const { query, foundedSearcherAnimes } = searchAnimes;
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [debounceTimer, setDebounceTimer] = useState<number | null>(null);

  useEffect(() => {
    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  }, [debounceTimer]);

  const handleSearch = (value: string) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const timer = setTimeout(() => {
      foundedSearcherAnimes(value);
    }, 300);

    setDebounceTimer(timer);
  };

  return (
    <div className="flex items-center w-full">
      <input
        ref={searchInputRef}
        className="bg-neutral-800 opacity-70 rounded-2xl text-white font-semibold px-4 py-2 w-full focus:outline-none"
        type="text"
        placeholder="Начать поиск"
        value={query}
        onChange={(e) => {
          const value = e.target.value;
          searchAnimes.query = value;
          handleSearch(value);
        }}
      />
    </div>
  );
});
