// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// Use aboutEach as the variable.
// Fill in describe/it/expect statment.

describe("aboutEach", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {  
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }]
      expect(aboutEach(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
    })
  })

//    ReferenceError: aboutEach is not defined

// b) Create the function that makes the test pass.

// use .map to iterate through the array
// value.name.split to pull out the name of the of the object
// .charAt.toUpperCase to capatilize the first letter of the name
// .join to join the name back to the object.

const aboutEach = (array) => {
  return array.map (value => {
    let capLetter = value.name.split(" ").map (letter =>{
      return letter.charAt(0).toUpperCase()+letter.substring(1)})
    return `${capLetter.join(" ")} is ${value.occupation}.`})
}

//  PASS  ./code-challenges.test.js
  // aboutEach
  // ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (4 ms)

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("onlyRemainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
//     // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(onlyRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(onlyRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

//    ReferenceError: onlyRemainders is not defined

// b) Create the function that makes the test pass.

// .filter to iterate and leave only number data
// .map to iterate through the new array and divide by 3

const onlyRemainders = (array) => {
  let numFill = array.filter(value => typeof value === 'number')
  return numFill.map(value => value % 3)
}

// PASS  ./code-challenges.test.js

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCubed", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})

// ReferenceError: sumCubed is not defined

// b) Create the function that makes the test pass.

// .map to iterate and divide by 3
// return array with only remainders left, use .reduce 


const sumCubed = (array) =>{
  let cube = array.map(value => value ** 3)
  return cube.reduce((a, b) => a + b, 0)
}

// PASS  ./code-challenges.test.js!!!!!