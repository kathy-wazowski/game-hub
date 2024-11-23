// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatform = () =>
  // 这一整个是要返回的，不要用 => {}
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });
export default usePlatform;
