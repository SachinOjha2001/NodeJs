//Example of Module Export and Import in Node.js
// b1.js - Module Export Example
const sum=(a, b) => a+b;
const multiply=(a, b) => a*b;
const divide=(a, b) => a/b;
const subtract=(a, b) => a-b;
const g=9.81;
const PI=3.14159;


module.exports = {
    sum,
    multiply,
    divide,
    subtract,
    g,
    PI
};  
 
