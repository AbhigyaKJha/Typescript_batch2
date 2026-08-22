// Function is a reusable block of code that should perform a specific task


console.log("Hi");

//Syntax to create a function

/*
function fucntionName(parameters): returnType{
    //function body
}
*/

function add(a:number,b:number): number{
    return a+b;

}

let finalvalue= add(10,20);
console.log(finalvalue);

function printName(name:string):void{
    console.log(`Hi ${name}`);
}

printName("Abhigya");

// paramter vs argument

function sayHi()
{
    console.log("Hi");
}

sayHi(); // function call

function studentInfo(StudentName:string, studentAge:number, studentGender?:string)
{
    console.log(`Name: ${StudentName}`);
    console.log(`Age: ${studentAge}`);
    console.log(`Gender: ${studentGender}`);
}

studentInfo("Abhigya",22);

//Create a function which should acceopt a paramter browser
// Print the browser name
//If browser is not provided then print chrome by defult

function browserName(browser?:string){
    if(browser===undefined){
        console.log("chrome by default")
    }
    else{
        console.log("Browser Name: " + browser)
    }
}
browserName("firefox")
browserName()

function printBrowser(browser?:string)
{
    console.log(browser);
}

printBrowser();

//create a function which returns object

function getStudentInfo()
{
    return [
        {
            studentName: "Hari",
            studentAge: 45,
            studentGender: "male"
        },
        {
            studentName: "Raj",
            studentAge: 56,
            studentGender: "male"
        }
    ]

}
console.log(getStudentInfo());
// create a function which returns array


function supportingBrowsers()
{
    return ["chrome","firefox","edge"];
}

console.log(supportingBrowsers());

