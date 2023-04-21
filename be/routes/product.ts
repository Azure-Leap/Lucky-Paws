import { Router } from "express";
import { getProduct,getAllProducts,deleteProduct,updateProduct,createProduct  } from "../controller/products";

const router = Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);
export default router;