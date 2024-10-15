import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

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
}

const useGames = (gameQuey: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuey.genre?.id,
        platforms: gameQuey.platform?.id,
      },
    },
    [gameQuey]
  );

export default useGames;
