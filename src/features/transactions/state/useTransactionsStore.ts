import { create } from 'zustand'
import type { Transaction } from '../../dashboard/models/transactions.types'

interface TransactionsState {
  transactions: Transaction[]
  setTransactions: (txs: Transaction[]) => void
  addTransaction: (tx: Transaction) => void
}

export const useTransactionsStore = create<TransactionsState>((set) => ({
  transactions: [],
  setTransactions: (txs) => set({ transactions: txs }),
  addTransaction: (tx) => set((state) => ({ transactions: [tx, ...state.transactions] }))
}))
