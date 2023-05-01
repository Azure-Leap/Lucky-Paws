import dotenv from "dotenv";
dotenv.config();

import express, { Express, Request, Response } from "express";
import cors from "cors";

import connectDB from "./config/be";
import product from "./routes/product";
import blog from "./routes/blog";
import blogCategory from "./routes/blogCategory";
import user from "./routes/user"
import animal from "./routes/animal"
import animalType from "./routes/animalType"

const app = express();

const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/user", user);
app.use("/animal",animal);
app.use("/animalType",animalType);
app.use("/product", product);
app.use("/blog", blog);
app.use("/blogCategory",blogCategory)
app.get("/", (req: Request, res: Response) => {
  res.send("Hello Express");
});

app.post("/uploads", upload.single("image"), async (req:any, res:Response) => {
  const result = await cloudinary.uploader.upload(req.file.path);
  res.status(200).json({
    messege: "amjilttai hadgallaa.",
    imgUrl: result,
  });
});

connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} port`);
});
