import user from "../dbConfig/models/User.model";
import { returnError } from "../middlewares/ApiResponseHandler";
import httpStatusCode from "http-status-codes";
import bcrypt from "bcrypt";

export default class UserService {
  create = async (data: any) => {
    try {
      const password = data.password;
      const saltRound = 10;
      const encryptPassword = await bcrypt
        .hash(password, saltRound)
        .then((data) => {
          return data;
        });
      const hashedPassword = encryptPassword.toString();
      const userData = {
        first_name: data.first_name,
        last_name: data.last_name,
        date_of_birth: data.date_of_birth,
        contact_number: data.contact_number,
        gender: data.gender,
        username: data.username,
        password: hashedPassword,
      };
      return await user.create(userData);
    } catch (error) {
      console.log(error);
      const status = httpStatusCode.BAD_REQUEST;
      const message = `Somthing went wrong in storing the data`;
      return returnError(status, message);
    }
  };

  getUser = async (data: any) => {
    try {
      const userCheck = await user.findOne({
        username: data,
      });
      if (userCheck) {
        return true;
      }
    } catch (error) {
      const status = httpStatusCode.BAD_REQUEST;
      const message = `Somthing went wrong`;
      return returnError(status, message);
    }
  };

  getAllUser = async () => {
    try {
      return await user.find();
    } catch (error) {
      const status = httpStatusCode.BAD_REQUEST;
      const message = `Somthing went wrong`;
      return returnError(status, message);
    }
  };

  updateuser = async (id: any, data: any) => {
    try {
      const filter = id;
      const update = data;
      return await user.findByIdAndUpdate(filter, update);
    } catch (error) {
      const status = httpStatusCode.BAD_REQUEST;
      const message = `Somthing went wrong in update`;
      return returnError(status, message);
    }
  };
}
