{


    type Student = {
        name: string;
        id: string;
        contactNo?: string;
        address: string;
    }


    const student1: Student = {
        name: 'Rayhan',
        id: '201902',
        contactNo: '017000000',
        address: 'Dhaka'
    }

    const student2: Student = {
        name: 'Rayhan',
        id: '201902',
        contactNo: '017000000',
        address: 'Dhaka'
    }


    const student3: Student = {
        name: 'Rayhan',
        id: '201902',
        contactNo: '017000000',
        address: 'Dhaka'
    }


    //function case we completely can give it a structure
    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;


















}