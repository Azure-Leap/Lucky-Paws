"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productType_1 = require("../controller/productType");
const router = (0, express_1.Router)();
router.route("/").get(productType_1.getAllProductTypes).post(productType_1.createProductType);
router.route("/:id").get(productType_1.getProductType).put(productType_1.updateProductType).delete(productType_1.deleteProductType);
exports.default = router;
