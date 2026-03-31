import type { Transaction } from '../models/transactions.types'

export const getTransactions = async (): Promise<Transaction[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1500))
  return [
    { id: '1', type: 'credit', amount: 1200, description: 'Salário', date: '2026-03-31' },
    { id: '2', type: 'debit', amount: 150, description: 'Supermercado', date: '2026-03-30' },
    { id: '3', type: 'debit', amount: 50, description: 'Transporte', date: '2026-03-29' }
  ]
}
