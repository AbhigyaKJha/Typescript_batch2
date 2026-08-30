class Studentinfo
{
    Student_Name:string;
    Student_Age:number;
    Stduent_Mobile_Number:number;

    constructor(Student_Name:string,Student_Age:number,Stduent_Mobile_Number:number)
    {
        this.Student_Name=Student_Name;
        this.Student_Age=Student_Age;
        this.Stduent_Mobile_Number=Stduent_Mobile_Number;
    }
  

    getStudentInfo()
    {
        console.log("Student Name: "+this.Student_Name);
        console.log("Student Age: "+this.Student_Age);
        console.log("Student Mobile Number: "+this.Stduent_Mobile_Number);
    }



}

let student1= new Studentinfo("Abhigya",35,93790283490);
student1.getStudentInfo();

let student2= new Studentinfo("Rahul",45,4564566456);
student2.getStudentInfo();

let student3= new Studentinfo("Amit",25,459804856094);
student3.getStudentInfo();