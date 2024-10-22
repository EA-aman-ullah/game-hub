import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";

import apiClient, { FetchResponse } from "../services/api-client";

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

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOder,
//         search: gameQuery.searchText,
//       },
//     },
//     [gameQuery]
//   );

export default useGames;
