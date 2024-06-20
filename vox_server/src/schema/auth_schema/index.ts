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
  name: z.string(),
  email: z.string(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  role: z.number(),
  joiningDate: z.string(),
  phone: z.string(),
  isActive: z.boolean(),
  description: z.string(),
});
