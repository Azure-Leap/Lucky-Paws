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
exports.createStoreCategory = exports.updateStoreCategory = exports.deleteStoreCategory = exports.getAllStoreCategories = exports.getStoreCategory = void 0;
const storeCategory_1 = __importDefault(require("../models/storeCategory"));
const getStoreCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const storeCategory = yield storeCategory_1.default.findById({ _id: id });
        res.status(200).json({ success: true, storeCategory });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getStoreCategory = getStoreCategory;
const getAllStoreCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const storeCategory = yield storeCategory_1.default.find({});
        if (!storeCategory) {
            res.status(200).json({ message: "StoreCategory hooson baina." });
        }
        res.status(200).json({ message: "amjilttai", storeCategory });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getAllStoreCategories = getAllStoreCategories;
const createStoreCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { title, description } = req.body;
    if (!title || !description) {
        res.status(400).json({ message: "Medeelliig buren oruulna uu" });
    }
    try {
        const storeCategory = yield storeCategory_1.default.create(req.body);
        res.status(201).json({ message: "amjilttai", storeCategory });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.createStoreCategory = createStoreCategory;
const updateStoreCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            message: `${id} - tai StoreCategory baihgueee`,
        });
    }
    try {
        const storeCategory = yield storeCategory_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!storeCategory) {
            res.status(400).json({ message: `${id} - олдохгүй байна.` });
        }
        res.status(201).json({
            message: `${id} - tai amitnii medeelel amjilttai soligdloo`,
            storeCategory,
        });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.updateStoreCategory = updateStoreCategory;
const deleteStoreCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            message: `${id} - tai amitnii oldsongui`,
        });
    }
    try {
        const storeCategory = yield storeCategory_1.default.findByIdAndDelete(id);
        res
            .status(201)
            .json({ message: `${id} - tai amitanii medeelel ustlaa`, storeCategory });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.deleteStoreCategory = deleteStoreCategory;
