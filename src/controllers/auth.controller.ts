import UserService from "../services/userService";
import { Request, Response } from "express";
import { returnSuccuss, returnError } from "../middlewares/ApiResponseHandler";
import generateToken from "../services/tokenService";
import HttpStatusCode from "http-status-codes";

const userService = new UserService();
const jwtToken = new generateToken();

export default class authController {
  signIn = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const data = { username, password };

      const accessTokenGenerated = await jwtToken
        .accessToken(data)
        .then((accessdata) => {
          return accessdata;
        });
      const refreshTokenGenerated = await jwtToken
        .refreshToken(data)
        .then((refreshdata) => {
          return refreshdata;
        });

      const message = `sign in verified`;
      const statusCode = HttpStatusCode.OK;
      const token = {
        accessTokenGenerated: accessTokenGenerated,
        refreshTokenGenerated: refreshTokenGenerated,
      };
      const resData = token;
      res.json(returnSuccuss(statusCode, message, resData));
    } catch (error) {
      console.log(error);
      const message = `token generation error`;
      const statusCode = HttpStatusCode.BAD_REQUEST;
      res.json(returnError(statusCode, message));
    }
  };

  signUp = async (req: Request, res: Response) =>{
    try {
      const {username , password } = req.body;
      const data = { username , password };
      const userData : any = await userService.create(data).then((data) => {
        const response = data;
        if(!response){
          return `Error in User creation`;
        }else {
          return response;
        }
      })

      const message = `User signUp successfull`;
      const statusCode = HttpStatusCode.OK;
      const resData = userData ;
      res.json(returnSuccuss(statusCode, message, resData));
    } catch (error) {
      const message = `User signUp failed`;
      const statusCode = HttpStatusCode.BAD_REQUEST;
      res.json(returnSuccuss(statusCode, message));
    }
  } 
}
