import express from "express";
import menuRouter from "./menuRouter";
import userRouter from "./userRouter";

const router = express.Router();

router.use("/menus", menuRouter);
router.use("/user", userRouter);

export default router;
