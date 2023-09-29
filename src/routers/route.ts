import { Router } from "express";
import appRoute from "./approute";
import tokenRoute from "./tokenroute";
import authRoute from "./authRoute";
import userRoute from './userRoute';

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
  },
  {
    path:"/user",
    route:userRoute
  }
];

defaultroute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
