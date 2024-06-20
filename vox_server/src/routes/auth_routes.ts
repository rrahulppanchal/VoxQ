import { Request, Response, Router } from "express";
import UserService, { AdminUserService } from "../controllers/auth";
import DataValidator from "../schema/middleware";
import { userLogInSchema, userSchema1 } from "../schema/auth_schema";

class AuthRouter {
  private router: Router;
  private userService: UserService;
  private adminUserService: AdminUserService;

  constructor() {
    this.router = Router();
    this.userService = new UserService();
    this.adminUserService = new AdminUserService();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/auth", this.getAllUsers.bind(this));
    this.router.post(
      "/create-user-auth",
      new DataValidator(userSchema1).validateData,
      this.userService.createUser.bind(this.userService)
    );
    this.router.get(
      "/autha",
      this.adminUserService.createAdminUser.bind(this.adminUserService)
    );
    this.router.post(
      "/login",
      new DataValidator(userLogInSchema).validateData,
      this.adminUserService.loginUser.bind(this.adminUserService)
    );
  }

  private getAllUsers(req: Request, res: Response) {
    res.status(501).json({ message: "Not implemented" });
  }

  public getRouter() {
    return this.router;
  }
}

const authRouter = new AuthRouter().getRouter();
export default authRouter;
