import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { APPCONSTANT } from "../config/constant";

export default class Validators {
  SignUpValidator = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    date_of_birth: Joi.string().required(),
    contact_number: Joi.string().length(10).required(),
    gender: Joi.string().valid("male", "female", "Male", "female").required(),
    username: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().default(APPCONSTANT.role[0]),
  }).options({
    abortEarly: false,
  });
}
