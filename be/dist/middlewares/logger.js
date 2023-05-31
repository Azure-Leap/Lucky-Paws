"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    console.log("logger", `${req.method} ${req.protocol}://${req.hostname}${req.originalUrl}`);
    next();
};
exports.default = logger;
