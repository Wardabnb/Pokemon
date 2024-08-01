import mongoose from "mongoose";
export async function DBConnect() {
  await mongoose.connect(
    "mongodb+srv://Cluster65807:R7UBTqLPjeHVt2bO@cluster65807.1d5lmkv.mongodb.net/"
  );
  console.log("Connected!");
}
