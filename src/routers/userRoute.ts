import { Router } from "express";
import userController from "../controllers/user.controller";

const router = Router();
const user = new userController();

router.get('/all', user.all);

export default router;