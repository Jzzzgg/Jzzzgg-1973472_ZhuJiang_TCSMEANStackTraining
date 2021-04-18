const express = require("express");
const controller = require("../controller/dataController")
const router = express.Router();
// import modules

router.get("/", controller.homePage);
router.get("/storePage" ,controller.storePage)
router.get("/deletePage" , controller.deletePage)
router.get("/updatePage", controller.updatePage)
router.get("/getPage" , controller.getPage)
// link to html file


router.get("/allCourses", controller.retrieveData);
router.post("/", controller.storeCourse)
router.post("/delete" , controller.deleteCourse)
router.post("/update", controller.updateCourse);
// link to function 

module.exports = router;
//export