import { Schema, model } from "mongoose";

export interface ICategory {
  title:String;
  img:String;
  detail:String;
}

const blogCategorySchema = new Schema<ICategory>({ title: {
  type: String,
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


const BlogCategory = model("BlogCategory", blogCategorySchema);

export default BlogCategory;