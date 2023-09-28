import { Router } from "express";
import authController from "../controllers/auth.controller";

const route = Router();
const auth = new authController();

route.post('/signin', auth.signIn);
route.post('/signup', auth.signUp);

export default route;