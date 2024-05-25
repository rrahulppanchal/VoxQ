import { Router } from "express";

const productRouter = Router();

productRouter.get("/test", (req, res) => {
  res.send("Product route");
});

productRouter.get("/:id", (req, res) => {
  res.send(`Product ${req.params.id}`);
});

export default productRouter;
