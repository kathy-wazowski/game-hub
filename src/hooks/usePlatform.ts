// import useData from "./useData";
import data from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatform = () => ({ data, isLoading: false, error: null });
export default usePlatform;
