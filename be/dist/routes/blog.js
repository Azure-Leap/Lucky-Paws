"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_1 = require("../controller/blog");
const router = (0, express_1.Router)();
router.route("/").get(blog_1.getAllBlogs).post(blog_1.createBlog);
router.route("/:id").get(blog_1.getBlog).put(blog_1.updateBlog).delete(blog_1.deleteBlog);
exports.default = router;
