const userData = {
    USD: 1000,
    EUR: 900,
    UAH: 15000,
    BIF: 20000,
    AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

const answer = confirm(`Подивитися баланс карті?`);

const getMoney = (answer) => {
    return new Promise(
        function (resolve, reject) {
            answer ? resolve() : reject();
        }
    )
}

getMoney(answer)
    .then(function () {

        let availableCurrency;

        do {
            let balanceCurrently = prompt(`Введіть валюту у якій має відображатися баланс `);
            availableCurrency = Object.keys(userData).includes(balanceCurrently?.replaceAll(' ', '').toUpperCase());
            console.log(`Баланс становить: ${userData[balanceCurrently]} ${balanceCurrently}`);

        } while (!availableCurrency)

    })
    .catch(function () {
        let currentlyToWithdraw;
        let maxAvailable = 0;
        let withdrawCurrently;

        do {
            withdrawCurrently = prompt(`Введіть валюту у якій хочете зняти гроші`);

            currentlyToWithdraw = Object.keys(userData).includes(withdrawCurrently?.replaceAll(' ', '').toUpperCase());
            maxAvailable = bankData[withdrawCurrently].max;

        } while (!currentlyToWithdraw && maxAvailable === 0);

        let withdrawCash = prompt(`Введіть суму у яку хочете зняти з рахунку`);

        let minAvailable = bankData[withdrawCurrently].min;
        let cashImg = bankData[withdrawCurrently].img;

        if (withdrawCash > maxAvailable || withdrawCash > userData[withdrawCurrently]) {
            console.log(`Введена сума більша за доступну. Максимальна сума зняття: ${withdrawCash > maxAvailable ? maxAvailable : userData[withdrawCurrently]}`);

        } else if (withdrawCash < minAvailable) {
            console.log(`Введена сума менша за доступну. Мінімальна сума зняття: ${minAvailable}`);
        } else {
            console.log(`От Ваші гроші ${withdrawCash} ${withdrawCurrently} ${cashImg}`);
        }
    })
    .finally(
        function () {
            console.log('Дякую, гарного дня 😊')
        }
    )


