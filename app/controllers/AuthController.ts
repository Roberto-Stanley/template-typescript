import { Request, Response } from "express";

export default class AuthController {
  public static login(req: Request, res: Response) {
    return res.status(200).json({
      message: "Good",
    });
  }
}
