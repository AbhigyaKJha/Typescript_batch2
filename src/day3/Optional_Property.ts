
let Employee:{
    id:number,
    name:string,
    age?:number
//optional property
}

Employee={
    id:1,
    name:"Abhigya"
}

console.log(Employee);
console.log(Employee.id);
console.log(Employee.name);
console.log(Employee.age); //undefined