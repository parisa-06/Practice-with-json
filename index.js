var myTable = {
    "employees": [{
            "firstName": "parisa",
            "lastName": "zangiabadi",
            "age": "23"

        },
        {
            "firstName": "psa",
            "lastName": "zabadi",
            "age": "2"

        }
    ]

};

var count = Object.keys(myTable.employees).length;
console.log(count);

console.log(myTable);


var number_of_rows = count;
var number_of_cols = count;

var mytable = "<table border=\"1\"> <tr> <th>row</th> <th>firstName</th> <th>lastName</th> <th>age</th> </tr>";

for (var i = 1; i <= number_of_rows; i++) {
    console.log("i: ", i);
    mytable += '<tr> <td> ' + i + '</td>';
    for (x in myTable.employees[i - 1]) {

        mytable += '<td> ' + myTable.employees[i - 1][x] + ' </td>';
        console.log(myTable.employees[i - 1][x]);
    };
    mytable += '<tr>';
};

mytable += '</table>';
$('#demo').append(mytable);
