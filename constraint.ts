{

    //constraints (enforced rule) using extendes in the code

    const addCoursetoStudent=<T extends {name:string; email:string}>(student:T)=>{
        const course='Next Level Development';
    
        return{
            ...student,
            course 
        }
    

       //  const student3=addCoursetoStudent({x:'x value'})// this doesn't show any value for students
        const student1=addCoursetoStudent({name:'x',email:'x@gmail.com',job:'developer'})
        const student2=addCoursetoStudent({name:'y',email:'y@gmail.com',college:'DIC'})
        
    }


    //
}