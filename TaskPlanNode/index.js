const http = require("http");
const url = require("url");
const fs = require("fs");
// called modules


const port = 8080;
// set up the port number

let taskInfo = `
    <h2 style="text-align:center;">Add Task</h2>  <br>  
    <form action="/ans" method="get" style="text-align: center;">
        <label>Employee ID:</label>
        <input type="text" name="empID" required/><br/>
        <label>Task ID</label>
        <input type="text" name="taskID" required/><br/>
        <label>Task</label>
        <input type="text" name="task" required/><br/>
        <label>Date</label>
        <input type="date" name="date" required/><br/><br/>
        <input type="submit" value="Add Task"/>
        <input type="reset" value="Reset"/>
    </form>
            `;
// Output this html when people login to first paage

let deleteInfo = `
    <h2 style="text-align:center;">Delete Task</h2>  <br>  
    <form action="/ans" method="get" style="text-align: center;">
        <label>Task ID</label>
        <input type="text" name="taskID" required/><br/>
        <input type="submit" value="Delete Task"/>
        <input type="reset" value="Reset"/>
    </form>
            `;
// Output this when people trying to delete task


const server = http.createServer( (req, res) => {
// create the server
    const path = url.parse(req.url,true).pathname;
    if(req.url != "/favicon.ico"){
        if(req.url=="/"){
            res.setHeader("content-type","text/html");
            res.write(taskInfo);
            res.end();
            // html type response and return taskInfo
        }else if(path=="/delete"){
            res.setHeader("content-type","text/html");
            res.write(deleteInfo)
            res.end()
            //html type response and return deleteInfo
        }
        else if(path=="/ans"){
            const data = url.parse(req.url,true).query;
            const taskString = JSON.stringify(data);
            let message;
            if(data.empID === undefined ){
                deleteFunc(data.taskID);
                message = "You have deleted record!"
                // if the empID is empty in the url then trager delete function
            }else{
                update(taskString);
                message = "You have added record!"
                // if the empID is exist then trager update function
            }
            res.setHeader("content-type","text/html");
            res.write(`<input type='button' value='Display List' onClick='window.location.href = "http://localhost:${port}/display"''/>`)
            res.write(`<hr>${message}`)
            res.end();

            // create the button and message.
        }
        else if(path=="/display"){
            
            
            fs.readFile("task.json",(err,data)=> {
                if(!err){
                    const taskString2 = data.toString()
                    if(taskString2 != ""){
                    //read the json file make sure is something inside
                        const taskArray = JSON.parse(taskString2)
                        res.setHeader("content-type","text/html");
                        res.write(`<table style="width:60%;text-align:center;" border=black >
                                <thead>
                                    <tr>
                                        <th>Empolyee ID</th>
                                        <th>Task ID</th>
                                        <th>Task</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                    `)
                        for(let i = 0; i < taskArray.length; i++){
                            
                            res.write(`<tr>
                                        <td>${taskArray[i].empID}</td>
                                        <td>${taskArray[i].taskID}</td>
                                        <td>${taskArray[i].task}</td>
                                        <td>${taskArray[i].date}</td>
                                    </tr>`)
                        }
                        
                        res.write("</table>")
                        res.write(`<input type='button' value='Add Page' onClick='window.location.href = "http://localhost:${port}"''/>`)
                        res.write(`<input type='button' value='Delete Page' onClick='window.location.href = "http://localhost:${port}/delete"''/>`)
                        res.end()
                        }
                        // display the data
                    }else{
                        console.log(err)
                    }
                
            })
            
        }
    }   
   

})
// update function 
function update(info)  {
    fs.readFile("task.json",(err,data)=> {
        if(!err){
            const taskString = data.toString()
            if(taskString != ""){
            // if the file is not empty
            const taskArray = JSON.parse(taskString);
            taskArray.push(JSON.parse(info))
            taskS = JSON.stringify(taskArray);
            // push the data into array
            writeFunc(taskS)
            // write array
            }else{
                const newInfo = `[${info}]`
                writeFunc(newInfo)
                // if the file is empty will write the first object inside
            }
        }
    })
}
function writeFunc(data){
    fs.writeFile("task.json",data,{flag:"w"},(err)=> {
        if(!err){
             console.log("Task chnaged successfully...")
        }
    }) 
} /// write function
function deleteFunc(taskID){
    fs.readFile("task.json",(err,data)=> {
        if(!err){
            let taskArray = JSON.parse(data);
            for(let i = 0; i < taskArray.length; i++){
                 if(taskArray[i].taskID === taskID){
                    taskArray.splice(i,1); 
                    i--;
                 }// delete function
            }
            writeFunc(JSON.stringify(taskArray));
            // write the file again
        }   
    })
    
}

server.listen(port, ()=> console.log(`Server is running on http://localhost:${port}`))
// the server is running and give user the address