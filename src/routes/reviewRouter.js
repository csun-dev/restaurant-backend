import express from "express";
import * as reviewController from "../controllers/reviewController";
import { verifyUser } from "../middlewares/auth";

const reviewRouter = express.Router();

/* Public */
reviewRouter.get("/:mid(\\d+)/", reviewController.readReviews);

/* Private */
reviewRouter.post("/:mid(\\d+)/", verifyUser, reviewController.createReview);
reviewRouter.delete("/:rid(\\d+)/", verifyUser, reviewController.deleteReview);
reviewRouter.put("/:rid(\\d+)/", verifyUser, reviewController.updateReview);

export default reviewRouter;
