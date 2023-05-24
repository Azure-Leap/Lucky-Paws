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

const blogSchema = new Schema({
  title: {
  type: String,
  required: true,
},
imgList: [{
  type: String,
  required: true,
}],
description: {
  type: String,
  required: true
},
publishedBy:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},
date:{
    type: Date,
    default: Date.now, 
    // required: true,
},
blogCategory:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"BlogCategory"
  },

});


const Blog = model("Blog", blogSchema);

export default Blog;