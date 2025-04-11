import { z } from "@/lib/zod";

export const InstrumentSchema = z.object({
  issuer: z.string().min(1),
  currency: z.string().min(1),
  issueDate: z.string().min(1),
  maturityDate: z.string().min(1),
  lastOperationDate: z.string().min(1),
  daysToMaturity: z.number(),
  paymentFrequency: z.number(),
  couponRate: z.number(),
  ticker: z.string().min(1),
});

export const InstrumentHistorySchema = z.object({
  ticker: z.string().min(1),
  history: z
    .object({
      date: z.string().min(1),
      price: z.number(),
    })
    .array(),
});

///////////
// Types //
///////////

export type Instrument = z.infer<typeof InstrumentSchema>;
export type InstrumentHistory = z.infer<typeof InstrumentHistorySchema>;
