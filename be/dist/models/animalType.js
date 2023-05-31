"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const animalTypeSchema = new mongoose_1.Schema({
    title: {
        type: String,
        enum: ["Dog", "Cat"],
        required: true
    }
});
const AnimalType = (0, mongoose_1.model)("AnimalType", animalTypeSchema);
exports.default = AnimalType;
