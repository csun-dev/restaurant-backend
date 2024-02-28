import express from "express";
import * as menuController from "../controllers/menuController";

const menuRouter = express.Router();

/** Public */
menuRouter.get("/", menuController.readMenus);
menuRouter.get("/:mid(\\d+)/", menuController.readMenuDetail);

export default menuRouter;
