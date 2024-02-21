import express from "express";
import morgan from "morgan";
import router from "./routes";
import cors from "cors";
import cookieParser from "cookie-parser";

export const initServer = () => {
  const app = express();

  app.use(morgan("dev"));
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors());
  app.use(router);

  app.use((err, req, res, next) => {
    res.status(500).send("Something went wrong");
  });

  return app;
};
