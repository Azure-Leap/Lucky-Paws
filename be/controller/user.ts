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
      res.status(200).json({ message: `хэрэглэгчийн мэдээлэл хоосон байна.`});
    }
    res.status(200).json({ message: "хэрэглэгчид олдлоо`", user });
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
  const { name, email, password: plainTextPassword } = req.body;
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
    const user = await User.create({ name, email, password });
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
  console.log(user?.password);

  if (!user) {
    return res.json({ status: "error", error: "Invalid /password" });
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
    return res.json({ status: "ok", data: { user, token } });
  } else {
    res.status(400).json({ error: "Invalid email/password" });
  }
  //   // res.json({ status: "success", password: user.password });
  //   // console.log("user", user);
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} - олдохгүй байна.` ,
    });
  }
  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!user) {
      res.status(400).json({ message: `${id} Ийм хэрэглэнгчийн мэдээлэл олдсонгүй` });
    }
    res.status(201).json({
      message: `Таны мэдээлэл шинэчлэгдлээ`,
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
      message: `${id} Ийм хэрэглэнгчийн мэдээлэл олдсонгүй`,
    });
  }
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(201).json({ message: `${id} - тай хэрэглэгч устлаа`, user });
  } catch (error) {
    console.log("ERROR", error);
  }
};

// Хэрэглэгч дуртай амьтныг нэмэх хасах хэсэг.
export const getFavAnimal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const user = await User.findById(id).populate({
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
  } catch (error) {
    next(error);
  }
};

  export const addFavAnimal = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { favoriteId } = req.body;

    if (!id) {
      return res.status(400).json({ message: `ID хоосон байна` });
    }

    try {
      const user = await User.findById(id);
      if (!user) {
        return res
          .status(400)
          .json({ message: `${id} олдсонгүй.` });
      }
      user.favAnimal.push(favoriteId);
      await user?.save();

      res.status(200).json({
        message: `${id} амжилттай нэмэгдлээ.`,
        user,
      });
    } catch (error) {
      next(error);
    }
  };

  export const removeFavAnimal = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { favoriteId } = req.body;
    if (!id) {
      return res.status(400).json({ message: `ID хоосон байна` });
    }

    try {
      const user = await User.findById(id);
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
      await user?.save();
      res.status(200).json({
        message: `${id} ID-тай мэдээлэл шинэчлэгдлээ`,
        user,
      });
    } catch (error) {
      next(error);
    }
  };

  // Сагсанд бараа нэмэх хасах хэсэг.

  export const getShoppingProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: `ID хоосон байна` });
    }
    try {
      const user = await User.findById(id).populate({
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
    } catch (error) {
      next(error);
    }
  };
    export const addShoppingProduct = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      const { id } = req.params;
      const { productListId } = req.body;

      if (!id) {
        return res.status(400).json({ message: `ID хоосон байна` });
      }

      try {
        const user = await User.findById(id);
        if (!user) {
          return res
            .status(400)
            .json({ message: `${id} олдсонгүй.` });
        }
        user.productList.push(productListId);
        await user?.save();

        res.status(200).json({
          message: `${id} амжилттай нэмэгдлээ.`,
          user,
        });
      } catch (error) {
        next(error);
      }
    };

    export const removeShoppingProduct = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      const { id } = req.params;
      const { productListId } = req.body;
      if (!id) {
        return res.status(400).json({ message: `ID хоосон байна` });
      }

      try {
        const user = await User.findById(id);
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
        await user?.save();
        res.status(200).json({
          message: `${id} ID-тай мэдээлэл шинэчлэгдлээ`,
          user,
        });
      } catch (error) {
        next(error);
      }
    };

export { getUser, getAllUsers, deleteUser, updateUser, signUp, signIn };
