export interface IUserData {
  user_id: number;
  user_name: string;
  user_email: string;
  password: string;
  first_name: string;
  last_name?: string | null;
  user_role: string;
  refresh_token?: string | null;
  created_at?: Date;
  updated_at?: Date;
}

export interface ILoginInData {
  email: string;
  password: string;
}

export interface IUser {
  idstring: number;
  user_name: string;
  user_email: string;
  password?: string;
  first_name: string;
  last_name: string;
  description: string;
  phone: string;
  j_date: Date | string;
  l_date?: Date | string | null;
  user_role: string;
  is_deleted?: false;
  is_active?: false;
  created_at?: Date;
  updated_at?: Date;
}
