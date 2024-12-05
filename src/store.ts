import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering?: string;
  search?: string;
}
interface GameStore {
  gameQuery: GameQuery;
  setGenre: (genreId: number) => void;
  setPlatform: (platformId?: number) => void;
  setOrdering: (order: string) => void;
  setSearch: (search: string) => void;
}
const useGameStore = create<GameStore>((set) => ({
  gameQuery: {
    genreId: undefined,
    platformId: undefined,
    ordering: "",
    search: "",
  },
  setGenre: (genreId) =>
    set((s) => ({ gameQuery: { ...s.gameQuery, genreId } })),
  setPlatform: (platformId?) =>
    set((s) => ({ gameQuery: { ...s.gameQuery, platformId } })),
  setOrdering: (ordering) =>
    set((s) => ({ gameQuery: { ...s.gameQuery, ordering } })),
  setSearch: (search) => set(() => ({ gameQuery: { search } })),
}));
export default useGameStore;
