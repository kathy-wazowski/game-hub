import { useParams } from "react-router-dom";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useGameDetail = () => {
  const { slug } = useParams();
  const apiClient = new APIClient<Game>(`/games/${slug}`);
  return useQuery<Game, Error>({
    queryKey: ["gameDetail", slug],
    queryFn: apiClient.getSingle,
    staleTime: ms("24h"), //24h
  });
};
export default useGameDetail;
