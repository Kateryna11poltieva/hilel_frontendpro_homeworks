let usersBurger;

do {

    usersBurger = prompt(`Choose type of burger (hamburger or cheeseburger)`);

    if (usersBurger) usersBurger = usersBurger.replaceAll(' ', '').toLowerCase();

} while (!usersBurger || (usersBurger !== `hamburger` && usersBurger !== `cheeseburger`));

const hamburgerPrice = 10;
const cheeseburgerPrice = 15;
let burgerPrice = 0;

switch (usersBurger) {

    case "hamburger":
        burgerPrice += hamburgerPrice;
        break;

    case "cheeseburger":
        let doubleCheese = confirm(`Would you like to add double cheese?`);
        const doubleCheesePrice = 5;

        if (doubleCheese) {
            burgerPrice = cheeseburgerPrice + doubleCheesePrice;
        } else {
            burgerPrice += cheeseburgerPrice;
        }

        break;
}

let potatoPrice = 0;
let potato = confirm(`Would you like potato?`);
let potatoSize;

if (potato) {
    const smallPotatoPrice = 10;
    const middlePotatoPrice = 15;
    const bigPotatoPrice = 20;

    potatoSize = prompt(`Choose potato size: small/middle/big`);

    if (potatoSize) potatoSize = potatoSize.replaceAll(' ', '').toLowerCase();

    switch (potatoSize) {

        case "middle":

            potatoPrice += middlePotatoPrice;
            break;

        case "big":
            potatoPrice += bigPotatoPrice;
            break;

        default:
            potatoSize = "small";
            potatoPrice += smallPotatoPrice;
    }

}

let sauce = confirm(`Would you like sauce?`);
let saucePrice = 0;
let sauceType;

if (sauce) {
    const mayonnaisePrice = 3;
    const ketchupPrice = 2;

    sauceType = prompt(`Choose sauce: ketchup/mayonnaise`);

    if (sauceType) sauceType = sauceType.replaceAll(' ', '').toLowerCase();

    switch (sauceType) {

        case "mayonnaise":
            saucePrice += mayonnaisePrice;
            break;

        default:
            sauceType = `ketchup`;
            saucePrice += ketchupPrice;
    }

}

const totalPrice = burgerPrice + potatoPrice + saucePrice;

document.write(`<ul>
    <li>Bulka 🍔: ${usersBurger}</li>
    ${potato ? `<li>Potato 🍟: ${potatoSize} </li>` : ``}
    ${sauce ? `<li>Sauce 🧂: ${sauceType} </li>` : ``}
</ul>
<p>Final price: ${totalPrice}</p>`);