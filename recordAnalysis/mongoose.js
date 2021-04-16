const mongoose = require("mongoose");
const fs = require("fs")
const url = "mongodb://localhost:27017/meanstack";
const mongodbOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.Promise = global.Promise;
mongoose.connect(url,mongodbOption);
const db = mongoose.connection;    
db.on("error",(err)=>console.log(err));
db.once("open",()=>{
    fs.readFile("call_data.json",(err,data)=> {
        if(!err){
            const callArr = JSON.parse(data);
        //Defined the Schema 
            const callSchema = mongoose.Schema({
                _id:Number,
                source:String,
                destination:String,
                sourceLocation:String,
                destinationLocation:String,
                callDuration:String,
                roaming:String,
                callCharge: String
            });
            // Creating Model using schema 
            let Call = mongoose.model("",callSchema,"call");

            // Creating reference using model 
            for(let i = 0; i < callArr.length; i++){
                let p1 = new Call(callArr[i]);
            p1.save((err,result)=>{
                if(!err){
                    console.log(result)
                }else {
                    console.log(err.message);
                }
                
                if(i === callArr.length-1){
                    mongoose.disconnect();
                }   //close the connectiond..
            })
            
            }
            //  


        }

        
    })

})





