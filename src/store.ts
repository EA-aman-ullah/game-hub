import { create } from "zustand";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOder?: string;
    searchText?: string;
  }

  interface GameQueryStore {
    gameQuery: GameQuery
    setSearchText: (searchText: string)=> void
    setGenreId: (genreId: number)=>void
    setPlatformId: (platformId: number)=> void
    setSortOrder: (sortOrder: string)=> void
  }

 const useGameQueryStore = create<GameQueryStore>(set=>({
    gameQuery: {},
    setSearchText: (searchText) => set(()=> ({ gameQuery: {searchText: searchText}})),
    setGenreId: (genreId) => set((store)=> ({ gameQuery: {...store.gameQuery, genreId: genreId} })),
    setPlatformId: (platformId)=> set((store)=> ({gameQuery: {...store.gameQuery, platformId: platformId}})),
    setSortOrder: (sortOrder)=> set((store)=> ({gameQuery:{...store.gameQuery, sortOder: sortOrder} }))
  }))

  export default useGameQueryStore