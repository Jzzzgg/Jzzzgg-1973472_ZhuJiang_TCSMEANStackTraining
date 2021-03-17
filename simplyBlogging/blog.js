
function mySubmit(){
    var titleInfo = document.getElementById("titleID").value;
    var areaInfo = document.getElementById("areaID").value;
    if(!document.getElementById("imageUrl").value){
        var imageInfo = document.getElementById("imageSrc").files[0].name;
    }else{
        var imageInfo = document.getElementById("imageUrl").value;
    }
    // Created variables for 3 different input


    var table = document.getElementById("list");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(0)

    // To connected table in the html file
    
    var cell1 = newRow.insertCell(0);
    cell1.style.width = '30%';
    cell1.style.maxWidth = '30%';
    cell1.innerHTML = titleInfo;
    var cell2 = newRow.insertCell(1);
    cell2.style.width = '30%';
    cell2.style.maxWidth = '30%';
    cell2.innerHTML = areaInfo;
    var cell3 = newRow.insertCell(2);
    var myImage = document.createElement("img");
    myImage.classList.add("picture");
    myImage.alt = titleInfo+".image";
    myImage.src = imageInfo;
    myImage.style.maxWidth = '500px';
    cell3.appendChild(myImage);


    // Create a row with all datas we need
    
    myReset();

    // call reset method to clean
}

function myReset(){
    document.getElementById("titleID").value = '';
    document.getElementById("areaID").value = '';
    document.getElementById("imageSrc").value = '';
    document.getElementById("imageUrl").value = '';

    // resert every input fields
}
