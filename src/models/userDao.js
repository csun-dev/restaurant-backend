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
  } catch {
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
export const getUserByUsername = async (username) => {
  try {
    const [user] = await AppDataSource.query(
      `
        SELECT
          id,
          username,
          email,
          password
        FROM users
        WHERE username = ?
      `,
      [username]
    );
    return user;
  } catch (err) {
    throw new Error("Something went wrong");
  }
};

export const editUser = async (user) => {
  try {
    await AppDataSource.query(
      `
        UPDATE users
        SET
          username = ?,
          email = ?,
          password = ?
        WHERE id = ?;
      `,
      [user.username, user.email, user.password, user.id]
    );
  } catch (err) {
    throw new Error("Something went wrong");
  }
};
