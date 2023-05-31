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
exports.createBlog = exports.updateBlog = exports.deleteBlog = exports.getAllBlogs = exports.getBlog = void 0;
const blog_1 = __importDefault(require("../models/blog"));
const getBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const blog = yield blog_1.default.findById({ _id: id });
        res.status(200).json({ success: true, blog });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getBlog = getBlog;
const getAllBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blog_1.default.find({}).sort({ date: 1 }).populate("blogCategory").populate("publishedBy");
        console.log(blog);
        if (!blog) {
            res.status(200).json({ message: "blog hooson baina." });
        }
        res.status(200).json({ message: "amjilttai", blog });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getAllBlogs = getAllBlogs;
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { title, description, imgList } = req.body;
    if (!title || !description || !imgList) {
        res.status(400).json({ message: "Medeelliig buren oruulna uu", title, description, imgList });
    }
    try {
        const blog = yield blog_1.default.create(req.body);
        res.status(201).json({ message: "amjilttai", blog });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.createBlog = createBlog;
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            message: `${id} - tai blog baihgueee`,
        });
    }
    try {
        const blog = yield blog_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!blog) {
            res.status(400).json({ message: `${id} - олдохгүй байна.` });
        }
        res.status(201).json({
            message: `${id} - tai blog medeelel amjilttai soligdloo`,
            blog,
        });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.updateBlog = updateBlog;
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            message: `${id} - tai blog oldsongui`,
        });
    }
    try {
        const blog = yield blog_1.default.findByIdAndDelete(id);
        res.status(201).json({ message: `${id} - tai blog ustlaa`, blog });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.deleteBlog = deleteBlog;
