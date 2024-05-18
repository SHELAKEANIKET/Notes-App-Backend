require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {

  const uri = process.env.MONGODB_URL;
  
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected!");
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    process.exit(1); 
  }
};

module.exports = connectDB;




