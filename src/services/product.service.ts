import { Product } from "../interfaces/product.interface";
import ProductModel from "../models/product.model";

const insertItem = async (product: Product) => {
  const responseInsert = await ProductModel.create(product);
  return responseInsert;
};

const getItems = async () => {
  const responseItems = await ProductModel.find({});
  return responseItems;
};

export { insertItem, getItems };
