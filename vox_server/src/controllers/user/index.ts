import { PrismaClient, Role } from "@prisma/client";
import { Request, Response } from "express";
import ResponseHandler from "../../utils/shared";
import bcrypt from "bcrypt";
import { IUser } from "../../types.ts";
import { UserRole } from "../../utils/enum";

class User {
  public prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createUser(req: Request, res: Response) {
    try {
      const reqData = req.body as any;

      const userExists = await this.prisma.tbl_users.findUnique({
        where: { user_email: reqData.user_email },
      });

      if (userExists) {
        const response = new ResponseHandler(null, "User already exists", 409);
        res.status(response.getStatusCode()).json(response.getResponse());
        return;
      }

      const hashedPassword = await bcrypt.hash(reqData.password, 10);

      const user = await this.prisma.tbl_users.create({
        data: {
          user_name: reqData.user_name,
          user_email: reqData.user_email,
          password: hashedPassword,
          first_name: reqData.first_name,
          last_name: reqData.last_name,
          phone: reqData.phone,
          j_date: new Date(reqData.j_date),
          user_role:
            reqData.user_role === UserRole.ADMIN
              ? Role.ADMIN
              : reqData.user_role === UserRole.MODERATOR
              ? Role.MODERATOR
              : Role.USER,
          description: reqData.description,
          is_active: reqData.is_active,
        },
      });

      const response = new ResponseHandler(
        user,
        "User created successfully",
        201
      );
      res.status(response.getStatusCode()).json(response.getResponse());
    } catch (error) {
      const response = new ResponseHandler(null, "Failed to create user", 400);
      res.status(response.getStatusCode()).json(response.getResponse());
    }
  }

  public async getUsers(req: Request, res: Response) {
    try {
      const user = await this.prisma.tbl_users.findMany({
        where: { is_deleted: false },
      });

      user.map(function (item) {
        delete (item as unknown as IUser).password;
        (item as unknown as IUser).user_role = UserRole[item.user_role];
        return item;
      });

      const response = new ResponseHandler(user, "Success", 200);
      res.status(response.getStatusCode()).json(response.getResponse());
    } catch (error) {
      const response = new ResponseHandler(null, "Failed to get users", 400);
      res.status(response.getStatusCode()).json(response.getResponse());
    }
  }

  public async getUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await this.prisma.tbl_users.findUnique({
        where: { id: Number(id), is_deleted: false },
      });

      if (user) {
        delete (user as unknown as IUser).password;
        (user as unknown as IUser).user_role = UserRole[user.user_role];
      }

      const response = new ResponseHandler(
        user,
        user ? "Success" : "No user found",
        200
      );
      res.status(response.getStatusCode()).json(response.getResponse());
    } catch (error) {
      const response = new ResponseHandler(null, "Failed to get user", 400);
      res.status(response.getStatusCode()).json(response.getResponse());
    }
  }

  public async updateUser(req: Request, res: Response) {
    try {
      const reqData = req.body as any;

      const user = await this.prisma.tbl_users.update({
        where: {
          id: reqData.id,
        },
        data: {
          user_name: reqData.user_name,
          user_email: reqData.user_email,
          first_name: reqData.first_name,
          last_name: reqData.last_name,
          phone: reqData.phone,
          j_date: new Date(reqData.j_date),
          l_date: reqData.l_date ? new Date(reqData.l_date) : null,
          user_role:
            reqData.user_role === UserRole.ADMIN
              ? Role.ADMIN
              : reqData.user_role === UserRole.MODERATOR
              ? Role.MODERATOR
              : Role.USER,
          description: reqData.description,
          is_active: reqData.is_active,
          updated_at: new Date(),
        },
      });

      const response = new ResponseHandler(
        user,
        "User updated successfully",
        200
      );
      res.status(response.getStatusCode()).json(response.getResponse());
    } catch (error) {
      const response = new ResponseHandler(null, "Failed to update user", 400);
      res.status(response.getStatusCode()).json(response.getResponse());
    }
  }

  public async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await this.prisma.tbl_users.update({
        where: {
          id: Number(id),
        },
        data: {
          is_deleted: true,
        },
      });

      const response = new ResponseHandler(
        null,
        "User deleted successfully",
        200
      );
      res.status(response.getStatusCode()).json(response.getResponse());
    } catch (error) {
      const response = new ResponseHandler(null, "Failed to delete user", 400);
      res.status(response.getStatusCode()).json(response.getResponse());
    }
  }
}

export default User;
