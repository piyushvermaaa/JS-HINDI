let score = "33abc"
let marks = null;

console.log(typeof score);
console.log(typeof(score));

let valueNumber = Number(score)
let valueMarks = Number(marks)
console.log(typeof valueNumber)
console.log(valueNumber)
// NaN not a number 
console.log(typeof valueMarks)
console.log(valueMarks)
// 0

// "33" => 33
// "33abc" => NaN
// true=> 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

// 1 => true; 0 => false
// "Piyush" => true; "" => false

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// ******************* Operations ******************//

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "hello"
let str2 = " piyush"

let str3 = str2 + str1
console.log(str3)

console.log("1" + 2)
// 12
console.log(1 + "2")
// 12
console.log("1" + "2")
// 12
console.log("1" + 2 + 2)
// 122
console.log(1 + 2 + "2")
// 32
console.log(true)
// true
console.log(+true)
// 1
// console.log(true+)
// Error
console.log(+"")
// 0

let num1, num2, num3 

num1 = num2 = num3 = 2 + 2

let gameCouner = 100
++gameCounter;
console.log(gameCounter)
// 101
// increments learn through mdn docs