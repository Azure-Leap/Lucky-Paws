import mongoose,{ Schema, model } from "mongoose";
import { IAnimal } from "./animal";
import { IProduct } from "./products";

export interface IUser {
  name:String;
  email:String;
  password:String;
  phone:Number;
  profileImg:String;
  role:string;
  createdAt:Date;
  favAnimal:[{[key:string]:IAnimal}];
  productList:[{[key:string]:IProduct}];
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, "Хэрэглэгчийн нэрийг заавал оруул"],
      },
      profileImg: {type:String,   required: true,},
      password: { type: String, select: false ,  required: true,},
      email: {
        type: String,
        unique: true,
        required: true,
      },
      role: {
        type: String,
        enum: ["User", "Admin","Organization"],
        default: "User",
        required: true,
      },
      phone: String,
      createdAt: {
        type: Date,
        default: Date.now(),
        required: false,
      },
      favAnimal: [{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Animal"
      }],
      productList: [{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Product"
      }],
    
  });


const User = model("User", userSchema);

export default User;
