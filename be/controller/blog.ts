import { Request, Response } from "express";
import Blog from "../models/blog";


const getBlog = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const blog = await Blog.findById( {_id:id} );
      res.status(200).json({ success: true, blog });
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const getAllBlogs = async (req:Request, res:Response) => {
    try {
      const blog = await Blog.find({}).sort({date:1}).populate("blogCategory");
      console.log(blog)
      if (!blog) {
        res.status(200).json({ message: "blog hooson baina." });
      }
      res.status(200).json({ message: "amjilttai", blog });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const createBlog = async (req:Request, res:Response) => {
    console.log(req.body)
    const { title, description, img, publishedBy,  blogCategory } = req.body;
    if (!title || !description || !img || !blogCategory || !publishedBy) {
      res.status(400).json({ message: "Medeelliig buren oruulna uu" });
    }
    try {
      const blog = await Blog.create(req.body);
      res.status(201).json({ message: "amjilttai", blog});
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const updateBlog = async (req:Request, res:Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        message: `${id} - tai blog baihgueee`,
      });
    }
    try {
      const blog = await Blog.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!blog) {
        res.status(400).json({ message: `${id} - олдохгүй байна.` });
      }
      res.status(201).json({
        message: `${id} - tai blog medeelel amjilttai soligdloo`,
        blog,
      });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const deleteBlog = async (req:Request, res:Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        message: `${id} - tai blog oldsongui`,
      });
    }
    try {
      const blog = await Blog.findByIdAndDelete(id);
      res.status(201).json({ message: `${id} - tai blog ustlaa`, blog });
    } catch (error) {
        console.log("ERROR", error);
    }
  };


export { getBlog,getAllBlogs,deleteBlog,updateBlog,createBlog };