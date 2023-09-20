import { Router } from "express";
import appRouteController from "../controllers/app.controller";

const router = Router();
const app = new appRouteController();

router.get('/console', app.console);

export default router;