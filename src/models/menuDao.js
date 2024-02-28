import { AppDataSource } from "../../db/dataSource";

export const readMenus = async () => {
  try {
    const menus = await AppDataSource.query(
      `
      SELECT
        menus.id,
        menus.name,
        menus.description,
        menus.price,
        menus.image_url,
        category.type
      FROM menus
      INNER JOIN category ON menus.category_id = category.id
      `
    );

    return menus;
  } catch {
    throw new Error("Something went wrong");
  }
};

export const readMenuDetail = async (mid) => {
  try {
    const [menu] = await AppDataSource.query(
      `
      SELECT
        menus.id,
        menus.name,
        menus.description,
        menus.price,
        menus.image_url,
        category.type
      FROM menus
      INNER JOIN category ON menus.category_id = category.id
      WHERE menus.id = ?`,
      [mid]
    );

    return menu;
  } catch {
    throw new Error("Something went wrong");
  }
};
