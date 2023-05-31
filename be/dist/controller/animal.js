"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilteredAnimal = exports.createAnimal = exports.updateAnimal = exports.deleteAnimal = exports.getAllAnimals = exports.getAnimal = void 0;
const animal_1 = __importDefault(require("../models/animal"));
const getAnimal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const animal = yield animal_1.default.findById({ _id: id });
        console.log(animal);
        res.status(200).json({ success: true, animal });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getAnimal = getAnimal;
const getFilteredAnimal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = req.params;
    try {
        const animals = animal_1.default.find({ animaltype: type }).populate("animaltype");
        res.status(200).json({ success1234: true, animals });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getFilteredAnimal = getFilteredAnimal;
const getAllAnimals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const animal = yield animal_1.default.find({})
            .populate("animaltype")
            .populate("publishedBy");
        if (!animal) {
            res.status(200).json({ message: "Animal hooson baina." });
        }
        res.status(200).json({ message: "amjilttai", animal });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getAllAnimals = getAllAnimals;
const createAnimal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { imgs, age, size, gender, health, location, publishedBy, animaltype } = req.body;
    if (!imgs ||
        !age ||
        !size ||
        !gender ||
        !health ||
        !location ||
        !publishedBy ||
        !animaltype) {
        res.status(400).json({ message: "Medeelliig buren oruulna uu" });
    }
    try {
        const animal = yield animal_1.default.create(req.body);
        res.status(201).json({ message: "amjilttai", animal });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.createAnimal = createAnimal;
const updateAnimal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            message: `${id} - tai Animal baihgueee`,
        });
    }
    try {
        const animal = yield animal_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!animal) {
            res.status(400).json({ message: `${id} - олдохгүй байна.` });
        }
        res.status(201).json({
            message: `${id} - tai amitnii medeelel amjilttai soligdloo`,
            animal,
        });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.updateAnimal = updateAnimal;
const deleteAnimal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            message: `${id} - tai amitnii oldsongui`,
        });
    }
    try {
        const animal = yield animal_1.default.findByIdAndDelete(id);
        res
            .status(201)
            .json({ message: `${id} - tai amitanii medeelel ustlaa`, animal });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.deleteAnimal = deleteAnimal;
