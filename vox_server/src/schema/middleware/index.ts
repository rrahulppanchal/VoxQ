import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import ResponseHandler from "../../utils/shared";

class DataValidator {
  private schema: any;

  constructor(schema: any) {
    this.schema = schema;
  }

  public validateData = (req: Request, res: Response, next: NextFunction) => {
    try {
      this.schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join(".")} is ${issue.message}`,
        }));
        const response = new ResponseHandler(
          null,
          errorMessages[0].message || "Failed to create user",
          400
        );
        res.status(response.getStatusCode()).json(response.getResponse());
      } else {
        const response = new ResponseHandler(
          null,
          "Internal Server Error",
          500
        );
        res.status(response.getStatusCode()).json(response.getResponse());
      }
    }
  };
}

export default DataValidator;
