// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)
// false

const bigInt = 3244606493703779n


// Reference (Non primitve)

// Array, Objects, Functions
// Array
const heros = ["shaktiman", "nagraj", "doga"]
// Object
let myObj = {
    name: "hitesh",
    age: 22,
}

// Object
const myFunction = function(){
    console.log("hello word")
}

console.log(typeof bigInt)
console.log(typeof myFunction)
// Function

// ++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Piyush Verma"

let anothername = myYoutubename
anothername = "chaiaaurcode"
console.log(myYoutubename)
console.log(anothername)

let user = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user

user2.email = "piyush@google.com"
console.log(user.email);
console.log(user2.email);
// Both output piyush@gmail.com

