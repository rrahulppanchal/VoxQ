import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import "dotenv/config";
import MainRouter from "./routes";

class Server {
  private app: express.Application;
  private port: number | string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5000;
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.startServer();
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  private initializeRoutes() {
    this.app.use("/", MainRouter);
  }

  private startServer() {
    this.app.listen(this.port, () => {
      console.log(`Server running at http://localhost:${this.port} ✈️`);
    });
  }
}

new Server();
