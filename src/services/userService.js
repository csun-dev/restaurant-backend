import * as userDao from "../models/userDao";
import * as bcrypt from "bcrypt";

export const signup = async (username, email, password) => {
  try {
    const user = await userDao.getUserByEmail(email);
    if (user) {
      throw new Error("Email is already in use by another user");
    }else{
      const encrptedPass = bcrypt.hash(password, 12);//encrypts pass
      userDao.signUpUser(username, email, "" + encrptedPass);}//stores encrypt pass
  } catch (err) {
    throw new Error(err);
  }
};

export const login = async (email, password) => {
  try {
    const user =  await userDao.getUserByEmail(email);
    const passwordMatch = bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Wrong password");
    }

  } catch (err) {
    throw new Error("Error Login");
  }
};

export const editUsername = async (newUsername) => {
  try{
    const user = await userDao.getUserByUsername(newUsername); //gets user from username if user exist then username taken
    if (user) {
      throw new Error("Username already in use by another user");
    }else{
      userDao.editUser(newUsername);
    }
  }
  catch (err) {
    throw new Error(err);
  }
};

export const editEmail = async (newEmail) => {
  try{
    const user = await userDao.getUserByEmail(newEmail); //gets user from email if user exist then email taken
    if (user) {
      throw new Error("Email already in use by another user");
    }else{
      userDao.editUser(newEmail);
    }
  }
  catch (err) {
    throw new Error(err);
  }
};

export const editPassword = async (newPass) => {
  try{
    const encrptedPass = bcrypt(newPass, 12)
    userDao.editUser(newPass);
  }
  catch (err) {
    throw new Error(err);
  }
};


