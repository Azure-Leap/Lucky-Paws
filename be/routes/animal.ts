import { Router } from "express";
import {
  getAnimal,
  getAllAnimals,
  deleteAnimal,
  updateAnimal,
  createAnimal,
  getFilteredAnimal,
} from "../controller/animal";

const router = Router();

router.route("/").get(getAllAnimals).post(createAnimal);
router.route("/:type").get(getFilteredAnimal);
router.route("/:id").get(getAnimal).put(updateAnimal).delete(deleteAnimal);
export default router;
