import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

class UserService {
  public prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const user = await this.prisma.user.create({
        data: {
          name,
          email,
        },
      });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to create user" });
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
// export const adminUserService = new AdminUserService();
