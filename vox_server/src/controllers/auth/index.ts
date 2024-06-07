import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { ILoginInData, IUserData } from "../../types.ts";
import ResponseHandler from "../../utils/shared";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserService {
  public prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createUser(req: Request, res: Response) {
    try {
      const reqData = req.body as IUserData;

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
          user_role: reqData.user_role,
        },
      });

      const refreshToken = UserService.generateRefreshToken({
        id: user.user_id,
      });

      await this.prisma.tbl_user_tokens.create({
        data: {
          id: user.user_id,
          refresh_token: refreshToken,
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

  public async loginUser(req: Request, res: Response) {
    try {
      const loginData = req.body as ILoginInData;
      const user = await this.prisma.tbl_users.findUnique({
        where: { user_email: loginData.email },
      });
      if (!user) {
        const response = new ResponseHandler(null, "Invalid email", 400);
        res.status(response.getStatusCode()).json(response.getResponse());
        return;
      }
      const isValidPassword = await bcrypt.compare(
        loginData.password,
        user.password
      );
      if (!isValidPassword) {
        const response = new ResponseHandler(null, "Invalid password", 400);
        res.status(response.getStatusCode()).json(response.getResponse());
        return;
      }

      const accessToken = UserService.generateAccessToken({
        id: user.user_id,
      });

      const cookieResponse = { accessToken: accessToken, id: user.user_id };
      res.cookie("token", accessToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      }); // 7 days

      const response = new ResponseHandler(
        cookieResponse,
        "User logged in successfully",
        200
      );
      res.status(response.getStatusCode()).json(response.getResponse());
    } catch (error) {
      const response = new ResponseHandler(null, "Login failed", 400);
      res.status(response.getStatusCode()).json(response.getResponse());
    }
  }

  private static generateRefreshToken(user: { id: number }) {
    return jwt.sign(
      { id: user.id },
      process.env.REFRESH_TOKEN_SECRET as string
    );
  }

  private static generateAccessToken(user: { id: number }) {
    return jwt.sign(
      { id: user.id },
      process.env.REFRESH_TOKEN_SECRET as string,
      { expiresIn: "1h" }
    );
  }
}

export class AdminUserService extends UserService {
  public async createAdminUser(req: Request, res: Response) {
    try {
      res.clearCookie("token");
      const response = new ResponseHandler(
        null,
        "User looged out succeesfully",
        200
      );
      res.status(response.getStatusCode()).json(response.getResponse());
    } catch (error) {
      res.status(500).json({ error: "Failed to create admin user" });
    }
  }
}

export default UserService;
