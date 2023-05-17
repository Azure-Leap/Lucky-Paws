import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    "logger",
    `${req.method} ${req.protocol}://${req.hostname}${req.originalUrl}`
  );
  next();
};

export default logger;