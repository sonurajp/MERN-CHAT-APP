const express = require("express");
const dontnev = require("dotenv");
const app = express();
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dontnev.config();
connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("App is running");
});

app.use("/api/user", userRoutes);
// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server has started in ${PORT}`.yellow.bold));
