import * as z from 'zod'

export const transferBaseSchema = z.object({
  description: z.string().min(1, 'Descrição é obrigatória'),
  amount: z
    .number({ message: 'Valor deve ser um número' })
    .positive('Valor deve ser maior que zero')
})

export const transferSchema = (balance: number) =>
  transferBaseSchema.refine((data) => data.amount <= balance, {
    message: 'Saldo insuficiente',
    path: ['amount']
  })
