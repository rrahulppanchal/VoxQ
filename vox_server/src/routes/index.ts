import { Request, Response, Router } from "express";
import productRouter from "./users_routes";

const MainRouter = Router();

MainRouter.use(productRouter);

MainRouter.use("**", (req: Request, res: Response) => {
  res.status(400).send("No Page found !!!");
});

export default MainRouter;
