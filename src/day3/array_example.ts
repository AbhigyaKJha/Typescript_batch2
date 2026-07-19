let users:string[]=["Abhigya", "Amit", "Ankit", "Aman", "Anshul"];
console.log(users);

let numbers:number[]=[1,2,3,4,5];

//In typescript Array index starts from 0

console.log(numbers[-1]);

//add a new number to numbers array

//I want to add 10 at 0th index
console.log(numbers);
numbers[0]=10;
console.log(numbers);

//I want to add 100 at the end of the numbers array
//numbers[10]=100;
numbers.push(100);
console.log(numbers);
numbers.push(200);//push() adds a new element at the end of the array
console.log(numbers);
numbers.unshift(1000);//unshift() adds a new element at the start of the array  
console.log(numbers);

numbers.pop();//pop() removes the last element from the array
console.log(numbers);

numbers.shift();//shift() removes the first element from the array
console.log(numbers);

//Learn about includes(),indexOf(),lastIndexOf(),slice(),splice(),sort(),reverse() functions in typescript
