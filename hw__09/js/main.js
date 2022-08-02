let sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
];

let summer_sports = sports.slice(5);
let winter_sports = sports.slice(0,5);
let fruitsFromSummer = summer_sports.splice(2,2) ;
let fruitsFromWinter = winter_sports.splice(2,1);
let fruits = fruitsFromWinter.concat(fruitsFromSummer);

console.log(`*** Winter sports ***
${winter_sports.join('\n').replaceAll(',', ':')}`);
console.log(`*** Summer sports ***
${summer_sports.join('\n').replaceAll(',', ':')}`);
console.log(`*** Fruits ***
${fruits.join('\n').replaceAll(',', ':')}`);



