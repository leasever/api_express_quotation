import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage.model";

const registerFile = async ({ filename, user, path }: Storage) => {
  const response = await StorageModel.create({ filename, user, path });
  return response;
};

export { registerFile };
