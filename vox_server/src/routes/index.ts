import { NextFunction, Request, Response, Router } from "express";
import userRouter from "./users_routes";
import authRouter from "./auth_routes";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import AuthValidator from "../schema/middleware/token_authentication";
import contactsRouter from "./contacts_routes";

class MainRouter {
  public prisma: PrismaClient;
  private router: Router;

  constructor() {
    this.router = Router();
    this.prisma = new PrismaClient();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.use("/auth", authRouter);
    this.router.use(new AuthValidator().authValidator, userRouter);
    this.router.use(new AuthValidator().authValidator, contactsRouter);
    // this.router.use(new AuthValidator().authValidator, authRouter);
    this.router.use("/**", this.handleNotFound.bind(this));
  }

  private handleNotFound(req: Request, res: Response, next: NextFunction) {
    console.log(req);
    res.status(400).send("No Page found !!!");
  }

  public getRouter() {
    return this.router;
  }
}

const mainRouter = new MainRouter().getRouter();
export default mainRouter;
