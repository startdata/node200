const app = require("express")();
const server = require("http").createServer(app);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/socket.html`);
});

const io = require("socket.io")(server);

io.on("connection", (client) => {
  console.log("Client connection");
  client.on("disconnect", () => {
    console.log("Client disconnection");
  });
});

server.listen(3000, () => {
  console.log(`server running`);
});
