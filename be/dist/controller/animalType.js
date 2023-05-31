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
exports.createAnimalType = exports.updateAnimalType = exports.deleteAnimalType = exports.getAllAnimalTypes = exports.getAnimalType = void 0;
const animalType_1 = __importDefault(require("../models/animalType"));
const getAnimalType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const animalType = yield animalType_1.default.findById({ _id: id });
        res.status(200).json({ success: true, animalType });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getAnimalType = getAnimalType;
const getAllAnimalTypes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const animalType = yield animalType_1.default.find({});
        if (!animalType) {
            res.status(200).json({ message: "animalType hooson baina." });
        }
        res.status(200).json({ message: "amjilttai", animalType });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getAllAnimalTypes = getAllAnimalTypes;
const createAnimalType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { title } = req.body;
    if (!title) {
        res.status(400).json({ message: "Medeelliig oruulaagui baina" });
    }
    try {
        const animalType = yield animalType_1.default.create(req.body);
        res.status(201).json({ message: "amjilttai", animalType });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.createAnimalType = createAnimalType;
const updateAnimalType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            message: `${id} - tai animalType baihgueee`,
        });
    }
    try {
        const animalType = yield animalType_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!animalType) {
            res.status(400).json({ message: `${id} - олдохгүй байна.` });
        }
        res.status(201).json({
            message: `${id} - tai animalTypeiin medeelel amjilttai soligdloo`,
            animalType,
        });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.updateAnimalType = updateAnimalType;
const deleteAnimalType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            message: `${id} - tai animalType oldsongui`,
        });
    }
    try {
        const animalType = yield animalType_1.default.findByIdAndDelete(id);
        res.status(201).json({ message: `${id} - tai animalType ustlaa`, animalType });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.deleteAnimalType = deleteAnimalType;
