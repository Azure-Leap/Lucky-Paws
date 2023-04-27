import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import cors from "cors";

import connectDB from "./config/be";
import product from "./routes/product";
import blog from "./routes/blog";
import blogCategory from "./routes/blogCategory";


const app = express();


const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());

app.use("/product", product);
app.use("/blog", blog);
app.use("/blogCategory",blogCategory)
app.get("/", (req: Request, res: Response) => {
  res.send("Hello Express");
});

connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} port`);
});
