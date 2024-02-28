import * as menuDao from "../models/menuDao";

export const readMenus = async () => {
  try {
    return await menuDao.readMenus();
  } catch {
    throw new Error("Something went wrong");
  }
};

export const readMenuDetail = async (mid) => {
  try {
    return await menuDao.readMenuDetail(mid);
  } catch {
    throw new Error("Something went wrong");
  }
};
