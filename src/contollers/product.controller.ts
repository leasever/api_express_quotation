import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getProducts = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_PRODUCTS");
  }
};

const getProduct = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_PRODUCT");
  }
};

const insertProduct = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (e) {
    handleHttp(res, "ERROR_INSERT_PRODUCT");
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

export { deleteProduct, getProduct, getProducts, insertProduct, updateProduct };
