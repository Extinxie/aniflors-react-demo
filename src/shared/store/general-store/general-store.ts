import { makeAutoObservable, runInAction } from "mobx";
import { API_URI } from "../../api/api.const";
import type { IAnimeFull } from "../../types/animes.type";

class GeneralAnimes {
  aplication: IAnimeFull[] = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getGeneralAnimes = async (slug: string) => {
    try {
      this.loading = true;
      const res = await fetch(`${API_URI}/animes/title/${slug}`);

      const data = await res.json();
      runInAction(() => {
        this.loading = false;
        this.aplication = Array.isArray(data) ? data : [data];
      });
    } catch (e) {
      runInAction(() => {
        this.loading = false;
      });
      console.error(e);
    }
  };
}
export const generalAnimes = new GeneralAnimes();
