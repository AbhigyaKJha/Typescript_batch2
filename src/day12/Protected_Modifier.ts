
class ProtectedStudents{

    protected Student_Name:string;

    constructor(Student_Name:string)
    {
        this.Student_Name=Student_Name;
    }

    public displayStudentName()
    {
        console.log("Student Name: "+this.Student_Name);//within same class acceible
    }   

}

class ChildProtectedStudents extends ProtectedStudents{
    public displayStudentNameFromChildClass()
    {
        console.log("Student Name from Child Class: "+this.Student_Name);//within child class acceible
    }
}

let protected_student1_name = new ProtectedStudents("Abhigya");
//console.log(protected_student1_name.Student_Name);//protected variable not accesible outside class
protected_student1_name.displayStudentName();//Abhigya

let child_protected_student1_name = new ChildProtectedStudents("Anil");
child_protected_student1_name.displayStudentNameFromChildClass();//Anil

//console.log(child_protected_student1_name.student_Name);//In Typescript, protected variables are not accessible outside class directly using Object.


