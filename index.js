/* 1. START
2. Print an introductory message for the user.
3. Define the first variable, using subtraction
4. Define the second variable, using multiplication
5. Define the third variable, using div
6. form the combination.
7. Display the combination through a dialog box or popup. */

const introMessage = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination: ' 
// b & h are plugins for the first code for the vault, will use strings
let h = 15 
let b = 5
// defining the first variable
let firstCode = h - b;
// defining the second variable using *
let k = 10 
let j = 4
let secondCode = k * 4;
// will be defining the third code using variable in division
let a = 117
let d = 3
let thirdCode = a / d;
// Will be forming combination string
const combination = `${firstCode} - ${secondCode} - ${thirdCode}`
// display combination
alert(introMessage + combination)