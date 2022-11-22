import { Router } from "express";
import UserController from "../../app/controllers/UserController";

const userRouter: Router = Router();
userRouter.get("/", UserController.index);
userRouter.post("/", UserController.store);

export default userRouter;
