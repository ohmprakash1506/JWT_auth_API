import { Router } from "express";
import authController from "../controllers/auth.controller";
import UserValidator from "../validators/userValidator";

const route = Router();
const auth = new authController();
const userValidator = new UserValidator();

route.post("/signin", auth.signIn);
route.post("/signup", userValidator.userSignUp, auth.signUp);

export default route;
