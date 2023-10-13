import UserService from "../services/userService";
import { Request, Response } from "express";
import HttpStatusCode from "http-status-codes";
import { returnSuccuss, returnError } from "../middlewares/ApiResponseHandler";
import user from "../dbConfig/models/User.model";

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
      const data = req.body;
      const user = data.username;

      const userExist = await userSerivce.getUser(user).then((data) => {
        return data;
      });

      if (!userExist) {
        const statusCode = HttpStatusCode.FORBIDDEN;
        const message = "Invalied user name";
        res.json(returnError(statusCode, message));
      } else {
        const id = data.id;
        const userData = data;
        const response = await userSerivce.updateuser(id, userData);
        const statusCode = HttpStatusCode.OK;
        const message = `user deatils updated successfully`;
      }
    } catch (error) {
      const statusCode = HttpStatusCode.BAD_REQUEST;
      const message = `Error in updating user deatils`;
      res.json(returnError(statusCode, message));
    }
  };
}
