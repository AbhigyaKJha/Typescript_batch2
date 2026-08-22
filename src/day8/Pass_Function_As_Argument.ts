// The Benefit of passing Function as Argument:- Reusability, Flexibility

function ADD(a:number,b:number):number{
    return a+b;
}

function ADDITION(a:number,b:number,c:number):number{
    return a+b+c;
}


function MUL(a:number,b:number):number{
    return a*b;
}


function SUB(a:number,b:number):number{
    return a-b;
}


function DIV(a:number,b:number):number{
    return a/b;
}




function Calculate(
    a:number,
    b:number,
    action:(x:number,y:number)=>number//Here operation is parameter
):number
{
    return action(a,b);//here we will call the function which we will pass as argument
}

const Result1=Calculate(100,200,ADD);//passing function as argument
console.log(Calculate(100,200,MUL));
console.log(Calculate(200,100,SUB));
console.log(Calculate(200,100,DIV));


//Create a function which should perform add,sub,mul,div on two number values


