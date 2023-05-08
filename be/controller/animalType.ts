import { Request, Response } from "express";
import AnimalType from "../models/animalType";


const getAnimalType = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const animalType = await AnimalType.findById( {_id:id} );
      res.status(200).json({ success: true, animalType });
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const getAllAnimalTypes = async (req:Request, res:Response) => {
    try {
      const animalType = await AnimalType.find({});
      if (!animalType) {
        res.status(200).json({ message: "animalType hooson baina." });
      }
      res.status(200).json({ message: "amjilttai", animalType });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const createAnimalType = async (req:Request, res:Response) => {
    console.log(req.body)
    const { title } = req.body;
    if (!title) {
      res.status(400).json({ message: "Medeelliig oruulaagui baina" });
    }
    try {
      const animalType = await AnimalType.create(req.body);
      res.status(201).json({ message: "amjilttai", animalType });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const updateAnimalType = async (req:Request, res:Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        message: `${id} - tai animalType baihgueee`,
      });
    }
    try {
      const animalType = await AnimalType.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!animalType) {
        res.status(400).json({ message: `${id} - олдохгүй байна.` });
      }
      res.status(201).json({
        message: `${id} - tai animalTypeiin medeelel amjilttai soligdloo`,
        animalType,
      });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const deleteAnimalType = async (req:Request, res:Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        message: `${id} - tai animalType oldsongui`,
      });
    }
    try {
      const animalType = await AnimalType.findByIdAndDelete(id);
      res.status(201).json({ message: `${id} - tai animalType ustlaa`, animalType });
    } catch (error) {
        console.log("ERROR", error);
    }
  };


export { getAnimalType,getAllAnimalTypes,deleteAnimalType,updateAnimalType,createAnimalType };