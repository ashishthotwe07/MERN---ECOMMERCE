import mongoose from "mongoose";

const db = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to database");
  } catch (error) {
    console.log("Error in Connecting to database");
  }
};

export default db;