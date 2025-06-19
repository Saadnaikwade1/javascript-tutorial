/*Take the peole array and create an array called youngPeople
  that stores object with ONLY 'name' and 'email' propeties of 
  all the people that are 25 and under. The name property should
  have there first name and last name */
const people = [
  {
    firstName: "Jhon",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "111-111-111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    phone: "222-222-222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "Bob@gmail.com",
    phone: "333-333-333",
    age: 45,
  },
  {
    firstName: "Sare",
    lastName: "Soe",
    email: "max@gmail.com",
    phone: "444-444-444",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "sare@gmail.com",
    phone: "555-555-555",
    age: 23,
  },
];

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: person.firstName + " " + person.lastName,
    email: person.email,
  }));
console.log(youngPeople);

//challenge add onlly positive no from the array
const numbers = [2, -30, 50, 20, -12, -9, 7];
const positive = numbers
  .filter((number) => number > 0)
  .reduce((acc, number) => acc + number, 0);
console.log(positive);

//challenge 3
/* create a new array called capitalizedWord with word from the words array
with the fisrt word of each letter is capitalized*/
const words = ["coder", "programmer", "developer"];
const cword = words.map((word) => {
  return word[0].toLowerCase() + word.slice(1,word.length);
});
console.log(cword);