const readLine = require("readline-sync")
const logger = require("./log")
// call the modules 


var num = readLine.question("How many record you want to enter? ")
// The get the number of records

for(var i = 0; i < parseInt(num); i++){
    var id = readLine.question("Enter your employee id: ")
    var name = readLine.question("Enter your employee name: ")
    logger.logRecord(id, name);
}
// Enter the informations as much as number

logger.writeToFile();
// writing to the function