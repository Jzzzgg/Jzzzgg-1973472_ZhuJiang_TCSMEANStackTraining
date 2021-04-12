const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = 3000;
// install modules

app.get("/", (req,res) => {
    res.sendFile(__dirname+"/index.html")
})
// output the html file

io.on("connection", (socket) =>{
    // console when it connect
    console.log("Client connected to application...");
    socket.on("chat", (msg) =>{
        console.log(msg)
        io.emit('chat', msg);
    })
    // when client is connect and it send a message it will forward to all clients
    socket.on("disconnect", () =>{
        console.log("Connection end");
    })
    // console when it disconnect
})

http.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
})// give the address of the server