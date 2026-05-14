import { makeAutoObservable, runInAction } from "mobx";
import { API_URI } from "../../api/api.const";
import type { IAnimeLatest } from "../../types/animes.type";

class AnimeLatest {
  loading = false;
  latests: IAnimeLatest[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  FindLatestAnimes = async () => {
    try {
      this.loading = true;
      const res = await fetch(`${API_URI}/animes/latest`);
<<<<<<< HEAD
      if (!res.ok) {
        runInAction(() => {
          this.loading = false;
          this.latests = [];
        });
        return;
      }
=======
>>>>>>> 52c47dc75e9bc6181821a7d513db197472176551
      const data = await res.json();
      runInAction(() => {
        this.loading = false;
        this.latests = data;
      });
    } catch (e) {
      runInAction(() => {
        this.loading = false;
      });
      console.error(e);
    }
  };
}

export const animesLatest = new AnimeLatest();
