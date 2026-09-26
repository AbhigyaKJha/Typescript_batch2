/*
   this-> current/child object
   super->parent class
*/


class Team
{
    public name:string;

    constructor(name:string)
    {
        this.name=name;
    }
    
    displayTeamName()
    {
        console.log("Team Name: "+this.name);
    }
}

class Developer extends Team
{
    technology:string="sdfs";

    constructor(name:string)
    {
        super(name);
    }
    
    

   
}




const team= new Developer("Abhigya");
team.displayTeamName();





