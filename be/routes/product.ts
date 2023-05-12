import { Router } from "express";
import { getProduct,getAllProducts,deleteProduct,updateProduct,createProduct, getFilteredProduct  } from "../controller/products";

const router = Router();

router.route("/").get(getAllProducts).post(createProduct);
// router.route("/:productType").get(getFilteredProduct);
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);
export default router;