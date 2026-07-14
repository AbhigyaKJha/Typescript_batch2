
let address:null =null;
console.log(address); // null : value
console.log(typeof address); // object:data type

// here the typeof is coming as object
/*
  This is a legacy bug in Javascript. And It has been kept in TypeScript for backward compatibility. The typeof null is an object because in the first implementation of JavaScript, values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer, which was 0x00. Therefore, null had 0 as its type tag, which meant that it was considered to be an object.
*/

let User=null;
//API Request
console.log(User); //null
User=100;
console.log(User); //100

// NullPointerException -> When we try to access a property or method of a null object, it will throw an error called NullPointerException. This is a common error in programming languages like Java, C#, etc. But in TypeScript, we can avoid this error by using the optional chaining operator (?.) or the nullish coalescing operator (??).



// User API -> Response: {"id":1,"name":"Abhigya"}

