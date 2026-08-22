//continue -> it can be used only with loops

loop1:for(let i=1;i<=3;i++)//i=2
{
    loop2:for(let j=1;j<=3;j++)//j==1
    {
        if(j==2)//false
        {
            continue loop1;
        }
    
    console.log("i--> "+i+" j--> "+j); //i=1 j=3
    }
 
}