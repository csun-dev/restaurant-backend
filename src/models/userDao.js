import { Timestamp } from "typeorm";
import { AppDataSource } from "../../db/dataSource";

export const signUpUser = async (username, email, password) => {
  try {
    console.log("before signUpUser");
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
    throw new Error("Error inserting user");
  }
};

//for login checking
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
    throw new Error(err);
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
    throw new Error(err);
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
    throw new Error(err);
  }
};