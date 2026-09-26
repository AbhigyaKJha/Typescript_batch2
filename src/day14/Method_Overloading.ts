
class Calculator {


    // Create method definition
    addition(a:number, b:number):number;
    addition(a:number, b:number, c:number):number;

    // Then create method implementation

   addition(a:number, b:number, c?:number):number{
     if(c !== undefined){
       return a+b+c;
     }
     return a+b;
   
}
   

}

let calculator1 = new Calculator();
console.log("Addition of 2 numbers: "+calculator1.addition(10,20)); 
console.log("Addition of 3 numbers: "+calculator1.addition(10,20,30)); 