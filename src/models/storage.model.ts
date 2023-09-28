import { Schema, Types, model, Model } from "mongoose";
import { Storage } from "../interfaces/storage.interface";

const StorageSchema = new Schema<Storage>(
  {
    filename: { type: String },
    user: { type: String },
    path: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const StorageModel = model("storage", StorageSchema);
export default StorageModel;
