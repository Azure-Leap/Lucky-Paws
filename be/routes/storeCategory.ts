import { Router } from "express";
import { getStoreCategory,getAllStoreCategories,deleteStoreCategory,updateStoreCategory,createStoreCategory  } from "../controller/storeCategory";

const router = Router();

router.route("/").get(getAllStoreCategories).post(createStoreCategory);
router.route("/:id").get(getStoreCategory).put(updateStoreCategory).delete(deleteStoreCategory);
export default router;