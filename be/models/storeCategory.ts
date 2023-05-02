import { Schema, model } from "mongoose";

export interface IStoreCategory {
  title:String;
  description:String;
}

const storeCategorySchema = new Schema<IStoreCategory>({
title: {
  type: String,
  required: true,
},
description:{
    type:String,
    required:true,
}});


const StoreCategory = model("StoreCategory", storeCategorySchema);

export default StoreCategory;