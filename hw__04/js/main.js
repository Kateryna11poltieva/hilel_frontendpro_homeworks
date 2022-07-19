const userString = prompt('Enter an arbitrary string');
const operationNumber = parseInt(prompt('Enter a number corresponding to the number of the operation you want to perform with your string'));

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);

}

const randomInt = getRandomIntInclusive(0,9);

const  arr = [':-)',':-D',';-)',':’(',':-Р',':-*',':-O',':-[',':-|',':-7'];

switch (operationNumber){
    case 1:
        const stringIndexOne = parseInt(prompt('Enter the index of the unicode letter you want to know '));
        console.log(userString.charCodeAt(stringIndexOne));
        break;
    case 2:
        const stringIndexTwo = parseInt(prompt('Enter the index of the letter you want to delete'));
        const newUserString = userString.slice(0, stringIndexTwo) + userString.slice(stringIndexTwo +1);
        console.log(newUserString);
        break;
    case 3:
        const stringIndexThree = parseInt(prompt('Enter the index of the letter you want to change to smile'));
        console.log(userString.substring(0, stringIndexThree) + arr[randomInt] + userString.substring(stringIndexThree+1));
        break;
    case 4:
        const newString = userString.replaceAll(' ','');
        console.log(newString.length);

}