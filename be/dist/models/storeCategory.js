"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const storeCategorySchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    }
});
const StoreCategory = (0, mongoose_1.model)("StoreCategory", storeCategorySchema);
exports.default = StoreCategory;
