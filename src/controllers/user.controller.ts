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
      const id = req.params.id;
      const data = req.body;

      const checkId = await userSerivce.getUserId(id).then((data) => {
        return data;
      });

      if (!checkId) {
        const statusCode = HttpStatusCode.FORBIDDEN;
        const message = `invalied user`;
        res.json(returnError(statusCode, message));
      } else {
        const updateRecord = await userSerivce
          .updateUser(id, data)
          .then((data) => {
            return data;
          });

        if (!updateRecord) {
          const statusCode = HttpStatusCode.FORBIDDEN;
          const message = `Error in updating record`;
          res.json(returnError(statusCode, message));
        } else {
          const statusCode = HttpStatusCode.OK;
          const message = `User details updated successfully`;
          const response = updateRecord;
          res.json(returnSuccuss(statusCode, message, response));
        }
      }
    } catch (error) {
      const statusCode = HttpStatusCode.BAD_REQUEST;
      const message = `Error in updating user deatils`;
      res.json(returnError(statusCode, message));
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const checkId = await userSerivce.getUserId(id).then((data) => {
        return data;
      });

      if (!checkId) {
        const statusCode = HttpStatusCode.FORBIDDEN;
        const message = `invalied user`;
        res.json(returnError(statusCode, message));
      }

      const user = await userSerivce.deleteUser(id).then((data) => {
        return data;
      });
      if (!user) {
        const statusCode = HttpStatusCode.FORBIDDEN;
        const message = `Error in deleting user details`;
        res.json(returnError(statusCode, message));
      } else {
        const statusCode = HttpStatusCode.OK;
        const message = `User details deleted successfully`;
        const response = { id: id };
        res.json(returnSuccuss(statusCode, message, response));
      }
    } catch (error) {
      const statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR;
      const message = `Internal server error`;
      res.json(returnError(statusCode, message));
    }
  };
}
