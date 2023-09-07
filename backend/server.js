const express = require("express");
const dontnev = require("dotenv");
const app = express();
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");

dontnev.config();
connectDB();
app.get("/", (req, res) => {
  res.send("App is running");
});
app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server has started in ${PORT}`.yellow.bold));
