import { Schema, Types, model, Model } from "mongoose";
import { Product } from "../interfaces/product.interface";

const ProductSchema = new Schema<Product>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    categories: [{}],
    thumbnail: [{}],
    image: [{}],
    rating: { type: Number },
    marca: { type: Object },
    sizes: [{}],
    stock: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductModel = model("products", ProductSchema);
export default ProductModel;
