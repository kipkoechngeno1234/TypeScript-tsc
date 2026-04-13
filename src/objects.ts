// Define a type for an employee object
type Emploee = {
    id: Number,
    name: String,
    age: number,
    position: string,
    department: string
}   
// Create an employee object using the defined type
let employee: Emploee = {
    id: 1,
    name: "John Doe",
    age: 30,
    position: "Software Engineer",
    department: "IT"
}
console.log(employee);


type person = {
    id: number,
    name: string,
    age: number,
    isEmployed: boolean
}
let person1: person = { 
    id: 1,
    name: "John Doe",
    age: 30,
    isEmployed: true
}
console.log(person1);
