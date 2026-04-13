"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The Customer type is defined as an object with a birthday property of type Date.
let Customer = {
    birthday: new Date()
};
// The getCustomer function takes a number as an argument and returns either a Customer object or null. If the id is 0, it returns null; otherwise, it returns a Customer object with the current date as the birthday.
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
// The optional chaining operator (?.) is used to safely access the birthday property of the customer object. If customer is null, it will return undefined instead of throwing an error.
console.log(customer?.birthday);
console.log(customer?.birthday?.getFullYear()); // Safely access the year of the birthday, if customer and birthday are not null.  
console.log(getCustomer(0)?.birthday); // This will return undefined since getCustomer(0) returns null.
console.log(Customer.birthday);
//# sourceMappingURL=chaining.js.map