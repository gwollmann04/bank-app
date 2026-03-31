import { DashboardContent } from '@/features/dashboard/components/DashboardContent'
import { TransferModal } from '@/features/transactions/components/TransferModal'
import { useDashboardData } from '@/features/dashboard/state/useDashboardData'
import { Loader2 } from 'lucide-react'
import { useBalanceStore } from '@/features/dashboard/state/useBalanceStore'

const Dashboard = () => {
  const { balanceQuery, transactionsQuery, transfer } = useDashboardData()
  const balance = useBalanceStore((state) => state.balance)

  if (balanceQuery.isLoading || transactionsQuery.isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-gray-500" />
      </div>
    )
  }

  return (
    <>
      <TransferModal onTransfer={transfer} balance={balance} />

      <DashboardContent />
    </>
  )
}

export default Dashboard
