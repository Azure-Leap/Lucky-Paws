import mongoose,{ Schema, model } from "mongoose";
import { IProductType } from "./productType";

interface IProduct {
  title:String;
  price:Number;
  imgList:[{src:String}];
  detail:String;
  netWeight:String;
  type:String;
  inStock:Number;
  productTypeId:{type:mongoose.Schema.Types.ObjectId},
  productType:{[key:string]:IProductType}
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
},
productType:{
  type:mongoose.Schema.Types.ObjectId,
  required:true,
  ref:"ProductType"
  },
});

const Product = model("Product", productSchema);

export default Product;