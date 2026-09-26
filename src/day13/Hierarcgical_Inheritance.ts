//One Parent-> Multiple child -> Hierarchical Inheritance


class Car
{
  carSpeed()
  {
    console.log("Car Speed is 100km/hr");
  }

}


class BMW extends Car
{

    
}

class Audi extends Car
{
    

}

const bmw= new BMW();  //BMW class object is created
bmw.carSpeed();//

const audi= new Audi();  //Audi class object is created
audi.carSpeed();