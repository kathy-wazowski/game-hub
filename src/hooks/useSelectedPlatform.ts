import usePlatform from "./usePlatform";

const useSelectedPlatform = (id?: number) => {
  const { data: platforms } = usePlatform(); //这个要放function里面
  return platforms?.results.find((platform) => platform.id === id);
};
export default useSelectedPlatform;
