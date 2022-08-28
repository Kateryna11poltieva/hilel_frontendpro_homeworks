const COFFEE_TYPES = {
    Espresso: [
        {
            title: `Ristretto`,
            ingredients: {
                espresso: 20
            }
        },
        {
            title: `Espresso`,
            ingredients: {
                espresso: 60
            }
        },
        {
            title: `Lungo`,
            ingredients: {
                espresso: 100
            }
        },
        {
            title: `Americano`,
            ingredients: {
                espresso: 40,
                water: 60
            }
        }
    ],
    EspressoMilk: [
        {
            title: `Macchiato`,
            ingredients: {
                espresso: 20,
                "milk foam": 10
            }
        },
        {
            title: `Flat White`,
            ingredients: {
                espresso: 55,
                "milk foam": 45
            }
        },
        {
            title: `Cappuccino`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 15
            }
        },
        {
            title: `Latte`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 20
            }
        },
        {
            title: `Mocha`,
            ingredients: {
                "chocolate syrop": 15,
                espresso: 15,
                milk: 18,
                "milk foam": 15
            }
        }
    ],
    Alcoholic: [
        {
            title: `Irish Coffee`,
            ingredients: {
                espresso: 50,
                whiskey: 10,
                "whipped cream": 40
            }
        },
        {
            title: `Corretto`,
            ingredients: {
                espresso: 90,
                brandy: 10
            }
        },
        {
            title: `Baileys Hot Coffee`,
            ingredients: {
                espresso: 30,
                "warm milk": 20,
                "baileys irish cream": 30
            }
        }
    ],
    Dessert: [
        {
            title: `Affogato`,
            ingredients: {
                espresso: 25,
                "ice cream": 20,
                "whipped cream": 10,
                chocolate: 10
            }
        },
        {
            title: `Frappe`,
            ingredients: {
                espresso: 30,
                ice: 10,
                milk: 50
            }
        },
        {
            title: `Glace`,
            ingredients: {
                espresso: 50,
                "grated chocolate": 10,
                "ice cream": 30
            }
        }
    ]
}

class Coffee {
    constructor(coffee) {
        Object.assign(this, coffee);
    }

    makeCoffee() {
        const coffeeType = this.kind ? `coffee--${this.kind}` : "";

        const divCup = `<div class="cup">
    <div class="coffee ${coffeeType}">
        <div class="coffee__ingredients">
           ${this.renderIngredients()}
        </div>
    </div>
    <p class="coffee__title">${this.title}</p>
</div>`

        return divCup

    }

    renderIngredients() {
        return Object
            .entries(this.ingredients)
            .map(([key, value]) => {
                return `<p style="height: ${value}%" class="ingredient ${key.replaceAll(' ', '__')}">${key}</p>`
            })
            .join('')

    }


}


class Espresso extends Coffee {
    constructor(data) {
        super(data);
        this.kind = 'espresso'
    }
}

class EspressoMilk extends Coffee {
    constructor(data) {
        super(data);
        this.kind = 'espressoMilk'
    }
}

class Alcoholic extends Coffee {
    constructor(data) {
        super(data);
        this.kind = 'alcoholic'
    }
}

class Dessert extends Coffee {
    constructor(data) {
        super(data);
        this.kind = 'dessert'
    }
}


const NEW_CUPS = {
    Espresso: cup => new Espresso(cup),
    EspressoMilk: cup => new EspressoMilk(cup),
    Alcoholic: cup => new Alcoholic(cup),
    Dessert: cup => new Dessert(cup),

}
const defaultCoffeeHTML = new Coffee({
    title: `Default Coffee`,
    ingredients: {
        espresso: 50,
        whiskey: 10,
        "whipped cream": 40
    }
}).makeCoffee()


let coffeeTypesHTML = Object.entries(COFFEE_TYPES)
    .map(([type, cups]) => cups.map(element => NEW_CUPS[type] ? NEW_CUPS[type](element) : new Coffee(element)))
    .flat()
    .map(cup => cup.makeCoffee())

const resultHTML = [defaultCoffeeHTML, ...coffeeTypesHTML].join('');

document.write(`<section class="cups">${resultHTML}</section>`);