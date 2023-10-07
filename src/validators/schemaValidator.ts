import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export default class Validators {
  SignUpValidator = Joi.object({
    username: Joi.string().email().required(),
    password: Joi.string().required(),
  }).options({
    abortEarly: false,
  });
}
