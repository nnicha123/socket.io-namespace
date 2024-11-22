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

io.on("connection", (socket) => {
  console.log(socket.id);
});

server.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});
