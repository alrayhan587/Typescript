{


    //union

    type FrontEnd = 'intern' | 'junior developer';
    type BackEnd = 'data analyst' | 'server manager' | 'sql manager';

    type entry = FrontEnd | BackEnd;

    type User = {
        id: number;
        name: string;
        apply: entry;
    };

    const user: User = {
        id: 1,
        name: 'al rayhan',
        apply: 'server manager'  //in apply i get all 6 option first i initialized
    }







}