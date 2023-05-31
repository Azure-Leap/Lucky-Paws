"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const animal_1 = require("../controller/animal");
const router = (0, express_1.Router)();
router.route("/").get(animal_1.getAllAnimals).post(animal_1.createAnimal);
// router.route("/:type").get(getFilteredAnimal);
router.route("/:id").get(animal_1.getAnimal).put(animal_1.updateAnimal).delete(animal_1.deleteAnimal);
exports.default = router;
