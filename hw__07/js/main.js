let arr = [];
let length = arr.length;

do {
    length = parseInt(prompt(`Enter the desired length of the array (from 2 to 10)`));

    if (length < 0) {
        length = Math.abs(length);
        break;

    }else if (length % 1 !== 0) {
        length = Math.round(length);
        break;
    }

} while (length < 2 || length > 10);

console.log(length)
let productOfNumbers = 1;

for (let i = 0;  i < length; i++){

    arr[i] = Math.round(Math.random()*10);
    productOfNumbers += arr[i];
}

console.log(arr);
console.log(productOfNumbers);

