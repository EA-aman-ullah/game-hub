import { useQuery } from "@tanstack/react-query";
import platforms from "../Data/platforms";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platfrom>("/platforms/lists/parents");
interface Platfrom {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platfroms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatform;
