import { Router } from "express";
import appRoute from "./approute";
import tokenRoute from "./tokenroute";

const router = Router();

const defaultroute = [
  {
    path: "/app",
    route: appRoute,
  },
  {
    path:"/token",
    route: tokenRoute
  }
];

defaultroute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
