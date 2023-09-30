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
        const {username, password } = req.body;
        const user = {username, password }

        if(!user.username){
         return `User details dose not exists`;
        }else{
          const params = user.username
          const data = await userSerivce.updateuser(params, user).then((data) => {
            return data
          })

          const statusCode = HttpStatusCode.OK;
          const message = `User details updated successfully`;
          const resData: any = data;

          res.json(returnSuccuss(statusCode, message, resData));
        }
    } catch (error) {
        const statusCode = HttpStatusCode.BAD_REQUEST;
        const message = `Error in updating user deatils`;
        res.json(returnError(statusCode, message));
    }
  }
}
