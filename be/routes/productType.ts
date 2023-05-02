import { Router } from "express";
import { getProductType,getAllProductTypes,deleteProductType,updateProductType,createProductType  } from "../controller/productType";

const router = Router();

router.route("/").get(getAllProductTypes).post(createProductType);
router.route("/:id").get(getProductType).put(updateProductType).delete(deleteProductType);
export default router;