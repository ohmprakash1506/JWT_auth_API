import { Router } from "express";
import tokenGenerator from "../controllers/token.controller";

const router = Router();
const token = new tokenGenerator();

router.get('/token', token.accessToken);

export default router;