"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const card_1 = require("../controller/card");
const router = (0, express_1.Router)();
router.route("/").get(card_1.getAllCards).post(card_1.createCard);
router.route("/:id").get(card_1.getCard).put(card_1.updateCard).delete(card_1.deleteCard);
exports.default = router;
