import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import ResponseHandler from "../../utils/shared";

const prisma = new PrismaClient();
class AuthValidator {
  //   private prisma: PrismaClient;

  //   constructor() {
  //     this.prisma = new PrismaClient();
  //   }

  public async authValidator(req: Request, res: Response, next: NextFunction) {
    try {
      // const cookieToken = req.headers.cookie;
      // if (!cookieToken) {
      //   const response = new ResponseHandler(null, "No token provided", 401);
      //   res.status(response.getStatusCode()).json(response.getResponse());
      //   return;
      // }

      // const token = cookieToken.split("=")[1];
      // if (!token) {
      //   const response = new ResponseHandler(null, "Invalid token format", 401);
      //   res.status(response.getStatusCode()).json(response.getResponse());
      //   return;
      // }

      const authHeader = req.headers["authorization"];
      if (!authHeader) {
        return res.status(403).json({ error: "User unauthorized" });
      }

      // Assuming the format is "Bearer <token>"
      let token = authHeader.split(" ")[1];

      const decoded = jwt.verify(
        token,
        process.env.REFRESH_TOKEN_SECRET as string
      ) as { id: number };
      const user = await prisma.tbl_users.findUnique({
        where: { id: decoded.id },
      });

      if (!user) {
        return res.status(403).json({ error: "Invalid refresh token" });
      }

      // Token is valid, call the next middleware
      next();
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        return res.status(403).json({ error: "Invalid token" });
      }
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default AuthValidator;
