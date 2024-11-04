{
    //

    type GenericType = Array<boolean>
    type Generic<T> = Array<T>
    // const rollNumber:number[]=[1,2,3];
    const rollNumber: Array<number> = [1, 2, 3];


    // const mentors:string[]=['rayhan','tazrain','shuvo'];
    const mentors: Array<string> = ['rayhan', 'tazrain', 'shuvo'];


    // const boolarry: boolean[] = [true, true, false];
    const boolarry: GenericType = [true, true, false];

    const user: Generic<{ name: string, age: number }> = [
        {
            name: 'rayhan',
            age: 56
        },
        {
            name: 'nasim',
            age: 43
        },
    ]


    //generic tuple

    type GenericTuple<X, Y> = [X, Y];

    const employee: GenericTuple<number, { name: string, email: string }> = [12, { name: 'rayhan', email: 'alrayhan@gmail.com' }]

























    //
}