import { Request, Response, NextFunction } from "express";
import User from "../models/user";


// Хэрэглэгчийн CRUD хэсэг.

const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(400).json({ message: `${id} ID-тэй хэрэглэгч олдсонгүй.` });
    }
    res.status(200).json({ message: `${id} IDтэй хэрэглэгч олдлоо`, user });
  } catch (error) {
    next(error);
  }
};

  const getAllUsers = async (req:Request, res:Response) => {
    try {
      const user = await User.find({});
      if (!user) {
        res.status(200).json({ message: "Хэрэглэгчдийн мэдээлэл хоосон байна." });
      }
      res.status(200).json({ message: "Хэрэглэгчдийн мэдээлэл олдлоо.", user });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const createUser = async (req:Request, res:Response) => {
    const { name, email,password,role,phone  } = req.body;
    if (name || email || password ||role ||phone  ) {
      res.status(400).json({ message: "Мэдээллийг бүрэн оруулна уу" });
    }
    try {
      const user = await User.create(req.body);
      res.status(201).json({ message: "Амжилттай хадгаллаа", user });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const updateUser = async (req:Request, res:Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        message: `${id} Ийм хэрэглэнгчийн мэдээлэл олдсонгүй`,
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
        message: `Таны мэдээлэл шинэчлэгдлээ`,
        user,
      });
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  
  const deleteUser = async (req:Request, res:Response) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        message: `${id} - олдохгүй байна`,
      });
    }
    try {
      const user = await User.findByIdAndDelete(id);
      res.status(201).json({ message: `${id} хэрэглэгчийг амжилттай устагалаа`, user });
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
      path: "favorites",
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
      const favorites = user.favAnimal;
      res.status(200).json({
        message: `${id} oлдлоо`,
        favorites,
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

export { getUser,getAllUsers,deleteUser,updateUser,createUser };