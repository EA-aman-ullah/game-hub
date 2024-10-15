import { GameQuery } from "../App";
import useData from "./useData";

export interface Platfrom {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platfrom }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuey: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuey.genre?.id,
        platforms: gameQuey.platform?.id,
        ordering: gameQuey.sortOder,
        search: gameQuey.searchText,
      },
    },
    [gameQuey]
  );

export default useGames;
