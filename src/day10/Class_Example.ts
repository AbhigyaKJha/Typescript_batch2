//properties(variables) & functions
class StudentInfo
{
    name:string;//class level
    age:number ;//class level
   
    constructor(name:string,age:number)
    {
        this.name=name;
        this.age=age;
    }

    getStudentInfo()
    {
        const gender:string="male";//local variable
        console.log("Name-> ",this.name);
        console.log("Age-> ",this.age);
        console.log("Gender-> ",gender);
    }

    
 
}
let studentinfo = new StudentInfo("Abhigya",35);
 studentinfo.getStudentInfo();
//why inside class I am not able to call the function?

/*
class can contain:
properties
constructor
functions

inside class body you can not have direct executable/actionable calling
*/