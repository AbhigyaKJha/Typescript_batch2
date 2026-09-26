class Animall{

    eat(){
        console.log("Animal Eating...");
    }

}


class Dogg extends Animall{

    bark(){
        console.log("Dog Barking...");
    }


}

class BullDog extends Dogg{

    walk(){
        console.log("BullDog Walking...");
    }

}

const dogg= new BullDog();  //Animal class object is created
dogg.eat();
dogg.bark();
dogg.walk();
