import { Schema, model } from "mongoose";

interface IProduct {
  title:String;
  price:Number;
  img:String;
  detail:String;
}

const productSchema = new Schema<IProduct>({ title: {
  type: String,
  required: true,
},
price: {
  type: Number,
  required: true,
},
img: {
  type: String,
  required: true,
},
detail: {
  type: String,
  required: true,
}});

const Product = model("Product", productSchema);

export default Product;