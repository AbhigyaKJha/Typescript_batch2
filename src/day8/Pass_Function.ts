

function multiplication(a:number,b:number):number
{
    return a*b;
}

function finalCalculation(
    a:number,
    b:number,
    calculation:(x:number,y:number)=>number
):number
{
    return calculation(a,b);
}

const Result=finalCalculation(10,20,multiplication);
console.log(Result);
