/*
 Super keyword-> super is used in child class to access parent class 

 It has mainly 2 uses:
     1. TO access parent class constructor in child class constructor 
     2. Call parent class method in child class method   
     
     Important points:
     1. If a child class has a constructor, you must call super() in the child class constructor

   
*/

class ITTeam
{
    name:string;
    
    constructor(name:string)
    {
        this.name=name;
    }

    displayTeamName()
    {
        console.log("IT Team Name: "+this.name);
    }

}

class Developerr extends ITTeam
{
    Language:string;

    constructor(name:string, Language:string)
    {
        super(name);
        this.Language=Language;
    }

    displayDeveloperInfo()
    {
        super.displayTeamName();
        console.log("Developer Name: "+this.name);
        console.log("Developer Language: "+this.Language);
    }
}

let developer1= new Developerr("Abhigya","Java");//

console.log("Developer Name: "+developer1.name);
console.log("Developer Language: "+developer1.Language);


developer1.displayDeveloperInfo();

