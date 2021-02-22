function myFunctionTable(){
    var Table={
   
        "firstName":"parisa",
        "lastName":"zangiabadi",
        "age" : "23"
  
};
console.log(Table);

var content = "<table>"
for(i=0; i<3; i++){
    content += '<tr><td>' + 'result ' +  i + '</td></tr>';
}
content += "</table>"

$('#demo').append(content);

};
