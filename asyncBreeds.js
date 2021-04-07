// //THIS CODE WILL NOT WORK:
// // asyncBreeds.js
// const fs = require('fs');

// const breedDetailsFromFile = function(breed) {
//   console.log('breedDetailsFromFile: Calling readFile...');
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     console.log("In readFile's Callback: it has the data.");
//     // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
//     if (!error) return data;
//   });
//   // ISSUE: Attempting to return data out here will also not work.
//   //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
// };

// // we try to get the return value
// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!

//UPDATED CODE THAT WILL WORK:

// asyncBreeds.js
const fs = require("fs");

const breedDetailsFromFile = function (breed, functionToRunWhenThingsAreDone) {
  // console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    // console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (error) {
      functionToRunWhenThingsAreDone(undefined);
    } else if (!error) functionToRunWhenThingsAreDone(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

//CHANGE 1: moved the console.log into a new function
// const printOutCatBreed = function (breed) {
//   console.log("Return value: ", breed);
// };

//CHANGE 2: we're not passing 2 arguments into breedDetailsFromFile: breed string and callback function
// breedDetailsFromFile("Bombay", printOutCatBreed);

module.exports = breedDetailsFromFile;
