import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ message: "Token not found." });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.json({ message: "Authentication Error." });
      } else {
        const user = { name: decoded.name, id: decoded.userCode };
        req.user = user;
        next();
      }
    });
  }
};
