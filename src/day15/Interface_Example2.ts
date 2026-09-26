interface A{

    name:string;
}

interface B{

    name:string;
}

interface C{

    name:string;
}


class SubClass implements A,B,C
{

    name:string;
    age:number;
    salary:number;

    constructor(
        name:string,
        age:number,
        salary:number
    )
    {
        this.name=name;
        this.age=age;
        this.salary=salary;
    }


}

let subclass= new SubClass("Abhigya",35,10000);
console.log(subclass.name);