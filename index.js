var prompt = require('prompt');
var XLSX = require('xlsx');

var input, result;

console.log('DBConvert 0.1');
console.log('Your file have to name "db.xlsx"');
console.log('Paste your db.xlsx file in the same folder and choose output format for your file:');
console.log('1. CSV');
console.log('2. XML');
console.log('3. TXT');
console.log('4. HTML');

prompt.start();
prompt.get(['input'], function (err, result) {
    if (result.input == 1) {
        var workbook = XLSX.readFile("./db.xlsx");
        XLSX.writeFile(workbook, "./out.csv");
        console.log('Plik przetworzony.');
    } else if (result.input == 2) {
        var workbook = XLSX.readFile("./db.xlsx");
        XLSX.writeFile(workbook, "./out.xml");
        console.log('Plik przetworzony.');
    } else if (result.input == 3) {
        var workbook = XLSX.readFile("./db.xlsx");
        XLSX.writeFile(workbook, "./out.txt");
        console.log('Plik przetworzony.');
    } else if (result.input == 4) {
        var workbook = XLSX.readFile("./db.xlsx");
        XLSX.writeFile(workbook, "./out.html");
        console.log('Plik przetworzony.');
    }
});




// switch (input) {
//     case '1':
//         var workbook = XLSX.readFile("./db.xlsx");
//         XLSX.writeFile(workbook, "./a.csv");
//         console.log('Plik przetworzony.');
//         break;
//     case '2':
//         var workbook = XLSX.readFile("./db.xlsx");
//         XLSX.writeFile(workbook, "./a.xml");
//         console.log('Plik przetworzony.');
//         break;
//     case '3':
//         var workbook = XLSX.readFile("./db.xlsx");
//         XLSX.writeFile(workbook, "./a.json");
//         console.log('Plik przetworzony.');
//         break;
//     case '4':
//         var workbook = XLSX.readFile("./db.xlsx");
//         XLSX.writeFile(workbook, "./a.txt");
//         console.log('Plik przetworzony.');
//         break;
//     case '5':
//         var workbook = XLSX.readFile("./db.xlsx");
//         XLSX.writeFile(workbook, "./a.html");
//         console.log('Plik przetworzony.');
//         break;
//     default:
//         break;
// }