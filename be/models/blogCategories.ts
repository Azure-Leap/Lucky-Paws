import { Schema, model } from "mongoose";

export interface ICategory {
  title:String;
}

const blogCategorySchema = new Schema<ICategory>({ title: {
  type: String,
  required: true,
}});


const BlogCategory = model("BlogCategory", blogCategorySchema);

export default BlogCategory;