import { Router } from "express";
import authController from "../controllers/auth.controller";
import UserValidator from "../middlewares/validators/userValidator";

const route = Router();
const auth = new authController();
const userValidator = new UserValidator();

route.post("/signin", userValidator.userSignIn, auth.signIn);
route.post("/signup", userValidator.userSignUp, auth.signUp);

export default route;
