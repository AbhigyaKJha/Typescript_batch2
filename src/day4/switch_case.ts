


//if browser==10 -> print("Old")
//if browser==20 -> print("New")
//if browser==30 -> print("Latest")



// = -> assiging value
// == -> comparing two values
let BrowserVersion=20;//10,20,30
switch(BrowserVersion)//number,string,boolean,enum,null,undefined
{
    case 10:
        console.log("Old Version")
        break;
    case 20:
        console.log("New Version")
        break;
    case 30:
        console.log("Latest Version")
        break;
    default:
        console.log("Invalid Version")
        break;

}