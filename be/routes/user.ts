import { Router } from "express";
import bodyParser from "body-parser";

import {
  getUser,
  getAllUsers,
  deleteUser,
  updateUser,
  signUp,
  signIn,
  getFavAnimal,
  addFavAnimal,
  removeFavAnimal,
  addShoppingProduct, 
  removeShoppingProduct, 
  getShoppingProduct
} from "../controller/user";

const router = Router();
const jsonParser = bodyParser.json();

router.route("/").get(getAllUsers);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
router.route("/signin").post(jsonParser, signIn);
router.route("/signup").post(jsonParser, signUp);

router.route("/favorites").post(addFavAnimal)
router.route("/favorites/:id").get(getFavAnimal).delete(removeFavAnimal);
router.route("/shoppingProduct").post(addShoppingProduct).get(getShoppingProduct)
router.route("/shoppingProduct/:id").put(removeShoppingProduct);

export default router;
