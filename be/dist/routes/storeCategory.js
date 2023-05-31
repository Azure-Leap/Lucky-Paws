"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const storeCategory_1 = require("../controller/storeCategory");
const router = (0, express_1.Router)();
router.route("/").get(storeCategory_1.getAllStoreCategories).post(storeCategory_1.createStoreCategory);
router.route("/:id").get(storeCategory_1.getStoreCategory).put(storeCategory_1.updateStoreCategory).delete(storeCategory_1.deleteStoreCategory);
exports.default = router;
