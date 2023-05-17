import mongoose,{ Schema, model } from "mongoose";
import { IProductType } from "./productType";

 export interface IProduct {
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

const productSchema = new Schema({ 
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
},
type:{
  type:String,
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