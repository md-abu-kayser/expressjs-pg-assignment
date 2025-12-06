import { z } from "zod";

export const updateUserSchema = z.object({
  body: z.object({
    name: z.string().min(1).optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    role: z.enum(["admin", "customer"]).optional(),
  }),
  params: z.object({
    userId: z.string(),
  }),
});
