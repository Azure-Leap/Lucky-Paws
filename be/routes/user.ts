import { Router } from "express";
import { getUser,getAllUsers,deleteUser,updateUser,createUser ,addFavoritesUser,removeFavoritesUser,getFavoritesUser } from "../controller/user";

const router = Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

// router.route("/signin").post(signin);
// router.route("/signup").post(signup);
// router.route("/changePassword/:id").put(updateUserPassword);

router.route("/favorites/:id").post(addFavoritesUser).put(removeFavoritesUser).get(getFavoritesUser);

export default router;