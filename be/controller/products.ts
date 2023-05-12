import { Request, Response } from "express";
import Product from "../models/products";
const getProduct = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const baraa = await Product.findById( {_id:id} );
      res.status(200).json({ success: true, baraa });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  const getFilteredProduct = async (req: Request, res: Response) => {
    try {
      const { productType } = req.params;
      const animal = await Product.find( {productType:{$eq:productType}} );
      res.status(200).json({ success: true, animal });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  

  const getAllProducts = async (req:Request, res:Response) => {
    try {
      const product = await Product.find({}).populate("productType");
      if (!product) {
        res.status(200).json({ message: "Baraa hooson baina." });
      }
      res.status(200).json({ message: "amjilttai", product });
    } catch (error) {
        console.log("ERROR", error);
    }
  };

  
  const createProduct = async (req:Request, res:Response) => {
    console.log(req.body)
    const { title, detail, imgList, price } = req.body;
    if (!title || !detail || !imgList || !price ) {
      res.status(400).json({ message: "Medeelliig buren oruulna uu" });
    }
    try {
      const product = await Product.create(req.body);
      console.log(product)
      res.status(201).json({ message: "amjilttai", product });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const updateProduct = async (req:Request, res:Response ) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        message: `${id} - tai Baraa baihgueee`,
      });
    }
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!product) {
        res.status(400).json({ message: `${id} - олдохгүй байна.` });
      }
      res.status(201).json({
        message: `${id} - tai baraanii medeelel amjilttai soligdloo`,
        product,
      });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const deleteProduct = async (req:Request, res:Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        message: `${id} - tai baraa oldsongui`,
      });
    }
    try {
      const product = await Product.findByIdAndDelete(id);
      res.status(201).json({ message: `${id} - tai baraa ustlaa`, product });
    } catch (error) {
        console.log("ERROR", error);
    }
  };


export { getProduct,getAllProducts,deleteProduct,updateProduct,createProduct,getFilteredProduct };