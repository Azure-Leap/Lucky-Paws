import { Request, Response } from "express";
import Animal from "../models/animal";
import animalType from "../models/animalType";

const getAnimal = async (req: Request, res: Response) => {
<<<<<<< HEAD
    try {
      const { id } = req.params;
      const animal = await Animal.findById( {_id:id} );
      res.status(200).json({ success: true, animal });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  const getFilteredAnimal = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const animal = await Animal.find( {animaltype:id} );
      res.status(200).json({ success: true, animal });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  

  const getAllAnimals = async (req:Request, res:Response) => {
    try {
      const animal = await Animal.find({}).populate("animaltype").populate("publishedBy");
      if (!animal) {
        res.status(200).json({ message: "Animal hooson baina." });
      }
      res.status(200).json({ message: "amjilttai", animal });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const createAnimal = async (req:Request, res:Response) => {
    console.log(req.body)
    const {  name,img, age,size,gender,health,location, publishedBy,  animalType } = req.body;
    if (name! || !img|| !age || !size || !gender || !health || !location
        || !publishedBy||  !animalType) {
      res.status(400).json({ message: "Medeelliig buren oruulna uu" });
    }
    try {
      const animal = await Animal.create(req.body);
      res.status(201).json({ message: "amjilttai", animal});
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const updateAnimal = async (req:Request, res:Response) => {
=======
  try {
>>>>>>> master
    const { id } = req.params;
    const animal = await Animal.findById({ _id: id });
    res.status(200).json({ success: true, animal });
  } catch (error) {
    console.log("ERROR", error);
  }
};
const getFilteredAnimal = async (req: Request, res: Response) => {
  const { type } = req.params;
  try {
    const animals = Animal.find({ animaltype: type }).populate(
      "animaltype",
      "title"
    );

    res.status(200).json({ success1234: true, animals });
  } catch (error) {
    console.log("ERROR", error);
  }
};

const getAllAnimals = async (req: Request, res: Response) => {
  try {
    const animal = await Animal.find({})
      .populate("animaltype")
      .populate("publishedBy");
    if (!animal) {
      res.status(200).json({ message: "Animal hooson baina." });
    }
    res.status(200).json({ message: "amjilttai", animal });
  } catch (error) {
    console.log("ERROR", error);
  }
};

const createAnimal = async (req: Request, res: Response) => {
  console.log(req.body);
  const { img, age, size, gender, health, location, publishedBy, AnimalType } =
    req.body;
  if (
    !img ||
    !age ||
    !size ||
    !gender ||
    !health ||
    !location ||
    !publishedBy ||
    !AnimalType
  ) {
    res.status(400).json({ message: "Medeelliig buren oruulna uu" });
  }
  try {
    const animal = await Animal.create(req.body);
    res.status(201).json({ message: "amjilttai", animal });
  } catch (error) {
    console.log("ERROR", error);
  }
};

const updateAnimal = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} - tai Animal baihgueee`,
    });
  }
  try {
    const animal = await Animal.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!animal) {
      res.status(400).json({ message: `${id} - олдохгүй байна.` });
    }
    res.status(201).json({
      message: `${id} - tai amitnii medeelel amjilttai soligdloo`,
      animal,
    });
  } catch (error) {
    console.log("ERROR", error);
  }
};

const deleteAnimal = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} - tai amitnii oldsongui`,
    });
  }
  try {
    const animal = await Animal.findByIdAndDelete(id);
    res
      .status(201)
      .json({ message: `${id} - tai amitanii medeelel ustlaa`, animal });
  } catch (error) {
    console.log("ERROR", error);
  }
};

export {
  getAnimal,
  getAllAnimals,
  deleteAnimal,
  updateAnimal,
  createAnimal,
  getFilteredAnimal,
};
