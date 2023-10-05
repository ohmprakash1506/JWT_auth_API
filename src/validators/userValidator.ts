import { NextFunction, Request, Response } from "express";
import HttpStatusCode from "http-status-codes";
import { APIServiceResponse } from "../@types/APIServiceResponse";
import { APPCONSTANT } from "../config/constant";
import Joi from "joi";

export default class userValidator {
  async UserSignUpValidator(req: Request, res: Response, next: NextFunction) {
    //* joi schema object

    const schema = Joi.object({
      username: Joi.string().email().required(),
      password: Joi.string().allow("").allow(null),
    });

    //* schema options

    const options = {
      abortEarly: false,
      allowUnknown: true,
      stripunknown: true,
    };

    //validate input
    const { error, value } = schema.validate(req.body, options);
  }
}
