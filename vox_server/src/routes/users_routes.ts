import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";
import { createUser, getAllUsers, getUser } from "../controllers/user";

const productRouter = Router();

const prisma = new PrismaClient();

productRouter.get("/users", getAllUsers);

productRouter.post("/users", createUser);

productRouter.get("/user/:id", getUser);

export default productRouter;
