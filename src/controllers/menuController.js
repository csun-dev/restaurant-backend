import * as menuService from "../services/menuService";

export const readMenus = async (req, res, next) => {
  try {
    const menus = await menuService.readMenus();

    res.status(200).json(menus);
  } catch (error) {
    next(error);
  }
};

export const readMenuDetail = async (req, res, next) => {
  try {
    const { mid } = req.params;

    const menu = await menuService.readMenuDetail(mid);

    res.status(200).json(menu);
  } catch (error) {
    next(error);
  }
};
