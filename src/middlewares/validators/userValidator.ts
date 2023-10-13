import { NextFunction, Request, Response } from "express";
import Validators from "./schemaValidator";
import HttpStatusCode from "http-status-codes";
import { returnError } from "../ApiResponseHandler";

const validator = new Validators();

export default class UserValidator {
  userSignUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = req.body;
      const { error } = validator.SignUpValidator.validate(payload);
      if (error) {
        const statusCode = HttpStatusCode.NOT_ACCEPTABLE;
        const message = `user validation error : ${error.message}`;
        return res.json(returnError(statusCode, message));
      } else {
        next();
      }
    } catch (error: any) {
      const statusCode = HttpStatusCode.BAD_REQUEST;
      const message = `Somthing went wrong : ${error.message}`;
      res.json(returnError(statusCode, message));
    }
  };

  userSignIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = req.body;
      const { error } = validator.SignInValidator.validate(payload);
      if (error) {
        const statusCode = HttpStatusCode.NOT_ACCEPTABLE;
        const message = `Somthing went wrong: ${error.message}`;
        res.json(returnError(statusCode, message));
      } else {
        next();
      }
    } catch (error: any) {
      const statusCode = HttpStatusCode.BAD_REQUEST;
      const message = `Somthing went wrong: ${error.message}`;
      res.json(returnError(statusCode, message));
    }
  };
}
