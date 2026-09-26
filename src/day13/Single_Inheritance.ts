class Animal
{
    eat()
    {
        console.log("Eating...");
    }

    bark()
    {
        console.log("Animal is Barking...");
    }

    walk()
    {
        console.log("Animal is Walking...");
    }

}

class Dog extends Animal
{
    bark()
    {
        console.log("Dog  is Barking...");
    }

     walk()
    {
        console.log("Dog is Walking...");
    }

    
}

const dog= new Dog();  //Dog class object is created
dog.bark(); 
dog.walk();

console.log(typeof dog);

//If inheritance is applied between two classes, then Child class object can be reffered by
//parent class variable

//Webdriver driver = new ChromeDriver();
