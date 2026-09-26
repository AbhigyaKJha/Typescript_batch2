
class PrivateStudents{

    private Student_Name:string;

    constructor(Student_Name:string)
    {
        this.Student_Name=Student_Name;
    }

    public displayStudentName()
    {
        console.log("Student Name: "+this.Student_Name);//within same class acceible
    }   


}

let private_student1_name = new PrivateStudents("Abhigya");
//console.log(private_student1_name.Student_Name);
private_student1_name.displayStudentName();