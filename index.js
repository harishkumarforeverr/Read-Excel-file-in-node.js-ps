const xlsx = require("xlsx");
const path = require("path");
const filePath = path.resolve(__dirname, "testingExcel.xlsx");

const workbook = xlsx.readFile(filePath);
const sheetNames = workbook.SheetNames;

// Get the data of "Sheet1"
const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);

/// Do what you need with the received data
data.map((person) => {
  console.log(`${person.Name} is ${person.Age} years old`);
});
 
