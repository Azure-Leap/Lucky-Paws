import { Request, Response } from "express";
import User from "../models/user";
const getUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await User.findById( {_id:id} );
      res.status(200).json({ success: true, user });
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const getAllUsers = async (req:Request, res:Response) => {
    try {
      const user = await User.find({});
      if (!user) {
        res.status(200).json({ message: "Baraa hooson baina." });
      }
      res.status(200).json({ message: "amjilttai", user });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const createUser = async (req:Request, res:Response) => {
    const { name, email,password,role,phone  } = req.body;
    if (name || email || password ||role ||phone  ) {
      res.status(400).json({ message: "Medeelliig buren oruulna uu" });
    }
    try {
      const user = await User.create(req.body);
      res.status(201).json({ message: "amjilttai", user });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const updateUser = async (req:Request, res:Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        message: `${id} - tai user obso`,
      });
    }
    try {
      const user = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!user) {
        res.status(400).json({ message: `${id} - олдохгүй байна.` });
      }
      res.status(201).json({
        message: `${id} - tai usernii medeelel amjilttai soligdloo`,
        user,
      });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const deleteUser = async (req:Request, res:Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        message: `${id} - tai user oldsongui`,
      });
    }
    try {
      const user = await User.findByIdAndDelete(id);
      res.status(201).json({ message: `${id} - tai user ustlaa`, user });
    } catch (error) {
        console.log("ERROR", error);
    }
  };


export { getUser,getAllUsers,deleteUser,updateUser,createUser };