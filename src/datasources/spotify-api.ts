import { RESTDataSource } from "@apollo/datasource-rest";

type Playlist = {
  id: string;
  name: string;
  description: string;
};

export class SpotifyAPI extends RESTDataSource {
  baseURL = "https://spotify-demo-api-fe224840a08c.herokuapp.com/v1/";

  async getFeaturedPlaylists(): Promise<Playlist[]> {
    const response = await this.get<{ playlists: { items: any[] } }>(
      "browse/featured-playlists"
    );
    return response?.playlists?.items ?? [];
  }
}
