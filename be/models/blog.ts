import mongoose, { Schema, SchemaType, model } from "mongoose";
import {ICategory} from "./blogCategories"
import { timeStamp } from "console";

interface IBlog {
  title:String;
  img:String;
  description:String;
  publishedBy:String;
  date:Date;
  blogCategoryId:{type: mongoose.Schema.Types.ObjectId},
  blogCategory:{[key:string]:ICategory}
}

const blogSchema = new Schema<IBlog>({
  title: {
  type: String,
  required: true,
},
img: {
  type: String,
  required: true,
},
description: {
  type: String,
  required: true
},
publishedBy:{
  type:String,
// type:mongoose.Schema.Types.ObjectId,
required:true,
// ref:"User"
},
date:{
    type:Date,
 
    required:true,
},
blogCategory:{
  type:mongoose.Schema.Types.ObjectId,
  required:true,
  ref:"BlogCategory"
  },

}, {timestamps:true} );


const Blog = model("Blog", blogSchema);

export default Blog;