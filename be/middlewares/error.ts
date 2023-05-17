import { Request, Response, NextFunction } from "express";

const error = (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({ status: "Next Алдаа үүслээ", message: err.message });
};

export default error;