import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { IUserData } from "../../types.ts";
import ResponseHandler from "../../utils/shared";

class UserService {
  public prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createUser(req: Request, res: Response) {
    try {
      const {
        user_name,
        user_email,
        password,
        first_name,
        last_name,
        user_role,
      } = req.body as IUserData;

      const user = await this.prisma.tbl_users.create({
        data: {
          user_name,
          user_email,
          password,
          first_name,
          last_name,
          user_role,
        },
      });
      const response = new ResponseHandler(
        user,
        "User created successfully",
        200
      );
      res.status(response.getStatusCode()).json(response.getResponse());
    } catch (error) {
      const response = new ResponseHandler(null, "Failed to create user", 400);
      res.status(response.getStatusCode()).json(response.getResponse());
    }
  }

  public async getUserById(req: Request, res: Response) {
    console.log(req.params);

    try {
      const { id } = req.params;
      const user = await this.prisma.user.findMany();
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error || "Failed to retrieve user" });
    }
  }
}

export class AdminUserService extends UserService {
  public async createAdminUser(req: Request, res: Response) {
    try {
      const { name, email, isAdmin } = req.body;
      const user = await this.prisma.user.findMany();
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to create admin user" });
    }
  }
}

export default UserService;
