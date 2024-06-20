import { PrismaClient, Role } from "@prisma/client";
import { Request, Response } from "express";
import ResponseHandler from "../../utils/shared";
import bcrypt from "bcrypt";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    // const users = await prisma.user.findMany();
    // res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    // const users = await prisma.user.findUnique({
    //   where: {
    //     id: Number(req.params.id),
    //   },
    //   select: {
    //     id: true,
    //     email: true,
    //     name: true,
    //   },
    // });
    console.log(Role.ADMIN);
    res.json(Role);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    // const user = await prisma.user.create({
    //   data: {
    //     name,
    //     email,
    //   },
    // });
    res.json({ name, email });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

class User {
  public prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createUser(req: Request, res: Response) {
    try {
      const reqData = req.body as any;

      const userExists = await this.prisma.tbl_users.findUnique({
        where: { user_email: reqData.email },
      });

      if (userExists) {
        const response = new ResponseHandler(null, "User already exists", 409);
        res.status(response.getStatusCode()).json(response.getResponse());
        return;
      }

      const hashedPassword = await bcrypt.hash(reqData.password, 10);

      const user = await this.prisma.tbl_users.create({
        data: {
          user_name: reqData.userName,
          user_email: reqData.email,
          password: hashedPassword,
          first_name: reqData.firstName,
          last_name: reqData.lastName,
          phone: reqData.phone,
          j_date: new Date(reqData.joiningDate),
          user_role: Role.ADMIN,
          description: reqData.description,
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
}

export default User;
