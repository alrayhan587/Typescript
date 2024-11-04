{
    //interface

    type User1 = {
        name: string;
        age: number

    }


    interface User2 {
        name: string;
        age: number;
    }

    //interface used type work
    const user2: User2 = {
        name: 'Rahat',
        age: 34,
    }

    type UserwithRole = User1 & { role: string }
    interface UserwithRole2 extends User2 {
        role: string
    }


    const user1: UserwithRole2 = {
        name: 'al rayhan',
        age: 40,
        role: 'junior developer'
    }


    //array
    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number;
    }

    const rollNumber: Roll2 = [1, 2, 3]



    //function
    type Add = (n1: number, n2: number) => number

    interface Add2 {
        (n1: number, n2: number): number
    }

    const add: Add2 = (n1, n2) => {
        return n1 + n2;
    }










    //
}