import { Router } from "express";
import { getAnimalType,getAllAnimalTypes,deleteAnimalType,updateAnimalType,createAnimalType  } from "../controller/animalType";

const router = Router();

router.route("/").get(getAllAnimalTypes).post(createAnimalType);
router.route("/:id").get(getAnimalType).put(updateAnimalType).delete(deleteAnimalType);
export default router;