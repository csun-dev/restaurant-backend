import { AppDataSource } from "../../db/dataSource";

export const signUpUser = async (username, email, password) => {
  try {
    await AppDataSource.query(
      `
        INSERT INTO users (
          username,
          email,
          password
        ) VALUES (?, ?, ?);
        `,
      [username, email, password]
    );
  } catch (err) {
    throw new Error("Something went wrong");
  }
};

export const getUserByEmail = async (email) => {
  try {
    const [user] = await AppDataSource.query(
      `
        SELECT
          id,
          username,
          email,
          password
        FROM users
        WHERE email = ?
      `,
      [email]
    );
    return user;
  } catch (err) {
    throw new Error("Something went wrong");
  }
};
