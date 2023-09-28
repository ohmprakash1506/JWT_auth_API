import UserService from "../services/userService";
import { Request, Response } from "express";
import { returnSuccuss, returnError } from "../middlewares/ApiResponseHandler";
import generateToken from "../services/tokenService";
import HttpStatusCode from "http-status-codes";

const userService = new UserService();

export default class authController {
  signUp = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const data = { username, password };
      const userData = await userService.create(data).then((data) => {
        const response = data
        return response;
      })
      const accessTokenGenerated = await generateToken(data).then((data) => {
        const message = `Access token generated`;
        const statusCode = HttpStatusCode.OK;
        const token = { accessTokenGenerated: data };
        const resData = [userData, token];
        res.json(returnSuccuss(statusCode, message, resData));
      });
    } catch (error) {
      console.log(error);
      const message = `token generation error`;
      const statusCode = HttpStatusCode.BAD_REQUEST;
      res.json(returnError(statusCode, message));
    }
  };
}
