// Object -> It is a collection of Key- Value pairs.
// We can store multiple values in a single variable using Object.



//Employee -> id, name, age,salary,designation

let employee:any = {
    id: 1,
    name: "Abhigya",
    age: 25,
    salary: 50000,
    designation: "Software Engineer",
    address:{
        city: "New York",
        state: "NY",
        country: "USA"
    
    },
    skills: ["Java", "Python", "JavaScript"]
}
console.log(employee);
console.log(typeof employee);
console.log(employee.name);
console.log(employee.age);
console.log(employee.salary);
console.log(employee.designation); 
console.log(employee.address.city);
console.log(employee.address.state);
console.log(employee.address.country);

employee.salary=60000;
console.log(employee.salary);
employee.department="IT";

console.log(employee);

delete employee.age;
console.log(employee);

console.log(employee.skills);
console.log(employee.skills[0]);
console.log(employee.skills[1]);
console.log(employee.skills[2]);




