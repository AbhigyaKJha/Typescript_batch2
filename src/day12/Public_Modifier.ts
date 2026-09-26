
class Students{

    public Student_Name:string;

    constructor(Student_Name:string)
    {
        this.Student_Name=Student_Name;
    }

    public displayStudentName()
    {
        console.log("Student Name: "+this.Student_Name);//within same class acceible
    }   


}

let student1_name = new Students("Abhigya");
console.log(student1_name.Student_Name);
