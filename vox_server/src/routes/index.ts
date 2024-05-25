import { Router } from "express";
import productRouter from "./users_routes";

const MainRouter = Router();

MainRouter.use("/user", productRouter);

export default MainRouter;
