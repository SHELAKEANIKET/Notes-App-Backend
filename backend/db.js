require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
  console.log('MongoDB URL:', process.env.MONGODB_URL);

  const uri = process.env.MONGODB_URL;

  if (!uri) {
    console.error('MongoDB connection string is not defined. Please set the MONGODB_URL environment variable.');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connected!");
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    process.exit(1); 
  }
};

module.exports = connectDB;
