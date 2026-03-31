import { create } from 'zustand'

interface BalanceState {
  balance: number
  setBalance: (value: number) => void
  addAmount: (amount: number) => void
  subtractAmount: (amount: number) => void
}

export const useBalanceStore = create<BalanceState>((set) => ({
  balance: 0,
  setBalance: (value) => set({ balance: value }),
  addAmount: (amount) => set((state) => ({ balance: state.balance + amount })),
  subtractAmount: (amount) => set((state) => ({ balance: state.balance - amount }))
}))
