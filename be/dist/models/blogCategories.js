"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blogCategorySchema = new mongoose_1.Schema({ title: {
        type: String,
        required: true,
    } });
const BlogCategory = (0, mongoose_1.model)("BlogCategory", blogCategorySchema);
exports.default = BlogCategory;
