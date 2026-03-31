import { useBalanceStore } from '../state/useBalanceStore'
import { useTransactionsStore } from '../../transactions/state/useTransactionsStore'
import { BalanceCard } from './BalanceCard'
import { TransactionsList } from './TransactionsList'

export const DashboardContent = () => {
  const balance = useBalanceStore((state) => state.balance)
  const transactions = useTransactionsStore((state) => state.transactions)

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>
      <BalanceCard balance={balance} />
      <TransactionsList transactions={transactions} />
    </div>
  )
}
