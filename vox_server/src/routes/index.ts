import { Request, Response, Router } from "express";
import productRouter from "./users_routes";

const MainRouter = Router();

MainRouter.use("*", (req: Request, res: Response) => {
  res.status(400).send("Service not available !!!");
});

MainRouter.use(productRouter);

export default MainRouter;
