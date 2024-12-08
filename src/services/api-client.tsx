import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next?: string | null;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "250be0e953f142659da570e819c4a857",
  },
});

class APIClient<T> {
  endpoint: string; //这个属性为string
  constructor(endpoint: string) {
    //这个 arguments 的属性为 string
    this.endpoint = endpoint;
  }
  get = (config?: AxiosRequestConfig) => {
    return (
      axiosInstance
        // FetachResponse<T>是指返回的数据的类型
        .get<FetchResponse<T>>(this.endpoint, config) //可以hover上去.get，看到()内的参数和它的类型
        .then((res) => res.data)
    );
  };
  getSingle = (config?: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  };
}

export default APIClient;
