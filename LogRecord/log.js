
const fs = require('fs');
// called fs module to about editing the file

let emps = new Array();
// create an array for all emplpyees

module.exports.logRecord = (id, name) => {
    var date = new Date();
    let emp = {"id":id, "name":name ,"date":date};
    emps.push(emp)
    console.log("Emploee has been added .")
}
// Export a log record function that is able to push the information to the array

module.exports.writeToFile = () => {
    var date = new Date();
    var month = date.getMonth()+1;
    var day = date.getDate()+1;
    var fileName = `./employees-${month}.${day}.json`;

    let jsonData = JSON.stringify(emps);
   
    fs.writeFile(fileName, jsonData, {flag : 'w'}, function(err) {
            if (err) 
                return console.error(err); 
            
        console.log(`***** ${fileName} Completed *****`);
    }); 
 
}
// The write the array into file and able to write different days