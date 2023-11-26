import {create} from "zustand";

interface PageStore {
  page: number;
  setPage: (newPage: number) => void;
}

const usePageStore = create<PageStore>((set) => ({
  page: 0,
  setPage: (newPage) => set({ page: newPage }),
}));

export default usePageStore;
