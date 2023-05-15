import { Request, Response } from "express";
import ProductType from "../models/productType";

const getProductType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productType = await ProductType.findById({ _id: id });
    res.status(200).json({ success: true, productType });
  } catch (error) {
    console.log("ERROR", error);
  }
};

const getAllProductTypes = async (req: Request, res: Response) => {
  try {
    const productType = await ProductType.find({}).populate("storeCategory");
    if (!productType) {
      res.status(200).json({ message: "ProductType hooson baina." });
    }
    console.log("CHECK");
    res.status(200).json({ message: "amjilttai", productType });
  } catch (error) {
    console.log("ERROR", error);
  }
};

const createProductType = async (req: Request, res: Response) => {
  console.log(req.body);
  const { title, StoreCategory } = req.body;
  if (!title || !StoreCategory) {
    res.status(400).json({ message: "Medeelliig buren oruulna uu" });
  }
  try {
    const productType = await ProductType.create(req.body);
    res.status(201).json({ message: "amjilttai", productType });
  } catch (error) {
    console.log("ERROR", error);
  }
};

const updateProductType = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} - tai ProductType baihgueee`,
    });
  }
  try {
    const productType = await ProductType.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!ProductType) {
      res.status(400).json({ message: `${id} - олдохгүй байна.` });
    }
    res.status(201).json({
      message: `${id} - tai amitnii medeelel amjilttai soligdloo`,
      productType,
    });
  } catch (error) {
    console.log("ERROR", error);
  }
};

const deleteProductType = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} - tai amitnii oldsongui`,
    });
  }
  try {
    const productType = await ProductType.findByIdAndDelete(id);
    res
      .status(201)
      .json({ message: `${id} - tai amitanii medeelel ustlaa`, productType });
  } catch (error) {
    console.log("ERROR", error);
  }
};

export {
  getProductType,
  getAllProductTypes,
  deleteProductType,
  updateProductType,
  createProductType,
};
