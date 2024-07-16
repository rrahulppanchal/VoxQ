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

export const contactSchema = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  phone: z.string(),
  status: z.number(),
  assigned_by: z.number(),
  assigned_to: z.number(),
  created_by: z.number(),
});

export const contactsSchema = z.array(
  z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string(),
    phone: z.string(),
    status: z.number(),
    assigned_by: z.number(),
    assigned_to: z.number(),
    created_by: z.number(),
  })
);
