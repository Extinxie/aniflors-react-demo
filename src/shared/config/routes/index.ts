export class PageConfig {
  static HOME = "/";
  static ANIMES = "/animes";
  static INFO = "/info";

  static PLAYLIST(id: string) {
    return `/playlist-animes/${id}`;
  }
}
