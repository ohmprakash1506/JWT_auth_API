import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import HttpStatusCode from "http-status-codes";
import { returnSuccuss, returnError } from "../ApiResponseHandler";

const access_secert_key: any = process.env.ACCESS_TOKEN_SECERT;
const refresh_secert_key: any = process.env.REFRESH_TOKEN_SECERT;

export default class tokenVerification {
  authUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authToken: any = req.headers["authorization"];

      if (!authToken) {
        const statusCode = HttpStatusCode.UNAUTHORIZED;
        const message = `token missing`;
        res.json(returnError(statusCode, message));
      } else if (authToken) {
        const token = authToken.split(" ")[1];
        const verify = await jwt.verify(token, access_secert_key);
        console.log(verify);
        next();
      }
    } catch (error) {
      const statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR;
      const message = `Somthing went wrong`;
      res.json(returnError(statusCode, message));
    }
  };
}
