import { Request, Response } from "express";
import logger from "../middlewares/logger";

export default class appRouteController {
  console = async (req: Request, res: Response) => {
    try {
      logger.info(`Hello typescript auth app`);
      res.json(`Hello typescript auth app`);
    } catch (error) {
      res.send(`Something went wrong`);
      return error;
    }
  };
}
