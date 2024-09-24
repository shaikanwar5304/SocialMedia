const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
module.exports = async () => {
  const mongoUrl = process.env.MONGODB_URL;
  try {
    const connect = await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB", connect.connection.host);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
