import { Request, Response } from "express";
import Card from "../models/card";

const getCard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const card = await Card.findById({ _id: id });
    res.status(200).json({ success: true, card });
  } catch (error) {
    console.log("ERROR", error);
  }
};
const getAllCards = async (req: Request, res: Response) => {
  try {
    const card = await Card.find({})
    if (!card) {
      res.status(200).json({ message: "Card hooson baina." });
    }
    res.status(200).json({ message: "amjilttai", card });
  } catch (error) {
    console.log("ERROR", error);
  }
};

const createCard = async (req: Request, res: Response) => {
  console.log(req.body);
  const { user_Id } =
    req.body;
  if (
    !user_Id
  ) {
    res.status(400).json({ message: "Medeelliig buren oruulna uu" });
  }
  try {
    const card = await Card.create(req.body);
    res.status(201).json({ message: "amjilttai", card });
  } catch (error) {
    console.log("ERROR", error);
  }
};

const updateCard = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} - tai Card baihgueee`,
    });
  }
  try {
    const card = await Card.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!card) {
      res.status(400).json({ message: `${id} - олдохгүй байна.` });
    }
    res.status(201).json({
      message: `${id} - tai amitnii medeelel amjilttai soligdloo`,
      card,
    });
  } catch (error) {
    console.log("ERROR", error);
  }
};

const deleteCard = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} - tai amitnii oldsongui`,
    });
  }
  try {
    const card = await Card.findByIdAndDelete(id);
    res
      .status(201)
      .json({ message: `${id} - tai amitanii medeelel ustlaa`, card });
  } catch (error) {
    console.log("ERROR", error);
  }
};

export {
  getCard,
  getAllCards,
  deleteCard,
  updateCard,
  createCard
};
