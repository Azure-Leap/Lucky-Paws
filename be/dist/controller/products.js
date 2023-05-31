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
exports.getFilteredProduct = exports.createProduct = exports.updateProduct = exports.deleteProduct = exports.getAllProducts = exports.getProduct = void 0;
const products_1 = __importDefault(require("../models/products"));
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log("ID: ", id);
        const baraa = yield products_1.default.findById({ _id: id });
        res.status(200).json({ success: true, baraa });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getProduct = getProduct;
const getFilteredProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type } = req.params;
        const product = yield products_1.default.find({ productType: type }).populate("productType", "title");
        res.status(200).json({ success123: true, product });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getFilteredProduct = getFilteredProduct;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield products_1.default.find({}).populate("productType");
        if (!product) {
            res.status(200).json({ message: "Baraa hooson baina." });
        }
        res.status(200).json({ message: "amjilttai", product });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getAllProducts = getAllProducts;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { title, detail, imgList, price } = req.body;
    if (!title || !detail || !imgList || !price) {
        res.status(400).json({ message: "Medeelliig buren oruulna uu" });
    }
    try {
        const product = yield products_1.default.create(req.body);
        console.log(product);
        res.status(201).json({ message: "amjilttai", product });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            message: `${id} - tai Baraa baihgueee`,
        });
    }
    try {
        const product = yield products_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!product) {
            res.status(400).json({ message: `${id} - олдохгүй байна.` });
        }
        res.status(201).json({
            message: `${id} - tai baraanii medeelel amjilttai soligdloo`,
            product,
        });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            message: `${id} - tai baraa oldsongui`,
        });
    }
    try {
        const product = yield products_1.default.findByIdAndDelete(id);
        res.status(201).json({ message: `${id} - tai baraa ustlaa`, product });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.deleteProduct = deleteProduct;
