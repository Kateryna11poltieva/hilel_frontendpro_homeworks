let userNane = prompt('Enter your name please');
let userSurname = prompt('Enter your surname please');
let yearOfBirth = parseInt(prompt('Enter your year of birth'));
const actualYear = 2022;
let userAge = actualYear - yearOfBirth;


console.log(`User one: ${userNane} ${userSurname}, ${userAge} years old;`);
