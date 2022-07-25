let userBurger;

do {

    userBurger = prompt(`Choose type of burger (hamburger or cheeseburger)`);

    if (userBurger) userBurger = userBurger.replaceAll(' ', '').toLowerCase();

} while (!userBurger || (userBurger !== `hamburger` && userBurger !== `cheeseburger`));

console.log(userBurger)

const hamburgerPrice = 10;
const cheeseburgerPrice = 15;
let burgerPrice = 0;

switch (userBurger) {

    case "hamburger":
        burgerPrice += hamburgerPrice;
        break;

    case "cheeseburger":
        const doubleCheese = confirm(`Would you like to add double cheese?`);
        const doubleCheesePrice = 5;

        if (doubleCheese) {
            burgerPrice = cheeseburgerPrice + doubleCheesePrice;
        } else {
            burgerPrice += cheeseburgerPrice;
        }

        break;
}

console.log(`burger price ${burgerPrice}`);

let potato = confirm(`Would you like potato?`);
let potatoPrice = 0;
if (potato) {
    let potatoSize;
    const smallPotatoPrice = 10;
    const middlePotatoPrice = 15;
    const bigPotatoPrice = 20;

    do {

        potatoSize = prompt(`Choose potato size: small/middle/big`);

        if (potatoSize === '' || potatoSize === null) {

            potatoPrice += smallPotatoPrice;
            break;

        } else if (potatoSize) {

            potatoSize = potatoSize.replaceAll(' ', '').toLowerCase();
        }


    } while (potatoSize !== `small` && potatoSize !== `middle` && potatoSize !== `big`)

    switch (potatoSize) {
        case "small":

            potatoPrice += smallPotatoPrice;
            break;

        case "middle":

            potatoPrice += middlePotatoPrice;
            break;

        case "big":
            potatoPrice += bigPotatoPrice;
            break;
    }

}

console.log(` potato price ${potatoPrice}`);

let sauce = confirm(`Would you like sauce?`);
let saucePrice = 0;

if (sauce) {
    let sauceType;
    const mayonnaisePrice = 3;
    const ketchupPrice = 2;

    do {
        sauceType = prompt(`Choose sauce: ketchup/mayonnaise`)

        if (sauceType === '' || sauceType === null) {

            saucePrice += ketchupPrice;
            break;

        } else if (sauceType) {

            sauceType = sauceType.replaceAll(' ', '').toLowerCase();
        }

    } while (sauceType !== `mayonnaise` && sauceType !== `ketchup`)

    switch (sauceType) {

        case "mayonnaise":
            saucePrice += mayonnaisePrice;
            break;

        case "ketchup":
            saucePrice += ketchupPrice;
            break

    }
}

console.log(`sauce price ${saucePrice}`)

let totalPrice = burgerPrice + potatoPrice + saucePrice;

console.log(`total price ${totalPrice}`)