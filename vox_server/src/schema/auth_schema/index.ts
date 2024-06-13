import { z } from "zod";

export const userSchema = z.object({
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
