// variable -> We create a placeholder which will store a value

//How we can create a variable in TypeScript -> keyword var, let, const

//What kind of data we can store in a variable -> Data types (string, number, boolean, undefined, null, any)


let Name="Abhigya";
let age=38;
let flag=true;
console.log("My name is " + Name);
console.log(typeof Name); 
console.log("My age is " + age);
console.log(typeof age); 
console.log(typeof flag); 
age=100;


//Variable Declaration Syntax
// keyword variableName: dataType= value;

let myName: string = "Abhigya";
let myAge: number = 38;
let isActive: boolean = true;


/* Variable Naming Rules:-
1. Can not start with a number
2. No Spaces allowed
3. Can not use special characters except $ and _
4. Can not use reserved keywords
5. Can not use hyphen (-)
6. variable names are case sensitive(Age and age are different variables)
*/

let agee="Abhigya"; // Invalid variable name
let Agee=100;

const num=100;
