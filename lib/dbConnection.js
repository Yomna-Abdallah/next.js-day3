import mongoose from "mongoose";

export async function dbConnection() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB Connected");
  } catch (error) {
    console.log("Error in dbConnection:", error);
    process.exit(1);
  }
}
