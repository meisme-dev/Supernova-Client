const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);

app.use(express.static(__dirname));

server.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/twinkle/index.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/twinkle/auth/login.html");
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/twinkle/auth/register.html");
});

app.get("/chat/:server/:room", (req, res) => {
    res.sendFile(__dirname + "/twinkle/index.html");
});

app.use(function(req, res) {
    res.status(404).send('404: Page not Found');
});