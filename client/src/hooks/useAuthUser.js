import { create } from "zustand";

export const useAuthUser = create((set) => ({
  authUser: localStorage?.getItem("chat-user") || null,
  setAuthUser: (authUser) => set({ authUser }),
}));
