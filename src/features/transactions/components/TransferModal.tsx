import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { transferSchema } from '../models/transfer.schema'
import type { TransferFormData } from '../models/transer.types'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, FieldLabel, FieldError } from '@/components/ui/field'

interface TransferModalProps {
  onTransfer: (tx: TransferFormData) => void
  balance: number
}

export const TransferModal: FC<TransferModalProps> = ({ onTransfer, balance }) => {
  const schema = transferSchema(balance)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<TransferFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      description: '',
      amount: 0
    },
    mode: 'onChange'
  })

  const onSubmit = (data: TransferFormData) => {
    onTransfer(data)
    reset()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Nova Transferência</Button>
      </DialogTrigger>

      <DialogContent className="bg-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Nova Transferência</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Field>
            <FieldLabel>Descrição</FieldLabel>
            <Input
              {...register('description')}
              placeholder="Digite a descrição"
              hasError={!!errors.description}
            />
            <FieldError className="text-red-500">{errors.description?.message}</FieldError>
          </Field>

          <Field>
            <FieldLabel>Valor</FieldLabel>
            <Input
              type="number"
              {...register('amount', { valueAsNumber: true })}
              placeholder="Digite o valor"
              hasError={!!errors.amount}
            />
            <FieldError className="text-red-500">{errors.amount?.message}</FieldError>
          </Field>

          <div className="flex justify-end gap-2">
            <Button type="submit" variant="secondary" disabled={isSubmitting}>
              Transferir
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
