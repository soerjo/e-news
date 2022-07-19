import { GetCategoriesResponse } from "../types";
import { handleSepecialChar } from "./handleSpecialChar";

export function categoriesByName(
  categories: number,
  number_categories: GetCategoriesResponse[]
) {
  const categorieName = number_categories.find(
    categorie => categorie.id === categories
  )?.name;
  if (categorieName) return handleSepecialChar(categorieName);
}
