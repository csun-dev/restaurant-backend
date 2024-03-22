import express from "express";
import menuRouter from "./menuRouter";
import userRouter from "./userRouter";
import reviewRouter from "./reviewRouter";

const router = express.Router();

router.use("/menus", menuRouter);
router.use("/user", userRouter);
router.use("/review", reviewRouter);

export default router;
