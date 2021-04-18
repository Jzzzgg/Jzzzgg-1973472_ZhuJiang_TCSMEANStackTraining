const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const CourseSchema = mongoose.Schema({
    _id : Number,
    courseName : String,
    description : String,
    amount : Number
})

const CourseModel = mongoose.model("",CourseSchema, "course");


 module.exports = CourseModel;
 // create mongoDB model and export
