export const getBalance = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return { balance: 5230.45 }
}
