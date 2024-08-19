const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: "chat-app",
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

;

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
