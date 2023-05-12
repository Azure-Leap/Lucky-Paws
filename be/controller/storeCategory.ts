import { Request, Response } from "express";
import StoreCategory from "../models/storeCategory";

const getStoreCategory = async (req: Request, res: Response) => {
<<<<<<< HEAD
    try {
      const { id } = req.params;
      const storeCategory = await StoreCategory.findById( {_id:id} );
      res.status(200).json({ success: true, storeCategory });
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const getAllStoreCategories = async (req:Request, res:Response) => {
    try {
      const storeCategory = await StoreCategory.find({});
      if (!storeCategory) {
        res.status(200).json({ message: "StoreCategory hooson baina." });
      }
      res.status(200).json({ message: "amjilttai", storeCategory });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const createStoreCategory = async (req:Request, res:Response) => {
    console.log(req.body)
    const { title} = req.body;
    if (!title) {
      res.status(400).json({ message: "Medeelliig buren oruulna uu" });
    }
    try {
      const storeCategory = await StoreCategory.create(req.body);
      res.status(201).json({ message: "amjilttai", storeCategory});
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const updateStoreCategory = async (req:Request, res:Response) => {
=======
  try {
>>>>>>> master
    const { id } = req.params;
    const storeCategory = await StoreCategory.findById({ _id: id });
    res.status(200).json({ success: true, storeCategory });
  } catch (error) {
    console.log("ERROR", error);
  }
};

const getAllStoreCategories = async (req: Request, res: Response) => {
  try {
    const storeCategory = await StoreCategory.find({});
    if (!storeCategory) {
      res.status(200).json({ message: "StoreCategory hooson baina." });
    }
    res.status(200).json({ message: "amjilttai", storeCategory });
  } catch (error) {
    console.log("ERROR", error);
  }
};

const createStoreCategory = async (req: Request, res: Response) => {
  console.log(req.body);
  const { title, description } = req.body;
  if (!title || !description) {
    res.status(400).json({ message: "Medeelliig buren oruulna uu" });
  }
  try {
    const storeCategory = await StoreCategory.create(req.body);
    res.status(201).json({ message: "amjilttai", storeCategory });
  } catch (error) {
    console.log("ERROR", error);
  }
};

const updateStoreCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} - tai StoreCategory baihgueee`,
    });
  }
  try {
    const storeCategory = await StoreCategory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!storeCategory) {
      res.status(400).json({ message: `${id} - олдохгүй байна.` });
    }
    res.status(201).json({
      message: `${id} - tai amitnii medeelel amjilttai soligdloo`,
      storeCategory,
    });
  } catch (error) {
    console.log("ERROR", error);
  }
};

const deleteStoreCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} - tai amitnii oldsongui`,
    });
  }
  try {
    const storeCategory = await StoreCategory.findByIdAndDelete(id);
    res
      .status(201)
      .json({ message: `${id} - tai amitanii medeelel ustlaa`, storeCategory });
  } catch (error) {
    console.log("ERROR", error);
  }
};

export {
  getStoreCategory,
  getAllStoreCategories,
  deleteStoreCategory,
  updateStoreCategory,
  createStoreCategory,
};
