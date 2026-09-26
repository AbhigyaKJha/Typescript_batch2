/*
  How to do we make an abstract class in TypeScript? -> Using abstract keyword

  Abstract class is a class that cannot be instantiated. It can only be inherited by other classes.

  It can have abstract methods and non-abstract methods. 
  Abstract methods are methods that are declared but not implemented in the abstract class. 
  They must be implemented in the derived class.
*/


 abstract class ParentClass
{
    abstract displayInfo():void;

    abstract abstractMethod():void;

    print()
    {
        console.log("This is a non-abstract method in abstract class.");
    }
   
}

class ChildClass extends ParentClass
{
    displayInfo():void
    {
        console.log("This is an abstract method implemented in child class.");
    }   

    abstractMethod():void
    {
        console.log("This is another abstract method implemented in child class.");
    }
}

let childObject= new ChildClass();

childObject.print();

