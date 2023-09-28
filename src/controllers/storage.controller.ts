import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { registerFile } from "../services/storage.service";
import { RequestExt } from "../interfaces/user.interface";

const postFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    const dataRegister = {
      filename: `${file?.filename}`,
      path: `${file?.path}`,
      user: `${user?.email}`,
    };

    const response = await registerFile(dataRegister);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};
export { postFile };
