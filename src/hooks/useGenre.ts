import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenre = () =>
  // 第一个类型参数是指 返回数据 的类型
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenre;
