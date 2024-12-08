import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import useGameStore from "../store";
import { Game } from "../entities/Game";

const useGames = () => {
  const gameQuery = useGameStore((s) => s.gameQuery); //这里一定要放在第一个，不然报warning
  const apiClient = new APIClient<Game>("/games"); //这里忘了写<Game>，会导致报错
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery], //这样子在 gameQuery 改变的情况下可以refetch
    queryFn: ({ pageParam = 1 }) =>
      //这里的格式是config的格式
      apiClient.get({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.ordering,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    // ensures that it stops fetching once all pages are loaded.
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("1d"), // 24h
  });
};

export default useGames;
