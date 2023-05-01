import { Schema, model,Document } from "mongoose";

interface IProduct {
  title:String;
  price:Number;
  imgList:[{src:String}];
  detail:String;
  netWeight:String;
  type:String;
  inStock:Number;
}

const productSchema = new Schema<IProduct>({ 
title: {
  type: String,
  required: true,
},
price: {
  type: Number,
  required: true,
},
imgList: [{
  src: {type:String, required:true}
}],
detail: {
  type: String,
  required: true,
},
netWeight:{
  type:String,
  required:true,
},
type:{
  type:String,
  required:true,
},
inStock:{
  type:Number,
  required:true,
}
});

const Product = model("Product", productSchema);

export default Product;