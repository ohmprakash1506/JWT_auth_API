import UserService from "../services/userService";
import AuthService from "../services/authService";
import { Request, Response } from "express";
import { returnSuccuss, returnError } from "../middlewares/ApiResponseHandler";
import generateToken from "../services/tokenService";
import HttpStatusCode from "http-status-codes";

const authService = new AuthService();
const userService = new UserService();
const jwtToken = new generateToken();

export default class authController {
  signIn = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const data = { username, password };

      const checkUser = data.username;
      const checkLogin = data;

      const findUser = await userService.getUser(checkUser).then((data) => {
        return data;
      });

      const checkPassword = await authService
        .checkPassword(checkLogin)
        .then((data) => {
          return data;
        });

        if (!findUser) {
          const statusCode = HttpStatusCode.FORBIDDEN;
          const message = `Invalid user email`;
          res.json(returnError(statusCode, message));
        }
      
        if (!checkPassword) {
          const statusCode = HttpStatusCode.FORBIDDEN;
          const message = `Invalid user password`;
          res.json(returnError(statusCode, message));
        }

      if(findUser === true && checkPassword === true){
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
      }
      
    } catch (error) {
      console.log(error);
      const message = `token generation error`;
      const statusCode = HttpStatusCode.BAD_REQUEST;
      res.json(returnError(statusCode, message));
    }
  };

  signUp = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const data = { username, password };
      const userEmail = data.username;

      const findUser: any = await userService
        .getUser(userEmail)
        .then((data) => {
          return data;
        });

      if (findUser) {
        const statusCode = HttpStatusCode.FORBIDDEN;
        const message = `Already existing user`;
        res.json(returnError(statusCode, message));
      } else {
        const userData: any = await userService.create(data).then((data) => {
          const response = data;
          if (!response) {
            return `Error in User creation`;
          } else {
            return response;
          }
        });

        const message = `User signUp successfull`;
        const statusCode = HttpStatusCode.OK;
        const resData = userData;
        res.json(returnSuccuss(statusCode, message, resData));
      }
    } catch (error) {
      const message = `User signUp failed`;
      const statusCode = HttpStatusCode.BAD_REQUEST;
      res.json(returnError(statusCode, message));
    }
  };
}
