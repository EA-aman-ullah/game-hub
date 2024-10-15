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

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatfrom: Platfrom | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatfrom?.id,
      },
    },
    [selectedGenre?.id, selectedPlatfrom?.id]
  );

export default useGames;
