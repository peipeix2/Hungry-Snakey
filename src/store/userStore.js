import { create } from 'zustand'

const useUserStore = create((set) => ({
  userName: null,
  setUserName: (val) => set({ userName: val }),
}))

export default useUserStore
