{


    const bro1: number[] = [1, 2, 3, 4, 5];
    const bro2: number[] = [6, 7, 8];

    bro1.push(...bro2);  //[1,2,3,4,5,6,7,8]

    const mentorList1 = {
        data: "rafat",
        algorithm: "rayhan",
        discrete: "Emon"
    }

    const mentorList2 = {
        dataBase: "roni",
        MobileApplication: "Shiva"
    }

    //By using spread operator we add two different object properties in one object

    const mentorList = {
        ...mentorList1,
        ...mentorList2
    }


    //rest operator

    function sum(...num: number[]) {
        num.forEach((n: number) => {
            console.log(n);
        })
    }
    sum(1, 2, 3);
    sum(1, 2, 3, 4, 5);

}