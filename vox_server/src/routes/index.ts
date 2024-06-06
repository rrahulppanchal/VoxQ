import { Request, Response, Router } from "express";
import productRouter from "./users_routes";
import authRouter from "./auth_routes";

class MainRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.use(productRouter);
    this.router.use(authRouter);
    this.router.use("**", this.handleNotFound.bind(this));
  }

  private handleNotFound(req: Request, res: Response) {
    res.status(400).send("No Page found !!!");
  }

  public getRouter() {
    return this.router;
  }
}

const mainRouter = new MainRouter().getRouter();
export default mainRouter;
