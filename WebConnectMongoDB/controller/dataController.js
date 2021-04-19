const CourseModel = require("../model/mongoose")
const path = require('path');


let homePage  = (req,res) =>{
    res.sendFile(path.resolve("./view/index.html"));
}
let storePage  = (req,res) =>{
    res.sendFile(path.resolve("./view/store.html"));
}
let deletePage  = (req,res) =>{
    res.sendFile(path.resolve("./view/delete.html"));
}
let updatePage  = (req,res) =>{
    res.sendFile(path.resolve("./view/update.html"));
}
let getPage  = (req,res) =>{
    res.sendFile(path.resolve("./view/fetch.html"));
}

// html files

let retrieveData = (req,res) => {
    CourseModel.find({} , (err,result) =>{
        if(!err){
            res.json(result);
        }
    })
}

let storeCourse = (req, res) => {
    let course = new CourseModel({
        _id : req.body.cid,
        courseName : req.body.cname,
        description: req.body.cdesc,
        amount : req.body.amount
    })
    course.save((err, result) =>{
        if(!err){
            res.sendFile(path.resolve("./view/index.html"));
        }else{
            res.send(err.message)
        }
    }   
    )
}

let deleteCourse = (req,res) =>{
    let cid = req.body.cid;
    CourseModel.deleteOne({_id : cid}, (err,result) =>{
        if(!err){
            if(result.deletedCount > 0){
                res.sendFile(path.resolve("./view/index.html"));
            }else{
                res.send("No Record Found ")
            }

        }else{
            res.send(err.message)
        }

    })
}

let updateCourse = (req,res) =>{
    let cid = req.body.cid;
    let camount = req.body.amount
    CourseModel.updateOne({_id : cid}, {amount : camount} , (err,result) =>{
        if(!err){
            if(result.nModified > 0){
                res.sendFile(path.resolve("./view/index.html"));
            }else{
                res.send("No Record Found / Same Amount")
            }
        }else{
            res.send(err.message)
        }

    })
}

// CURD functions


module.exports = {retrieveData, homePage, storeCourse, updateCourse, deleteCourse, storePage , deletePage, updatePage, getPage};

// export functions 