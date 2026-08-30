

//this -> It refers to the current object

class Sample {

    name: string;//class level
    age: number;

    constructor(name: string, age: number)//local variables
    {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }


}

let sample1 = new Sample("Abhigya", 35);
sample1.getInfo();//Abhigya,35

let sample2 = new Sample("Amit", 20);
sample2.getInfo();
sample1.getInfo();//Abhigya,35