"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = exports.updateUser = exports.deleteUser = exports.getAllUsers = exports.getUser = exports.removeShoppingProduct = exports.addShoppingProduct = exports.getShoppingProduct = exports.removeFavAnimal = exports.addFavAnimal = exports.getFavAnimal = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || "";
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_1.default.findById({ _id: id });
        res.status(200).json({ success: true, user });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getUser = getUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.find({});
        if (!user) {
            res.status(200).json({ message: `хэрэглэгчийн мэдээлэл хоосон байна.` });
        }
        res.status(200).json({ message: "хэрэглэгчид олдлоо`", user });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.getAllUsers = getAllUsers;
// const createUser = async (req: Request, res: Response) => {
//   const { name, email, password, role, phone } = req.body;
//   if (name || email || password || role || phone) {
//     res.status(400).json({ message: "Medeelliig buren oruulna uu" });
//   }
//   try {
//     const user = await User.create(req.body);
//     res.status(201).json({ message: "amjilttai", user });
//   } catch (error) {
//     console.log("ERROR", error);
//   }
// };
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password: plainTextPassword, profileImg } = req.body;
    if (!name || typeof name !== "string") {
        return res.json({ status: "error", error: "invalid username" });
    }
    if (!plainTextPassword || typeof plainTextPassword !== "string") {
        return res.json({ status: "error", error: "invalid password" });
    }
    if (plainTextPassword.length < 7) {
        return res.json({
            status: "error",
            error: "password should be atleast 8 characters",
        });
    }
    const password = bcrypt_1.default.hashSync(plainTextPassword, 10);
    console.log(password);
    try {
        const user = yield user_1.default.create({ name, email, password, profileImg });
        res.status(201).json({ message: "amjilttai burtgegdlee", user });
        console.log(user, "user");
    }
    catch (error) {
        if (error.code === 11000) {
            return res
                .status(400)
                .json({ status: "error", error: "Username already in use" });
        }
        throw error;
    }
    // res.json({ status: "ok" });
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield user_1.default.findOne({ email });
    console.log(user, "user");
    // console.log(user.password);
    if (!user) {
        return res.json({ status: "error", error: "Invalid password" });
    }
    if (bcrypt_1.default.compareSync(password, String(user.password))) {
        console.log("iishee orloo");
        const token = jsonwebtoken_1.default.sign({
            id: user._id,
            username: user.name,
        }, JWT_SECRET);
        return res.json({ status: "ok", user: user, token: token });
    }
    else {
        res.status(400).json({ error: "Invalid email & password" });
    }
    //   // res.json({ status: "success", password: user.password });
    //   // console.log("user", user);
});
exports.signIn = signIn;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            message: `${id} - олдохгүй байна.`,
        });
    }
    try {
        const user = yield user_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!user) {
            res.status(400).json({ message: `${id} Ийм хэрэглэнгчийн мэдээлэл олдсонгүй` });
        }
        res.status(201).json({
            message: `Таны мэдээлэл шинэчлэгдлээ`,
            user,
        });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            message: `${id} Ийм хэрэглэнгчийн мэдээлэл олдсонгүй`,
        });
    }
    try {
        const user = yield user_1.default.findByIdAndDelete(id);
        res.status(201).json({ message: `${id} - тай хэрэглэгч устлаа`, user });
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
exports.deleteUser = deleteUser;
// Хэрэглэгч дуртай амьтныг нэмэх хасах хэсэг.
const getFavAnimal = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: `ID хоосон байна` });
    }
    try {
        const user = yield user_1.default.findById(id).populate({
            path: "favAnimal",
        });
        if (!user) {
            return res
                .status(400)
                .json({ message: `${id} ID-тэй хэрэглэгч олдсонгүй.` });
        }
        const favorites = user.favAnimal;
        res.status(200).json({
            message: `${id} oлдлоо`,
            favorites,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getFavAnimal = getFavAnimal;
const addFavAnimal = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { favoriteId } = req.body;
    if (!id) {
        return res.status(400).json({ message: `ID хоосон байна` });
    }
    try {
        const user = yield user_1.default.findById(id);
        if (!user) {
            return res
                .status(400)
                .json({ message: `${id} олдсонгүй.` });
        }
        user.favAnimal.push(favoriteId);
        yield (user === null || user === void 0 ? void 0 : user.save());
        res.status(200).json({
            message: `${id} амжилттай нэмэгдлээ.`,
            user,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.addFavAnimal = addFavAnimal;
const removeFavAnimal = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { favoriteId } = req.body;
    if (!id) {
        return res.status(400).json({ message: `ID хоосон байна` });
    }
    try {
        const user = yield user_1.default.findById(id);
        if (!user) {
            return res
                .status(400)
                .json({ message: `${id} ID-тэй хэрэглэгч олдсонгүй.` });
        }
        const idx = user.favAnimal.indexOf(favoriteId);
        if (idx < 0)
            return res.status(200).json({
                message: `${id} ID-тай мэдээлэл олдсонгүй`,
                user,
            });
        user.favAnimal.splice(idx, 1);
        yield (user === null || user === void 0 ? void 0 : user.save());
        res.status(200).json({
            message: `${id} ID-тай мэдээлэл шинэчлэгдлээ`,
            user,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.removeFavAnimal = removeFavAnimal;
// Сагсанд бараа нэмэх хасах хэсэг.
const getShoppingProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: `ID хоосон байна` });
    }
    try {
        const user = yield user_1.default.findById(id).populate({
            path: "productList",
        });
        if (!user) {
            return res
                .status(400)
                .json({ message: `${id} ID-тэй хэрэглэгч олдсонгүй.` });
        }
        const productList = user.productList;
        res.status(200).json({
            message: `${id} oлдлоо`,
            productList,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getShoppingProduct = getShoppingProduct;
const addShoppingProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { productListId } = req.body;
    if (!id) {
        return res.status(400).json({ message: `ID хоосон байна` });
    }
    try {
        const user = yield user_1.default.findById(id);
        if (!user) {
            return res
                .status(400)
                .json({ message: `${id} олдсонгүй.` });
        }
        user.productList.push(productListId);
        yield (user === null || user === void 0 ? void 0 : user.save());
        res.status(200).json({
            message: `${id} амжилттай нэмэгдлээ.`,
            user,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.addShoppingProduct = addShoppingProduct;
const removeShoppingProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { productListId } = req.body;
    if (!id) {
        return res.status(400).json({ message: `ID хоосон байна` });
    }
    try {
        const user = yield user_1.default.findById(id);
        if (!user) {
            return res
                .status(400)
                .json({ message: `${id} ID-тэй хэрэглэгч олдсонгүй.` });
        }
        const idx = user.productList.indexOf(productListId);
        if (idx < 0)
            return res.status(200).json({
                message: `${id} ID-тай мэдээлэл олдсонгүй`,
                user,
            });
        user.productList.splice(idx, 1);
        yield (user === null || user === void 0 ? void 0 : user.save());
        res.status(200).json({
            message: `${id} ID-тай мэдээлэл шинэчлэгдлээ`,
            user,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.removeShoppingProduct = removeShoppingProduct;
