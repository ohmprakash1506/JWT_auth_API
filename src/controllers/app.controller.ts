import { Request, Response } from "express";

export default class appRouteController {
  console = async (req: Request, res: Response) => {
    try {
      console.log(`Hello typescript auth app`);
      res.json(`Hello typescript auth app`);
    } catch (error) {
      res.send(`Something went wrong`);
      return error;
    }
  };
}
