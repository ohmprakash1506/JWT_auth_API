import user from "../dbConfig/models/User.model";
import { returnError, returnSuccuss } from "../middlewares/ApiResponseHandler";
import httpStatusCode from "http-status-codes";

export default class UserService {
  create = async (data: any) => {
    try {
      return user.create(data);
    } catch (error) {
      const status = httpStatusCode.BAD_REQUEST;
      const message = `Somthing went wrong`;
      return returnError(status, message);
    }
  };
}
