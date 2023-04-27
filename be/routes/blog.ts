import { Router } from "express";
import { getBlog,getAllBlogs,deleteBlog,updateBlog,createBlog  } from "../controller/blog";

const router = Router();

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").get(getBlog).put(updateBlog).delete(deleteBlog);
export default router;