const app =require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")
const port = 9090;
// import modules and delcalre port number



const url = "mongodb://localhost:27017/meanstack";
// database url

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());
// make app to able to read url and json


mongoose.Promise = global.Promise;
const mongodbOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
// make modgoose promise to global value

mongoose.connect(url,mongodbOption)
mongoose.connection;

//connect to database

const route = require("./router/route.js")
app.use("/" , route);


// connect to route

app.listen(port, () => {
    console.log(`Server in running on http://localhost:${port}`);
})
// listen on port 9090