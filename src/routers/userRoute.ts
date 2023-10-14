import { Router } from "express";
import userController from "../controllers/user.controller";
import tokenVerification from "../middlewares/authMiddleware/tokenValidator";

const router = Router();
const user = new userController();
const verify = new tokenVerification();

router.get("/all", verify.authUser, user.all);
router.put("/update/:id", user.update);
router.delete("/delete/:id", user.delete);

export default router;
