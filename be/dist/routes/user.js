"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const user_1 = require("../controller/user");
const router = (0, express_1.Router)();
const jsonParser = body_parser_1.default.json();
router.route("/").get(user_1.getAllUsers);
router.route("/:id").get(user_1.getUser).put(user_1.updateUser).delete(user_1.deleteUser);
router.route("/signin").post(jsonParser, user_1.signIn);
router.route("/signup").post(jsonParser, user_1.signUp);
router.route("/favorites").post(user_1.addFavAnimal);
router.route("/favorites/:id").get(user_1.getFavAnimal).delete(user_1.removeFavAnimal);
router.route("/shoppingProduct").post(user_1.addShoppingProduct).get(user_1.getShoppingProduct);
router.route("/shoppingProduct/:id").put(user_1.removeShoppingProduct);
exports.default = router;
