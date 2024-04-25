import { create } from "zustand";

export const useMessages = create((set) => ({
  messages: [],
  setMessages: (messages) => set({ messages }),
}));
