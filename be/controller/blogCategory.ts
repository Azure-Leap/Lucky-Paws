import { Request, Response } from "express";
import BlogCategory from "../models/blogCategories";


const getBlogCat = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const blogCategory = await BlogCategory.findById( {_id:id} );
      res.status(200).json({ success: true, blogCategory });
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const getAllBlogCats = async (req:Request, res:Response) => {
    try {
      const blogCategory = await BlogCategory.find({});
      if (!blogCategory) {
        res.status(200).json({ message: "blog hooson baina." });
      }
      res.status(200).json({ message: "amjilttai", blogCategory });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const createBlogCat = async (req:Request, res:Response) => {
    console.log(req.body)
    const { title, detail, img } = req.body;
    if (!title || !detail || !img ) {
      res.status(400).json({ message: "Medeelliig buren oruulna uu" });
    }
    try {
      const blogCategory = await BlogCategory.create(req.body);
      console.log(blogCategory)
      res.status(201).json({ message: "amjilttai", blogCategory });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const updateBlogCat = async (req:Request, res:Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        message: `${id} - tai blog baihgueee`,
      });
    }
    try {
      const blogCategory = await BlogCategory.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!blogCategory) {
        res.status(400).json({ message: `${id} - олдохгүй байна.` });
      }
      res.status(201).json({
        message: `${id} - tai blogiin medeelel amjilttai soligdloo`,
        blogCategory,
      });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const deleteBlogCat = async (req:Request, res:Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        message: `${id} - tai blog oldsongui`,
      });
    }
    try {
      const blogCategory = await BlogCategory.findByIdAndDelete(id);
      res.status(201).json({ message: `${id} - tai blog ustlaa`, blogCategory });
    } catch (error) {
        console.log("ERROR", error);
    }
  };


export { getBlogCat,getAllBlogCats,deleteBlogCat,updateBlogCat,createBlogCat };