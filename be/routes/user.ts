import { Router } from "express";
import bodyParser from "body-parser";

import {
  getUser,
  getAllUsers,
  deleteUser,
  updateUser,
  signUp,
  signIn,
} from "../controller/user";

const router = Router();
const jsonParser = bodyParser.json();

router.route("/").get(getAllUsers);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
router.route("/signin").post(jsonParser, signIn);
router.route("/signup").post(jsonParser, signUp);

export default router;
