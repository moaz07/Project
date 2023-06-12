const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Book = require("./entities/Book");
const Review = require("./entities/Review");
const User = require("./entities/User");

const config = require("./config/config");

async function main() {
  // Database connection :
  await mongoose.connect(config.uri);
  console.log("Database connection successful.");

  // Create server :
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get("/ping", (req, res) => {
    return res.json({
      time: Date(),
    });
  });

  // Start server :
  await server.listen(config.port);
  console.log(`Server started on port ${config.port}.`);
}

main().catch((err) => {
  console.log(err);
});
