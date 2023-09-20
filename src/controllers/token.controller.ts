import { Request, Response } from "express";
import generateToken from "../services/tokenService";

export default class tokenGenerator {
  accessToken = async (req: Request, res: Response) => {
    try {
      const user = req.body.user;
      const accessTokenGenerated = await generateToken(user).then((data) => {
        res.json({
            accessTokenGenerated: data
        })
      });
    } catch (error) {
        console.log(error);
        res.json(error);
    }
  };
}
