import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () =>
  // 第一个类型参数是指 返回数据 的类型
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenre;
