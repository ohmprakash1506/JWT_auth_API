import { Request, Response } from "express";
import generateToken from "../services/tokenService";
import { returnSuccuss, returnError } from "../middlewares/ApiResponseHandler";
import HttpStatusCode from "http-status-codes";

const token = new generateToken();

export default class tokenGenerator {
  accessToken = async (req: Request, res: Response) => {
    try {
      const {user, password }= req.body
      const data = { user, password};
      const accessTokenGenerated = await token.accessToken(data).then((data) => {
        const message = `Access token generated`;
        const statusCode = HttpStatusCode.OK;
        const token = { accessTokenGenerated: data };
        res.json(returnSuccuss(statusCode, message, token));
      });
    } catch (error) {
      console.log(error);
      const message = `token generation error`;
      const statusCode = HttpStatusCode.BAD_REQUEST;
      res.json(returnError(statusCode, message));
    }
  };
}
