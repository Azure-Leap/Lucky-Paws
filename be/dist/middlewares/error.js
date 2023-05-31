"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error = (err, req, res, next) => {
    res.status(400).json({ status: "Next Алдаа үүслээ", message: err.message });
};
exports.default = error;
