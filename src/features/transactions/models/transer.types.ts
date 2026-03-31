import * as z from 'zod'
import { transferBaseSchema } from './transfer.schema'

export type TransferFormData = z.infer<typeof transferBaseSchema>
