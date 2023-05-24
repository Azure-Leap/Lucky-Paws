import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import cors from "cors"
import connectDB from "./config/be";
import product from "./routes/product";
import blog from "./routes/blog";
import blogCategory from "./routes/blogCategory";
import user from "./routes/user";
import card from "./routes/card";
import animal from "./routes/animal";
import animalType from "./routes/animalType";
import productType from "./routes/productType";
import storeCategory from "./routes/storeCategory";
import logger from "./middlewares/logger";
import error from "./middlewares/error";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
const { v2: cloudinary } = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
});

const upload = multer({ storage });

const app = express();

const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(logger);
app.use(error);

// app.use("/uploads", express.static("uploads"));

app.use("/user", user);
app.use("/animal", animal);
app.use("/animalType", animalType);
app.use("/productType", productType);
app.use("/storeCategory", storeCategory);
app.use("/product", product);
app.use("/blog", blog);
app.use("/card", card);
app.use("/blogCategory", blogCategory);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello Express");
});


app.post('/upload', upload.single('file'), async  (req, res) => {
  // Handle the uploaded file here
  console.log(req.file, 'File uploaded successfully');
  res.status(200).json({
    messege: "amjilttai hadgallaa.",
    file: req.file,
  });
});

// app.post("/uploads", upload.single("image"), async (req:Request, res:Response) => {
//   const result:any = await cloudinary.uploader.upload(req.file?.path)
//   res.status(200).json({
//     messege: "amjilttai hadgallaa.",
//     imgUrl: result,
//   });
// });

connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} port`);
});
