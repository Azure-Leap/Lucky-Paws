import { Schema, model } from "mongoose";

export interface IUser {
  name: String;
  email: String;
  password: String;
  phone: Number;
  profileImg: String;
  role: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Хэрэглэгчийн нэрийг заавал оруул"],
  },
  profileImg: { type: String },
  password: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    enum: ["User", "Admin", "Organization"],
    default: "User",
  },
  phone: String,
  createdAt: {
    type: Date,
    default: Date.now(),
    required: false,
  },
});

const User = model("User", userSchema);

export default User;
