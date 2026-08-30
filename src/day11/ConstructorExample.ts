class Test
{
    TestName:any;//instance variable
    TestID:any; // instance variable


    //create the structor

    //constructor();
    constructor(TestName:string,TestID:number);

    //define the constructor

    constructor(TestName:string,TestID:number)
    {
        this.TestName=TestName;
        this.TestID=TestID;
    }

    
    
    //getter function
    getTestInfo()
    {
        console.log("Test Case Name : "+this.TestName);
        console.log("Test Case ID: "+this.TestID)
    }

   //setter function
    setTestInfo(testName:string, testID:number)
    {
        this.TestName=testName;
        this.TestID=testID;
    }


}
let testcase1= new Test("Validate Login",101);
//testcase1.setTestInfo("Validate Login",101);
testcase1.getTestInfo();

let testcase2= new Test("Validate Account",102);
//testcase2.setTestInfo("Validate Account",102);
testcase2.getTestInfo();

let testcase3= new Test("Validate Order",103);
testcase3.getTestInfo();