import express from "express";
import menuRouter from "./menuRouter";

const router = express.Router();

router.use("/menus", menuRouter);

export default router;
