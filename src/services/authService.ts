import user from "../dbConfig/models/User.model";
import HttpStatusCode from "http-status-codes";
import { returnError } from "../middlewares/ApiResponseHandler";
import bycrpt from 'bcrypt';

const saltRound = 10;

export default class AuthService {
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
        const password = data.password;
        const userdata = await user.findOne({username : data.username}).then((data) =>{
            return data;
        })
        const userResponse = userdata;
        const hashPassword: any = userResponse?.password;
        const response = await bycrpt.compare(password, hashPassword);
        return response;
    } catch (error) {
        const statusCode = HttpStatusCode.FORBIDDEN;
        const message = `Password validation failed`;
        return returnError(statusCode, message);
    }
  }

}
