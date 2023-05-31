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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const be_1 = __importDefault(require("./config/be"));
const product_1 = __importDefault(require("./routes/product"));
const blog_1 = __importDefault(require("./routes/blog"));
const blogCategory_1 = __importDefault(require("./routes/blogCategory"));
const user_1 = __importDefault(require("./routes/user"));
const card_1 = __importDefault(require("./routes/card"));
const animal_1 = __importDefault(require("./routes/animal"));
const animalType_1 = __importDefault(require("./routes/animalType"));
const productType_1 = __importDefault(require("./routes/productType"));
const storeCategory_1 = __importDefault(require("./routes/storeCategory"));
const logger_1 = __importDefault(require("./middlewares/logger"));
const error_1 = __importDefault(require("./middlewares/error"));
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const multer_1 = __importDefault(require("multer"));
const { v2: cloudinary } = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary,
});
const upload = (0, multer_1.default)({ storage });
const app = (0, express_1.default)();
const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(logger_1.default);
app.use(error_1.default);
// app.use("/uploads", express.static("uploads"));
app.use("/user", user_1.default);
app.use("/animal", animal_1.default);
app.use("/animalType", animalType_1.default);
app.use("/productType", productType_1.default);
app.use("/storeCategory", storeCategory_1.default);
app.use("/product", product_1.default);
app.use("/blog", blog_1.default);
app.use("/card", card_1.default);
app.use("/blogCategory", blogCategory_1.default);
app.get("/", (req, res) => {
    res.send("Hello Express");
});
app.post('/upload', upload.single('file'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Handle the uploaded file here
    console.log(req.file, 'File uploaded successfully');
    res.status(200).json({
        messege: "amjilttai hadgallaa.",
        file: req.file,
    });
}));
// app.post("/uploads", upload.single("image"), async (req:Request, res:Response) => {
//   const result:any = await cloudinary.uploader.upload(req.file?.path)
//   res.status(200).json({
//     messege: "amjilttai hadgallaa.",
//     imgUrl: result,
//   });
// });
(0, be_1.default)(MONGO_URI);
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} port`);
});
