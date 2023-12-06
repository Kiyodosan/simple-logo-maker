const inquirer = require('inquirer');
const fs = require('fs');
const genShape = require('./Utils/generateShape');

const questions = [
  "Enter logo text (up to 3 characters)",
  "Enter text color",
  "Choose a shape:",  // list
  "Enter shape color"
];

// Writes logo as an SVG file into the Dist folder.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log("Successfully wrote to file."));
}

// Asks the user for text, color, and shape of their desired logo.
function init() {
  console.log("Welcome to the simple logo generator. Answer the following questions to create your custom logo.\n");

  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "logoText"
      },
      {
        type: "input",
        message: questions[1],
        name: "textColor"
      },
      {
        type: "list",
        message: questions[2],
        name: "shape",
        choices: [
          'Circle',
          'Triangle',
          'Square',
        ]
      },
      {
        type: "input",
        message: questions[3],
        name: "shapeColor"
      }
    ])
    .then((response) => {
      // console.log(response)  // test

      // Generates a custom SVG logo based on provided info.
      const fileInfo = genShape.generateShape(response)
      writeToFile('./Dist/logo.svg', fileInfo)
    })
    .catch((err) => console.error(err));
}

init();