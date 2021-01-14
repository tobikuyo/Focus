const express = require("express");
const cors = require("cors");
const userRoutes = require("./users/routes");
const { handleError } = require("./users/middleware");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use(handleError());

module.exports = app;
