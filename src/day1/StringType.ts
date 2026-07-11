
let browser ="chrome";

browser = 'firefox';

browser = `safari`;

let my_age: number = 38;
let my_name: string = "Deepak";

//console.log("My Name is " + my_name+ " and my age is " + my_age);

console.log(`My Name is ${my_name} and my age is ${my_age}`);

// //div[text()=`${my_name}`] => //div[text()="Deepak"]

// In Typescript we should use single quote by default
// If you are using double quotes -> You are using a formatters like Prettier or ESLint 

let postal_address=
`101
Street:1
City: New York
State: NY
Country: USA`;

console.log(postal_address);

let Postal_Address =" 101 \n \"Street\":1 \n \"City\": New York \n State: NY \n Country: USA";

console.log(Postal_Address);

/*
Escape Characters in TypeScript:
1. \n -> New Line
2. \t -> Tab
3. \\ -> Backslash
4. \' -> Single Quote
5. \" -> Double Quote
*/

// Inbuilt String functions in TypeScript
//length
//toUpperCase()
//toLowerCase()
//trim()
//charAt()
//indexOf()
//lastIndexOf()
//slice()
//substring()
//substr()
//replace()
//concat()
//split()

let myString="Hello World";
console.log(myString.length);
console.log(myString.toLowerCase());