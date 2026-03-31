 //Array
let numbers: number [] = [ 488,450,920,2500];
console.log(numbers);
const names: string [] = ['Alice', 'Bob', 'Charlie'];
names.push('Cate');
console.log(`Array contains ${names}.`);

//Read only array
const readOnlyNumbers: readonly number[] = [488, 450, 920, 2500];
console.log(readOnlyNumbers);
//readOnlyNumbers.push(3000); // Error: Cannot add to a read-only array.

//Tuples. Typed arrays with fixed length and types for each element.
let user: [number, string] = [488, 'Harun'];
console.log(user);

//Readonly Tuples
const readOnlyUser: readonly [number, string] = [488, 'Harun'];
console.log(readOnlyUser);
//readOnlyUser[0] = 500; // Error: Cannot modify a read-only tuple. 

//Enums. Special class that represents a group of constants (unchangeable variables).
const enum Color {
    Red,
    Green,
    Blue
}
let myColor: Color = Color.Green;
console.log(myColor);


const car = {
    type : 'Toyota',
    model : 'Corolla',
    year : 2020
}

console.log(car.type);


//function calcuateTax(income : number, taxYear : number ) : number {  
//    if (taxYear < 2025  ) {
//        return income  * 0.1;
function calcuateTax(income : number, taxYear : 2026 ) : number {  
    if (taxYear < 2025  ) {
        return income  * 0.1;
    }
    return income * 0.2;
}   
console.log(calcuateTax(100000, 2026));