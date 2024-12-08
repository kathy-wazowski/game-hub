// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatform = () =>
  // 这一整个是要返回的，不要用 => {}
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.get,
    staleTime: ms("1d"), //24h
    initialData: { count: platforms.length, results: platforms },
  });
export default usePlatform;
