import * as userService from "../services/userService";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      throw new Error("Missing Username or email or password!");
    }

    await userService.signup(username, email, password);

    return res.status(200).json({ message: "Success" });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Missing email or password!");
    }
    const user = await userService.login(email, password);

    res.cookie("token", user);
    return res.status(200).json({ message: "Success" });
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    return res.json({ message: "Success" });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const { name } = req.user;

    return res.json({ message: "Success", name });
  } catch (error) {
    next(error);
  }
};
