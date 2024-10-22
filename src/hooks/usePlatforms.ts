import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import platforms from "../Data/platforms";
import { FetchResponse } from "../services/api-client";

interface Platfrom {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platfroms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platfrom>>("/platforms/lists/parents")
        .then((res) => res.data),

    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatform;
