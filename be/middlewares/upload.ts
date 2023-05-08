import multer from "multer";
import path from "path";
import { Request } from "express";

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const storage = multer.diskStorage({
    destination: (req:Request, file:Express.Multer.File, cb:DestinationCallback) => {
      cb(null, "./uploads");
    },
    filename: (req:Request, file:Express.Multer.File, cb:FileNameCallback) => {
      const fileExt = path.extname(file.originalname);
      const filename = Math.floor(Math.random() * 1_000_000).toString(16);
      cb(null, `${filename}${fileExt}`);
    },
  });
export const upload = multer({ storage: storage });
