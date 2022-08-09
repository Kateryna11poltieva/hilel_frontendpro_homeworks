const products = [
    ["apple", 10],
    ["banana", 8],
    ["mango", 20],
    ["grape", 18]
];

function summerValue(value) {
    return value * 0.8;
}

function winterValue(value) {
    return value * 2;
}


function getPrice(products, seasonFunc) {
    const copiedProducts = JSON.parse(JSON.stringify(products));
    let price = 0;

    copiedProducts.forEach((el) => {
        el[1] = seasonFunc ? seasonFunc(el[1]) : el[1];
    });

    copiedProducts.forEach((el) => {
        price += el[1];
    });

    return price;
}

console.log(getPrice(products, summerValue));
console.log(getPrice(products, winterValue));
console.log(getPrice(products));