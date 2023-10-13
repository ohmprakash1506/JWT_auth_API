import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import HttpStatusCode from "http-status-codes";
import { returnSuccuss, returnError } from "../ApiResponseHandler";
import TokenService from "../../services/tokenService";

const tokenService = new TokenService();

export default class tokenVerification {
  authUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let authToken: any = req.headers.authorization;

      if (!authToken) {
        const statusCode = HttpStatusCode.UNAUTHORIZED;
        const message = `token missing`;
        res.json(returnError(statusCode, message));
      } else if (authToken) {
        const token = authToken.split(" ")[1];
        const verify = await tokenService.verifyToken(token).then((data) => {});
      }
    } catch (error) {}
  };
}
