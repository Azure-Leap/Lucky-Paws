import mongoose, { Schema, model } from "mongoose";
import { IStoreCategory } from "./storeCategory";

export interface IProductType {
  title:String;
  storeCategoryId:{type: mongoose.Schema.Types.ObjectId},
  storeCategory:{[key:string]:IStoreCategory}
}

const productTypeSchema = new Schema<IProductType>({
  title: {
  type: String,
  required: true,
},
storeCategory:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"StoreCategory"
    },
});


const ProductType = model("ProductType", productTypeSchema);

export default ProductType;