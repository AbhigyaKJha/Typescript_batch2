interface Employee{
    name:string;
    employeeID:number;
    getEmployeeName():string;

}




interface Developer1 extends Employee
{
    department:string;
    salary:number;

    getDeveloperSalary():number;
}

class BEDeveloper implements Developer1
{
    name:string;
    employeeID: number;
    department: string;
    salary: number;

    constructor(name:string,employeeID:number,department:string,salary:number)
    {
        this.name=name;
        this.employeeID=employeeID;
        this.department=department;
        this.salary=salary;
    }

    getDeveloperSalary():number{

        return this.salary;
    }
    getEmployeeName():string{
        return this.name;
    }
    

}