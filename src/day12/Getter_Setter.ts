class Way2Automation
{
    private course_name:string="Playwright with TypeScript";

   get courseName():string
   {
        return this.course_name;
   }

   set courseName(course_name:string)
   {
        this.course_name=course_name;
   }    


}

let way2automation = new Way2Automation();
console.log(way2automation.courseName);//Playwright with TypeScript

way2automation.courseName="Playwright with TypeScript - Updated";
console.log(way2automation.courseName);
//Playwright with TypeScript - Updated
