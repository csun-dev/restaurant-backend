import * as reviewService from "../services/reviewService";

export const createReview = async (req, res, next) => {
  try {
    const { review } = req.body;
    const { mid } = req.params;
    const uid = req.user.id;

    if (!review) throw new Error("Key Error");

    await reviewService.createReview(review, uid, mid);

    res.status(200).json({ message: "Review Created" });
  } catch (error) {
    next(error);
  }
};

export const readReviews = async (req, res, next) => {
  try {
    const { mid } = req.params;

    const reviews = await reviewService.readReviews(mid);

    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    const { rid } = req.params;
    const uid = req.user.id;

    await reviewService.deleteReview(rid, uid);

    res.status(200).json({ message: "Delete Success" });
  } catch (error) {
    next(error);
  }
};

export const updateReview = async (req, res, next) => {
  try {
    const { review } = req.body;
    const { rid } = req.params;
    const uid = req.user.id;

    if (!review) throw new Error("Key Error");

    await reviewService.updateReview(review, rid, uid);

    res.status(200).json({ message: "Update Success" });
  } catch (error) {
    next(error);
  }
};
