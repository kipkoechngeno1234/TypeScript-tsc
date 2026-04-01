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