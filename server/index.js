const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth.route");
const messageRoute = require("./routes/message.route");
const userRoute = require("./routes/user.route");
dotenv.config();
const app = express();
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: "chat-app",
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
