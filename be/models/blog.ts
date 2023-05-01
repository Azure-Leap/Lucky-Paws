import mongoose, { Schema, SchemaType, model } from "mongoose";
import {ICategory} from "./blogCategories"
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
    type: Date,
    default: Date.now, 
    required: true,
},
blogCategory:{
  type:mongoose.Schema.Types.ObjectId,
  required:true,
  ref:"BlogCategory"
  },

});


const Blog = model("Blog", blogSchema);

export default Blog;