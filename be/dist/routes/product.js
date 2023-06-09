"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("../controller/products");
const router = (0, express_1.Router)();
router.route("/").get(products_1.getAllProducts).post(products_1.createProduct);
// router.route("/:productType").get(getFilteredProduct);
router.route("/:id").get(products_1.getProduct).put(products_1.updateProduct).delete(products_1.deleteProduct);
router.route("/:productType").get(products_1.getFilteredProduct);
exports.default = router;
