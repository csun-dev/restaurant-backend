import express from "express";
import * as userController from "../controllers/userController";
import { verifyUser } from "../middlewares/auth";

const userRouter = express.Router();

/* Public */
userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);

/* Private */
userRouter.get("/", verifyUser, userController.getUser);
userRouter.get("/logout", verifyUser, userController.logout);

export default userRouter;
