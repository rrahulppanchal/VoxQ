import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import User from "../controllers/user";
import DataValidator from "../schema/middleware";
import { userSchema } from "../schema/auth_schema";

class userRouter {
  private router: Router;
  private user: User;

  constructor() {
    this.router = Router();
    this.user = new User();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/create-user",
      new DataValidator(userSchema).validateData,
      this.user.createUser.bind(this.user)
    );
  }

  public getRouter() {
    return this.router;
  }
}

const authRouter = new userRouter().getRouter();
export default authRouter;
