const express = require("express");
const http = require("http");
const path = require("path"); // Import path to handle file paths

const PORT = 5000;

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const io = require("socket.io")(server);
const orders = io.of("/orders");
const users = io.of("/users");

io.on("connection", (socket) => {
  console.log(socket.id);
});

orders.on("connection", (socket) => {
  console.log("connected to orders namespace", socket.id);
});

users.on("connection", (socket) => {
  console.log("connected to users namespace", socket.id);
});

server.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});
