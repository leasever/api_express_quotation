import { Product } from "../interfaces/product.interface";
import ProductModel from "../models/product.model";

const insertItem = async (product: Product) => {
  const response = await ProductModel.create(product);
  return response;
};

const getItems = async () => {
  const response = await ProductModel.find({});
  return response;
};

const getItem = async (id: string) => {
  const response = await ProductModel.findOne({ _id: id });
  return response;
};

const updateItem = async (id: string, data: Product) => {
  const response = await ProductModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return response;
};

const deleteItem = async (id: string) => {
  const response = await ProductModel.deleteOne({ _id: id });
  return response;
};

export { insertItem, getItems, getItem, updateItem, deleteItem };
