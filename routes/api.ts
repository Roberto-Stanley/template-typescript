import { Router } from "express";
import AuthController from "../app/controllers/AuthController";

const router: Router = Router();

router.get("/v1/login", AuthController.login);

export default router;
