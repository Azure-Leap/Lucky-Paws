"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogCategory_1 = require("../controller/blogCategory");
const router = (0, express_1.Router)();
router.route("/").get(blogCategory_1.getAllBlogCats).post(blogCategory_1.createBlogCat);
router.route("/:id").get(blogCategory_1.getBlogCat).put(blogCategory_1.updateBlogCat).delete(blogCategory_1.deleteBlogCat);
exports.default = router;
