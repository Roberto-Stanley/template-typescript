import { Router } from "express";
import AuthController from "../app/controllers/AuthController";
import userRouter from "./api/user";

const router: Router = Router();

router.get("/v1/login", AuthController.login);
router.use("/v1/users", userRouter);

export default router;
