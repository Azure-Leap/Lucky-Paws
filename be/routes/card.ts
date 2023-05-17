import { Router } from "express";
import {
  getCard,
  getAllCards,
  deleteCard,
  updateCard,
  createCard,
} from "../controller/card";

const router = Router();

router.route("/").get(getAllCards).post(createCard);
router.route("/:id").get(getCard).put(updateCard).delete(deleteCard);
export default router;