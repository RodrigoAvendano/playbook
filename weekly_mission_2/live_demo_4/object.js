//objeto vacío
const person = {};

//objeto con propiedades
const rectangle = {
  lenght: 20,
  width: 20,
};

console.log(rectangle);

//Un objeto es un conjunto de valores key:value

const explorer = {
  firstname: "Rodrigo",
  lastname: "Avendaño",
  age: 24,
  country: "México",
  city: "Mexico",
  skills: ["Javascript", "PHP", "CSS", "Python"],
};

console.log(explorer);

// Acceder a una propiedad del objeto
const commander = {
  firstName: "Carlo",
  lastName: "Gilmar",
  age: 27,
  country: "Mexico",
  city: "CDMX",
  skills: ["JavaScript", "TypeScript", "CoffeeScript", "Elm"],
};

// Acceder a las propiedades del objeto usando .
console.log(commander.firstName);
console.log(commander.lastName);
console.log(commander.age);
console.log(commander.skills[1])

// Acceder a las propiedades del objetvo con []
console.log(commander["firstName"]);
console.log(commander["lastName"]);
console.log(commander["age"]);
console.log(commander["skills"][0]);
