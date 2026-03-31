/* eslint-disable react-refresh/only-export-components */
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/classnames'

const inputVariants = cva(
  'rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500',
  {
    variants: {
      hasError: {
        true: 'border-red-500 focus:ring-red-500',
        false: ''
      }
    },
    defaultVariants: {
      hasError: false
    }
  }
)

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(inputVariants({ hasError }), className)}
        {...props}
      />
    )
  }
)

export { Input, inputVariants }
