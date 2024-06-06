import { Request, Response, Router } from "express";
import UserService, { AdminUserService } from "../controllers/auth";

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
      "/users",
      this.userService.createUser.bind(this.userService)
    );
    this.router.get(
      "/autha",
      this.adminUserService.createAdminUser.bind(this.adminUserService)
    );
    this.router.get(
      "/authb",
      this.adminUserService.getUserById.bind(this.adminUserService)
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
