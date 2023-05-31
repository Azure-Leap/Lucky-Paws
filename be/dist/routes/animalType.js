"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const animalType_1 = require("../controller/animalType");
const router = (0, express_1.Router)();
router.route("/").get(animalType_1.getAllAnimalTypes).post(animalType_1.createAnimalType);
router.route("/:id").get(animalType_1.getAnimalType).put(animalType_1.updateAnimalType).delete(animalType_1.deleteAnimalType);
exports.default = router;
