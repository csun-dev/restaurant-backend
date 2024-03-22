import { AppDataSource } from "../../db/dataSource";

export const createReview = async (review, uid, mid) => {
  try {
    await AppDataSource.query(
      `
      INSERT INTO reviews(
        review,
        user_id,
        menu_id
        ) VALUES (?, ?, ?)`,
      [review, uid, mid]
    );
  } catch {
    throw new Error("Something went wrong");
  }
};

export const readReviews = async (mid) => {
  try {
    return await AppDataSource.query(
      `
        SELECT
            reviews.id,
            reviews.review,
            reviews.menu_id,
            users.username
        FROM reviews
        INNER JOIN users ON (reviews.menu_id = ${mid}
        AND users.id = reviews.user_id)`
    );
  } catch {
    throw new Error("Something went wrong");
  }
};

export const readRevieById = async (rid) => {
  try {
    const [review] = await AppDataSource.query(
      `
        SELECT
            id,
            review,
            user_id,
            menu_id
        FROM reviews
        WHERE id = ?`,
      [rid]
    );

    return review;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export const deleteReview = async (rid) => {
  try {
    await AppDataSource.query(
      `
        DELETE FROM reviews
        WHERE reviews.id = ${rid}
      `
    );
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export const updateReview = async (review, rid) => {
  try {
    await AppDataSource.query(
      `
            UPDATE reviews
                SET review = ?
            WHERE id = ${rid}
        `,
      [review, rid]
    );
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
