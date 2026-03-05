// JavaScript Operators

// 1. Arithmetic Operators
let a = 10;
let b = 3;
console.log("Addition: " + (a + b)); 
console.log("Subtraction: " + (a - b)); 
console.log("Multiplication: " + (a * b)); 
console.log("Division: " + (a / b));
console.log("Modulus: " + (a % b)); 
console.log("Exponentiation: " + (a ** b)); 

// 2. Assignment Operators
let x = 5;
x += 3; 
console.log("After +=: " + x);
x -= 2; 
console.log("After -=: " + x);
x *= 2; 
console.log("After *=: " + x); 

// 3. Comparison Operators
console.log("5 == '5': " + (5 == '5')); 
console.log("5 === '5': " + (5 === '5')); 
console.log("5 != '5': " + (5 != '5')); 
console.log("5 !== '5': " + (5 !== '5'));
console.log("10 > 5: " + (10 > 5)); 
console.log("10 < 5: " + (10 < 5)); 
console.log("10 >= 10: " + (10 >= 10)); 
console.log("10 <= 9: " + (10 <= 9));

// 4. Logical Operators

console.log("true && false: " + (true && false)); 
console.log("true || false: " + (true || false)); 
console.log("!true: " + (!true));

// 5. Ternary Operator
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log("Status: " + status);

// 6. Bitwise Operators
console.log("5 & 3: " + (5 & 3)); // 1 (AND)
console.log("5 | 3: " + (5 | 3)); // 7 (OR)
console.log("5 ^ 3: " + (5 ^ 3)); // 6 (XOR)
console.log("~5: " + (~5)); // -6 (NOT)
console.log("5 << 1: " + (5 << 1)); // 10 (Left Shift)
console.log("5 >> 1: " + (5 >> 1)); // 2 (Right Shift)

// 7. String Operators
let firstName = "John";
let lastName = "Doe";
console.log("Concatenation: " + firstName + " " + lastName); // John Doe
console.log("Template Literal: " + `${firstName} ${lastName}`); // John Doe

// 8. typeof Operator
console.log("typeof 42: " + typeof 42); // number
console.log("typeof 'hello': " + typeof 'hello'); // string
console.log("typeof true: " + typeof true); // boolean
console.log("typeof {}: " + typeof {}); // object
console.log("typeof undefined: " + typeof undefined); // undefined

