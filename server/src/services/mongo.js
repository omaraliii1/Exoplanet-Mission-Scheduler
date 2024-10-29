require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

async function mongoConnect() {
  await mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("Connected to MongoDB...");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
}

module.exports = {
  mongoConnect,
};
