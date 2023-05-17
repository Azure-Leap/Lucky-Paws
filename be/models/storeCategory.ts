import { Schema, model } from "mongoose";

export interface IStoreCategory {
  title:String;
  description:String;
}

const storeCategorySchema = new Schema({
title: {
  type: String,
  required: true,
},
description:{
    type:String,
    required:false,
}});


const StoreCategory = model("StoreCategory", storeCategorySchema);

export default StoreCategory;