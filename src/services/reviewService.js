import * as reviewDao from "../models/reviewDao";
import * as menuDao from "../models/menuDao";

export const createReview = async (review, uid, mid) => {
  try {
    const menu = await menuDao.readMenuById(mid);

    if (!menu) throw new Error("Menu not exist");

    await reviewDao.createReview(review, uid, mid);
  } catch (error) {
    throw new Error(error);
  }
};

export const readReviews = async (mid) => {
  try {
    const menu = await menuDao.readMenuById(mid);

    if (!menu) throw new Error("Menu not exist");

    return await reviewDao.readReviews(mid);
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteReview = async (rid, uid) => {
  try {
    const review = await reviewDao.readRevieById(rid);

    if (!review) throw new Error("Review not exist");

    if (review.user_id !== uid) throw Error("Not allowed");

    return await reviewDao.deleteReview(rid);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateReview = async (content, rid, uid) => {
  const review = await reviewDao.readRevieById(rid);

  if (!review) throw new Error("Review not exist");

  if (review.user_id !== uid) throw Error("Not allowed");

  return await reviewDao.updateReview(content, rid);
};
