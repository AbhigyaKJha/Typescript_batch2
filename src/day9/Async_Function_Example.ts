
async function getResult():Promise<string>{
    await new Promise(resolve => setTimeout(resolve,5000));//it is waiting for 5 seconds to exceute the next statemtn
    return "Result Received !!!"

}
// Order Pizza-> Prepare-> Packing-> Delivery-> Delivered

 async function testGetResult()
{
    const finalResult= await  getResult();//Here execution will not stop for 5 seconds.
    console.log(finalResult);//Immediately this line will be executed
}
testGetResult();







//Promise -> Pending -> Operation completed -> FulFilled/Rejected

