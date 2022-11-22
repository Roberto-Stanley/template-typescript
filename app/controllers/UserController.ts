import { Request, Response } from "express";
import { User } from "../models";
type userBody = {
  email: string;
  password: string;
  repeat_password: string;
};

export default class UserController {
  public static async index(req: Request, res: Response) {
    const users: User[] = await User.findAll();
    return res.status(200).json(users);
  }

  public static async store(req: Request, res: Response) {
    const { email, password, repeat_password: repeatPassword, }: userBody = req.body;

    if (password.trim() !== repeatPassword.trim())
      return res.status(400).json({
        message: "The password and repeat_password not is the same",
      });

    const user: User = await User.create({
      email,
      password,
    });
    return res.status(201).json(user);
  }
}
