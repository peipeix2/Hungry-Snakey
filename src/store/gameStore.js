import { create } from 'zustand'

const useGameStore = create((set) => ({
  score: 0,
  addScore: () => set((state) => ({ score: state.score + 1 })),
  resetScore: () => set({ score: 0 }),
}))

export default useGameStore
