import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  getItem,
  getItems,
  insertItem,
  updateItem,
  deleteItem,
} from "../services/product.service";

const getProducts = async (_req: Request, res: Response) => {
  try {
    const response = await getItems();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_PRODUCTS", e);
  }
};

const getProduct = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getItem(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_PRODUCT", e);
  }
};

const postProduct = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertItem(body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_POST_PRODUCT", e);
  }
};

const updateProduct = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateItem(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_PRODUCT", e);
  }
};

const deleteProduct = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteItem(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_PRODUCT", e);
  }
};

export { deleteProduct, getProduct, getProducts, postProduct, updateProduct };
