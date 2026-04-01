//Interfaces. Define the structure of an object, specifying the types of its properties.
type Employee = {
    id: number;
    name: string;
    department: string;
}
const employee: Employee = {
    id: 1,
    name: 'Harun  Karim',   
    department: 'Engineering'
};
console.log(employee);

//Intersection Types. Combine multiple types into one.
type Draggable = {
    drag: () => void;
}
type Resizable = {
    resize: () => void;
}
type UIWidget = Draggable & Resizable;// UIWidget has both drag and resize methods.
const widget: UIWidget = {
    drag: () => console.log('Dragging...'),
    resize: () => console.log('Resizing...')
};
console.log(widget);


//literal.Literal types allow you to specify that a variable or parameter can only have a specific set of values. This is useful for creating more precise types and ensuring that only valid values are used.
type Quantity = 50 | 100; // Quantity can only be 50 or 100. This is a union type with literal types.
let quantity: Quantity = 100;  
console.log(quantity);
//quantity = 75; // Error: Type '75' is not assignable to type 'Quantity'.

//nullable Types using union types. Allow a variable to be either a specific type or null.
//email: string | null; // User can have an email or be null
type User = {
    id: number;
    name: string;
    email: string | null; // User can have an email or be null
};
const user1: User = {
    id: 1,
    name: 'Harun',
    email: 'harun@example.com'
};
console.log(user1);