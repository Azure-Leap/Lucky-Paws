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
exports.createProductType = exports.updateProductType = exports.deleteProductType = exports.getAllProductTypes = exports.getProductType = void 0;
const productType_1 = __importDefault(require("../models/productType"));
const getProductType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const productType = yield productType_1.default.findById({ _id: id });
        res.status(200).json({ success: true, productType });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getProductType = getProductType;
const getAllProductTypes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productType = yield productType_1.default.find({}).populate("storeCategory");
        if (!productType) {
            res.status(200).json({ message: "ProductType hooson baina." });
        }
        console.log("CHECK");
        res.status(200).json({ message: "amjilttai", productType });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getAllProductTypes = getAllProductTypes;
const createProductType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { title, StoreCategory } = req.body;
    if (!title || !StoreCategory) {
        res.status(400).json({ message: "Medeelliig buren oruulna uu" });
    }
    try {
        const productType = yield productType_1.default.create(req.body);
        res.status(201).json({ message: "amjilttai", productType });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.createProductType = createProductType;
const updateProductType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            message: `${id} - tai ProductType baihgueee`,
        });
    }
    try {
        const productType = yield productType_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!productType_1.default) {
            res.status(400).json({ message: `${id} - олдохгүй байна.` });
        }
        res.status(201).json({
            message: `${id} - tai amitnii medeelel amjilttai soligdloo`,
            productType,
        });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.updateProductType = updateProductType;
const deleteProductType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            message: `${id} - tai amitnii oldsongui`,
        });
    }
    try {
        const productType = yield productType_1.default.findByIdAndDelete(id);
        res
            .status(201)
            .json({ message: `${id} - tai amitanii medeelel ustlaa`, productType });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.deleteProductType = deleteProductType;
