// server, listens to requests from the clients
const express = require("express");
const socket = require("socket.io");


const app = express();


const server = app.listen(4000,() => {
    console.log("The server is listening on port 4000");
});

app.use(express.static('public'));

// server socket
const io = socket(server);
// client socket 
io.on('connection', (socket) => {
    //console.log(socket.id);
    socket.on("chat", (data) => {

        io.sockets.emit("chat", data);

    });
    socket.on("typing", (data) => {

        socket.broadcast.emit("typing", data);

    });
});