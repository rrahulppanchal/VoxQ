import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import "dotenv/config";

import MainRouter from "./routes";

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

// app.use("*", (req: Request, res: Response) => {
//   res.status(400).send("Hello, World!");
// });

app.use("/", MainRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port} ✈️`);
});
