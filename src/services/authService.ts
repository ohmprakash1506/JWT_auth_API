import user from "../dbConfig/models/User.model";
import HttpStatusCode from "http-status-codes";
import { returnError } from "../middlewares/ApiResponseHandler";
import bycrpt from 'bcrypt';

const saltRound = 10;

export default class AuthService {
  checkLogin = async (data: any) => {
    try {
      const userCheck = await user.find({username: data.username});
      return true;
    } catch (error) {
      const statusCode = HttpStatusCode.FORBIDDEN;
      const message = `user deatails dose not match`;
      return returnError(statusCode, message);
    }
  };

  hashPassword = async (data: any) =>{
    try {
        const bycrptpassword = await bycrpt.hash(data, saltRound).then((hash) => {
            console.log(`Hash:`, hash);
            return hash;
        })
        return bycrptpassword;
    } catch (error) {
        const statusCode = HttpStatusCode.FORBIDDEN;
        const message = `Password encrption failed`;
        return returnError(statusCode, message);
    }
  }

  checkPassword = async (data: any) =>{
    try {
        const user = data.username;
        const userdata = await user.findOne({user});
        console.log(userdata);
        return userdata;
    } catch (error) {
        const statusCode = HttpStatusCode.FORBIDDEN;
        const message = `Password validation failed`;
        return returnError(statusCode, message);
    }
  }

}
