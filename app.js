const express = require("express");
const cors = require("cors");
const app = express();
const rateLimit = require("express-rate-limit");


app.use(cors());
app.use(express.json());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }),
);
// Use routes
app.get("/", (req, res) => {
  res.json("Hello World!");
});

module.exports = app;
