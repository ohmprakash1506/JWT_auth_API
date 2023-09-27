import { Router } from "express";
import appRoute from "./approute";
import tokenRoute from "./tokenroute";
import authRoute from "./authRoute";

const router = Router();

const defaultroute = [
  {
    path: "/app",
    route: appRoute,
  },
  {
    path:"/token",
    route: tokenRoute
  },
  {
    path:"/auth",
    route:authRoute
  }
];

defaultroute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
