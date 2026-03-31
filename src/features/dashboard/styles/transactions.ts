import { cva } from 'class-variance-authority'

export const amountClass = cva('font-medium', {
  variants: {
    type: {
      credit: 'text-green-500',
      debit: 'text-red-500'
    }
  },
  defaultVariants: {
    type: 'debit'
  }
})
