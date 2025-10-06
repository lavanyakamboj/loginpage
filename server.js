const express = require("express");
const cors = require("cors");
const userRoutes = require("./auth");  
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3535;
const host = process.env.HOST || "localhost";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static("uploads"));

// Use user routes
app.use("/users", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.status(200).json({ result: "Welcome to User Server" });
});

app.listen(port, host, () => {
  console.log(`User server running at http://${host}:${port}`);
});
