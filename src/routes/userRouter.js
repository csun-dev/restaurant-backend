import express from "express";
import * as userController from "../controllers/userController";

const userRouter = express.Router();

/* Public */
userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);

export default userRouter;
