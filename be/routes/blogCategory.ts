import { Router } from "express";
import { getBlogCat,getAllBlogCats,deleteBlogCat,updateBlogCat,createBlogCat  } from "../controller/blogCategory";

const router = Router();

router.route("/").get(getAllBlogCats).post(createBlogCat);
router.route("/:id").get(getBlogCat).put(updateBlogCat).delete(deleteBlogCat);
export default router;