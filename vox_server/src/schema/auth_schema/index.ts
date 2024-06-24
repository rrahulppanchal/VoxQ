import { z } from "zod";

export const userSchema1 = z.object({
  user_name: z.string(),
  user_email: z.string(),
  password: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  user_role: z.number(),
});

export const userLogInSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const userSchema = z.object({
  user_name: z.string(),
  user_email: z.string(),
  password: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  user_role: z.string(),
  j_date: z.string(),
  phone: z.string(),
  is_active: z.boolean(),
  description: z.string(),
});
