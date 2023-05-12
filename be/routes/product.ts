import { Router } from "express";
import {
  getProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  getFilteredProduct,
} from "../controller/products";

const router = Router();

router.route("/").get(getAllProducts).post(createProduct);
<<<<<<< HEAD
// router.route("/:productType").get(getFilteredProduct);
=======
>>>>>>> master
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);
router.route("/:productType").get(getFilteredProduct);
export default router;
