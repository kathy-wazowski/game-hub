import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const apiClient = new APIClient<Game>("/games"); //这里忘了写<Game>，会导致报错
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery], //这样子在 gameQuery 改变的情况下可以refetch
    queryFn: () =>
      //这里的格式是config的格式
      apiClient.get({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.ordering,
          search: gameQuery.search,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGames;
