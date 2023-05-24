import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "";

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById({ _id: id });
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("ERROR", error);
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const user = await User.find({});
    if (!user) {
      res.status(200).json({ message: "Baraa hooson baina." });
    }
    res.status(200).json({ message: "amjilttai", user });
  } catch (error) {
    console.log("ERROR", error);
  }
};

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
const signUp = async (req: Request, res: Response) => {
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
  const password = bcrypt.hashSync(plainTextPassword, 10);
  console.log(password);

  try {
    const user = await User.create({ name, email, password, profileImg });
    res.status(201).json({ message: "amjilttai burtgegdlee", user });
    console.log(user, "user");
  } catch (error: any) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ status: "error", error: "Username already in use" });
    }
    throw error;
  }

  // res.json({ status: "ok" });
};

const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(user, "user");
  // console.log(user.password);

  if (!user) {
    return res.json({ status: "error", error: "Invalid password" });
  }
  if (bcrypt.compareSync(password, String(user.password))) {
    console.log("iishee orloo");
    const token = jwt.sign(
      {
        id: user._id,
        username: user.name,
      },
      JWT_SECRET
    );
    return res.json({ status: "ok", user: user, token: token });
  } else {
    res.status(400).json({ error: "Invalid email & password" });
  }
  //   // res.json({ status: "success", password: user.password });
  //   // console.log("user", user);
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} - tai user obso`,
    });
  }
  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!user) {
      res.status(400).json({ message: `${id} - олдохгүй байна.` });
    }
    res.status(201).json({
      message: `${id} - tai usernii medeelel amjilttai soligdloo`,
      user,
    });
  } catch (error) {
    console.log("ERROR", error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} - tai user oldsongui`,
    });
  }
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(201).json({ message: `${id} - tai user ustlaa`, user });
  } catch (error) {
    console.log("ERROR", error);
  }
};

export { getUser, getAllUsers, deleteUser, updateUser, signUp, signIn };
