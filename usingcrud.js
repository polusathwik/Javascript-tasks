// CREATE
let person = new Object();

// ADD DATA
person.name = "Nani";
person["age"] = 21;

console.log(person);


// Access - retrieving the data
console.log(person.name);
console.log(person["age"]);


// UPDATE - changing the data
person.name = "Sathwik";
person.age = 22;

console.log(person);


// DELETE - removing the data
delete person.age;

console.log(person);