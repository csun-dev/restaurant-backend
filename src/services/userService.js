import * as userDao from "../models/userDao";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (username, email, password) => {
  try {
    const user = await userDao.getUserByEmail(email);
    if (user) {
      throw new Error("Email is already in use by another user");
    }

    const hashesPassword = await bcrypt.hash(password, 12);
    await userDao.signUpUser(username, email, hashesPassword);
  } catch (error) {
    throw new Error(error);
  }
};

export const login = async (email, password) => {
  try {
    const user = await userDao.getUserByEmail(email);

    if (!user) {
      throw new Error("User not found!");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Wrong password");
    }

    const name = user.username;
    const userCode = user.id;
    const token = jwt.sign({ name, userCode }, "1d", {
      expiresIn: "1d",
    });

    return token;
  } catch (error) {
    throw new Error(error);
  }
};
