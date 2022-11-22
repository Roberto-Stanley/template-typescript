import { Request, Response } from "express";
import { User } from "../models";
import UserRepository from "../repositories/UserRepository";

type userBody = {
  email: string;
  password: string;
  repeat_password: string;
};

export default class UserController {
  public static async index(req: Request, res: Response) {
    const users: User[] = await UserRepository.findAll();
    return res.status(200).json(users);
  }

  public static async store(req: Request, res: Response) {
    const {
      email,
      password,
      repeat_password: repeatPassword,
    }: userBody = req.body;

    if (password.trim() !== repeatPassword.trim())
      return res.status(400).json({
        message: "The password and repeat_password not is the same",
      });

    const user: User = await UserRepository.create({
      email,
      password,
    });
    return res.status(201).json(user);
  }
}
