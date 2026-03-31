import { formatDate } from '@/utils/formatters/date'
import type { Transaction } from '../models/transactions.types'
import { amountClass } from '../styles/transactions'

interface TransactionsListProps {
  transactions: Transaction[]
}

export const TransactionsList = ({ transactions }: TransactionsListProps) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <h2 className="mb-2 text-lg font-medium">Transações recentes</h2>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.id} className="flex justify-between border-b py-2 last:border-b-0">
            <div className="flex flex-col">
              <span>{tx.description}</span>
              <span className="text-sm text-gray-400">{formatDate(tx.date)}</span>
            </div>
            <span className={amountClass({ type: tx.type })}>
              {tx.type === 'credit' ? '+' : '-'}${tx.amount.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
