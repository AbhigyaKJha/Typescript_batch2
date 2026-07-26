
// for ...of
// for...in
// foreach

let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

//normal for loop
/*for(let i=0;i<months.length;i++)
{
    console.log(months[i]);

}*/

//for...of -> the loop will iterate over values
/*for(let month of months)
{
    console.log(month);
}*/

//for...in -> the loop will iterate over index
for(let index in months)
{
    console.log(months[index]);
}

//Promise