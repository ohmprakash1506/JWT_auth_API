import UserService from "../services/userService";
import { Request, Response } from "express";
import HttpStatusCode from "http-status-codes";
import { returnSuccuss, returnError } from "../middlewares/ApiResponseHandler";

const userSerivce = new UserService();

export default class userController {
  all = async (req: Request, res: Response) => {
    try {
      const data = await userSerivce.getAllUser().then((data) => {
        return data;
      });

      const message = `User detailes listed successfully`;
      const statusCode = HttpStatusCode.OK;
      const resData = data;

      res.json(returnSuccuss(statusCode, message, resData));
    } catch (error) {
      const message = `Error in retiving User data`;
      const statusCode = HttpStatusCode.BAD_REQUEST;
      res.json(returnError(statusCode, message));
    }
  };

  update = async (req: Request, res: Response) => {
    try {
        const userEmail = req.body.userEmail;
    } catch (error) {
        
    }
  }
}
