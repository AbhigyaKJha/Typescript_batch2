//break -> It Stops the loop immediately
//Break -> loops, switch

Outer:for(let i=1;i<=3;i++)//i=1
{
    
    Inner:for(let j=1;j<=3;j++)//j=2
    {
        if(j==2)//true
        {
            break Outer;
        }
        console.log("i--> "+i+" j--> "+j);//i->1 j->1 

    }
  
}
