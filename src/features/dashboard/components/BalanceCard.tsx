interface BalanceCardProps {
  balance: number
}

export const BalanceCard = ({ balance }: BalanceCardProps) => (
  <div className="mb-6 rounded-lg bg-white p-4 shadow-md">
    <h2 className="text-lg font-medium">Saldo disponível</h2>
    <p className="text-3xl font-bold">${balance.toFixed(2)}</p>
  </div>
)
