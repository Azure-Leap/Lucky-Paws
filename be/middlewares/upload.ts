const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req:Request, file:File, cb:any) => {
      cb(null, "./uploads");
    },
    filename: (req:Request, file:any, cb:any) => {
      const fileExt = path.extname(file.originalname);
      const filename = Math.floor(Math.random() * 1_000_000).toString(16);
      cb(null, `${filename}${fileExt}`);
    },
  });
const upload = multer({ storage: storage });

module.exports = upload;