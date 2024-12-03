import useGenre from "./useGenre";

const useSelectedGenre = (id?: number) => {
  const { data: genres } = useGenre(); //!!!!! 这个必须放到组件内部
  return genres?.results.find((genre) => genre.id === id);
};
export default useSelectedGenre;
