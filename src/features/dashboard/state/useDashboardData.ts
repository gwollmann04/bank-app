import { useQuery } from '@tanstack/react-query'
import { getBalance } from '../services/balanceService'
import { getTransactions } from '../services/transactionsService'
import { useBalanceStore } from './useBalanceStore'
import { useTransactionsStore } from '../../transactions/state/useTransactionsStore'
import type { Transaction } from '../models/transactions.types'
import { getBalanceKey, getTransactionsKey } from '../services/queryKeys'

export const useDashboardData = () => {
  const setBalance = useBalanceStore((state) => state.setBalance)
  const setTransactions = useTransactionsStore((state) => state.setTransactions)
  const addTransaction = useTransactionsStore((state) => state.addTransaction)
  const subtractBalance = useBalanceStore((state) => state.subtractAmount)

  const balanceQuery = useQuery({
    queryKey: getBalanceKey,
    queryFn: async () => {
      const data = await getBalance()
      setBalance(data.balance)
      return data.balance
    }
  })

  const transactionsQuery = useQuery({
    queryKey: getTransactionsKey,
    queryFn: async () => {
      const txs = await getTransactions()
      setTransactions(txs)
      return txs
    }
  })

  const transfer = (tx: { amount: number; description: string }) => {
    if (tx.amount <= 0 || !tx.description) return
    const newTx: Transaction = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      type: 'debit',
      amount: tx.amount,
      description: tx.description
    }
    addTransaction(newTx)
    subtractBalance(tx.amount)
  }

  return { balanceQuery, transactionsQuery, transfer }
}
