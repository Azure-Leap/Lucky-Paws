import { Router } from "express";
import { getUser,getAllUsers,deleteUser,updateUser,createUser  } from "../controller/user";

const router = Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
export default router;