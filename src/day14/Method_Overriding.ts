class ANIMAL{


    sound():void
    {
        console.log("Animal Sound");
    }


}

class DOG extends ANIMAL{

    sound():void
    {
        console.log("Woof Woof");
    }


}

class CAT extends ANIMAL{

    sound():void
    {
        console.log("Meow Meow");
    }

}



let dogObject= new DOG();
dogObject.sound();

let catObject= new CAT();
catObject.sound();