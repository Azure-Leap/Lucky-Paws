import mongoose from "mongoose";
const connectDB = async (uri: string): Promise<void> => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.log("ERROR", error);
  }
};

export default connectDB;