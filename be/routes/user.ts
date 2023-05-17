import { Router } from "express";
import { getUser,getAllUsers,deleteUser,updateUser,createUser ,addFavAnimal,removeFavAnimal,getFavAnimal, addShoppingProduct, removeShoppingProduct, getShoppingProduct } from "../controller/user";

const router = Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

router.route("/favroties").post(addFavAnimal).get(getFavAnimal)
router.route("/favorites/:id").put(removeFavAnimal);
router.route("/shoppingProduct").post(addShoppingProduct).get(getShoppingProduct)
router.route("/shoppingProduct/:id").put(removeShoppingProduct);

export default router;