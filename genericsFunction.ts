{

    //


    //Generic Array concept,
    const createArray = (params: string): string[] => {
        return [params]
    }

    const createArrayWithGeneric = <T>(params: T): T[] => {
        return [params]
    }

    const result1 = createArray('Bangladesh');
    const resultGeneric = createArrayWithGeneric<boolean>(true);

    type User = { id: number; name: string }
    const resultwithObj = createArrayWithGeneric<User>({ id: 2, name: 'rayhan' })

    //Work with tuple



    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    type Country = { continent: string; IndependentYear: number }
    const tupleResult1 = createArrayWithTuple<string, number>('Bangladesh', 22);
    const tupleResult2 = createArrayWithTuple<string, Country>('Bangladesh', { continent: 'Asia', IndependentYear: 1971 });


//
const addCoursetoStudent=<T>(student:T)=>{
    const course='Next Level Development';

    return{
        ...student,
        course 
    }

    const student1=addCoursetoStudent({name:'x',email:'x@gmail.com',job:'developer'})
    const student2=addCoursetoStudent({name:'y',email:'y@gmail.com',college:'DIC'})
    
}



    //
}