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
exports.createBlogCat = exports.updateBlogCat = exports.deleteBlogCat = exports.getAllBlogCats = exports.getBlogCat = void 0;
const blogCategories_1 = __importDefault(require("../models/blogCategories"));
const getBlogCat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const blogCategory = yield blogCategories_1.default.findById({ _id: id });
        res.status(200).json({ success: true, blogCategory });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getBlogCat = getBlogCat;
const getAllBlogCats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogCategory = yield blogCategories_1.default.find({});
        if (!blogCategory) {
            res.status(200).json({ message: "blog hooson baina." });
        }
        res.status(200).json({ message: "amjilttai", blogCategory });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getAllBlogCats = getAllBlogCats;
const createBlogCat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { title } = req.body;
    if (!title) {
        res.status(400).json({ message: "Medeelliig buren oruulna uu" });
    }
    try {
        const blogCategory = yield blogCategories_1.default.create(req.body);
        console.log(blogCategory);
        res.status(201).json({ message: "amjilttai", blogCategory });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.createBlogCat = createBlogCat;
const updateBlogCat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            message: `${id} - tai blog baihgueee`,
        });
    }
    try {
        const blogCategory = yield blogCategories_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!blogCategory) {
            res.status(400).json({ message: `${id} - олдохгүй байна.` });
        }
        res.status(201).json({
            message: `${id} - tai blogiin medeelel amjilttai soligdloo`,
            blogCategory,
        });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.updateBlogCat = updateBlogCat;
const deleteBlogCat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            message: `${id} - tai blog oldsongui`,
        });
    }
    try {
        const blogCategory = yield blogCategories_1.default.findByIdAndDelete(id);
        res.status(201).json({ message: `${id} - tai blog ustlaa`, blogCategory });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.deleteBlogCat = deleteBlogCat;
