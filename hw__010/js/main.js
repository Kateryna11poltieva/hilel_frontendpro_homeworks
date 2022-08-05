const animals = [
    ['🐭','mouse','Jerry'],
    ['🐹','hamster','Biscuit'],
    ['🐰','rabbit','Bugs'],
    ['🦊','fox','Mrs. Fox'],
    ['🐻','bear','Paddington']
];

const food = [
    ['🍎','apple',10],
    ['🍐','pear',12],
    ['🍊','tangerine',15],
    ['🍋','lemon',5],
    ['🍌','banana',7]
];

const universes = [
    ['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
    ['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

function getInfo (array, nameOfTable) {
   let trs = []

    for (let i = 0; i < array.length; i++) {
        let tds = []
        let simpleArray = array[i]

        for (let j = 0; j < simpleArray.length; j++){
            let arrayNew = simpleArray[j]

            if(Array.isArray(simpleArray[j])) arrayNew = arrayNew.join().replaceAll(',', '; ')

            tds.push(`<td>${arrayNew}</td>`)
        }

        trs.push(`<tr>${tds.join('')}</tr>`)
    }

    document.write(`
    <table>
<tbody>
<caption>${nameOfTable} info</caption>
${trs.join('')}
</tbody>
</table>
    `)

}

getInfo(animals, `Animals`)
getInfo(food, `Food`)
getInfo(universes, `Universes`)
















