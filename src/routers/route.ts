import { Router } from "express";
import appRoute from './approute'

const router = Router();

const defaultroute = [
    {
        path:'/app',
        route: appRoute
    }
]

defaultroute.forEach((route) => {
    router.use(route.path, route.route)
})

export default router;