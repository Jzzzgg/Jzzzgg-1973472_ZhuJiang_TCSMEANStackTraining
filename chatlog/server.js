const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/meanstack"
const port = 9090;
// install modules
mongoose.Promise = global.Promise;
const mongodbOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
// make modgoose promise to global value

mongoose.connect(url,mongodbOption)
mongoose.connection;

//connect to database
const MessageSchema = mongoose.Schema({
    user : String,
    message : String
})

const MessageModel = mongoose.model("",MessageSchema, "message");


app.get("/", (req,res) => {
    res.sendFile(__dirname+"/index.html")
})
// output the html file
app.get("/history" , (req, res) =>{
    res.sendFile(__dirname+"/history.html");
})

app.get("/find" , (req,res) =>{

        MessageModel.find({} , (err,result) =>{
            if(!err){
                res.json(result);
            }
    })
})// fetch function 

io.on("connection", (socket) =>{
    // console when it connect
    console.log("Client connected to application...");
    socket.on("chat", (msg) =>{
        const newMsg = JSON.parse(msg)
        store(newMsg.name , newMsg.message)
        // call store function to store data into database
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


function store(name , _message){
    let newMessage = new MessageModel({
        user : name,
        message : _message
    })
    newMessage.save((err, result) =>{
        if(!err){
            console.log(` ${result.user} : ${result.message}`);
        }else{
            console.log(err.message);
        }
    }
    )
}