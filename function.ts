//normal function

function add(num1: number, num2: number): number {
    return num1 + num2;
}

//arrow function
const addNumber = (num1: number, num2: number): number => { return num1 + num2 }

//object method
const pooruser = {
    Name: "Rafi",
    balance: 0,

    addBalance(balance: number): string {
        return `My current balance is ${this.balance + balance}`;
    }
}

//array mapping
const arr: number[] = [1, 2, 3, 4, 5];
const newArray:number[] = arr.map((element:number) => element * element)