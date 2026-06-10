export class PageConfig {
  static HOME = "/";
  static ANIMES = "/animes";
  static INFO = "/info";

  static ANIME(id: string) {
    return `/anime/${id}`;
  }

  static PLAYLIST(id: string) {
    return `/playlist-animes/${id}`;
  }
}
