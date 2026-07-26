// if, if-else, switch-> Selection Statements -> 
// Based on condition a particular set of code will be exceuted-> Only once

//Loops:- Repeat a block of code again and again until consition becomes false

/*
    for loop syntax:-
    for(let i=1;i<=10;i++)//(initialization)i=1 -> condition evaluation-> false -> body execution -> Increment(i=11)
    {
      console.log("Hello")//Hello \n Hello \n Hello \n 10th Hello
    }
      //execution will come outside loop
  
*/

for(let i=1;i<=3;i++)//i=4; 4<=3 -> false
{
    for(let j=1;j<=3;j++)//j=1;4<=3 -> false; j=4
    {
        console.log("i--> "+i+" j--> "+j); // i--> 3 j--> 3
    }
}
