import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getItems, insertItem } from "../services/product.service";

const getProducts = async (_req: Request, res: Response) => {
  try {
    const responseItems = await getItems();
    res.send(responseItems);
  } catch (e) {
    handleHttp(res, "ERROR_GET_PRODUCTS", e);
  }
};

const getProduct = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_PRODUCT");
  }
};

const postProduct = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertItem(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_PRODUCT", e);
  }
};

const updateProduct = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_PRODUCT");
  }
};

const deleteProduct = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_PRODUCT");
  }
};

export { deleteProduct, getProduct, getProducts, postProduct, updateProduct };
