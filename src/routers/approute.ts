import { Router } from "express";
import appRouteController from "../controllers/app.controller";

const route = Router();
const app = new appRouteController();

route.get('/console', app.console);

export default route;