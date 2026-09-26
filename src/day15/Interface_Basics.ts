// Interface is a contract, that defines the common properties and methods that a class should implement. It is used to define the structure of an object, without providing any implementation details. Interfaces are used to enforce a certain structure on classes, ensuring that they adhere to a specific contract.

// Interface tells you What a class should do, but now HOW ?

interface Student_Service{


    name:string;
    age:number;
    class?:string;//optional property
    displayStudentInfo():void;
    //displayStudentMarks():void;

    


}
class Student_Impl implements Student_Service
{
    name:string;
    age:number;

    constructor(name:string, age:number)
    {
        this.name=name;
        this.age=age;
    }

     displayStudentInfo(): void {

        console.log("Student Name: "+this.name);
        console.log("Student Age: "+this.age);
     }
}
let student_impl= new Student_Impl("Abhigya", 25);

student_impl.displayStudentInfo();


class Student_Impl2 implements Student_Service
{
    name:string;
    age:number;
    class:string;

    constructor(name:string, age:number, class_:string)
    {
        this.name=name;
        this.age=age;
        this.class=class_;
    }

     displayStudentInfo(): void {

        console.log("Student Name: "+this.name);
        console.log("Student Age: "+this.age);
        console.log("Student Class: "+this.class);
     }
}