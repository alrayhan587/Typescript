{
    //

    type Owner = "bike" | "car" | "ship"; //manually written


    //using keyof
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner2 = keyof Vehicle;

    const person: Owner2 = "bike";


    //finding the value of the field from the object
    const user = {
        name: 'Rayhan',
        age: 24,
        profession: 'developer'
    }

    const getValueFromObject = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const result1 = getValueFromObject(user, 'name');




    //
}