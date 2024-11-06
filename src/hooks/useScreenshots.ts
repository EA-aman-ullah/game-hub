import { useQuery } from "@tanstack/react-query";
import { Screenshorts } from "../entities/Screenshots";
import APIClient from "../services/api-client";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshorts>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshorts", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
