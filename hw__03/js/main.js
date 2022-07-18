const userName = prompt('Enter your name please');
const userSurname = prompt('Enter your surname please');
const dayOfBirth = parseInt(prompt('Enter your birth day please'));
const monthOfBirth = parseInt(prompt('Enter your birth month please'));
const yearOfBirth = parseInt(prompt('Enter your year of birth please'));
const ACTUAL_YEAR = 2022;
let zodiac = ''

const userAge = ACTUAL_YEAR - yearOfBirth;

switch (monthOfBirth) {
    case 1:
        if(dayOfBirth <= 19){
            zodiac = `Capricorn ♑`
        }else {
            zodiac = `Aquarius ♒`
        }
        break;
    case 2:
        if(dayOfBirth <= 18){
            zodiac = `Aquarius ♒`
        }else {
            zodiac = `Pisces ♓`
        }
        break;
    case 3:
        if(dayOfBirth <= 20){
            zodiac = `Pisces ♓`
        }else {
            zodiac = `Aries ♈`
        }
        break;
    case 4:
        if(dayOfBirth <= 19){
            zodiac = `Aries ♈`
        }else {
            zodiac = `Taurus ♉`
        }
        break;
    case 5:
        if(dayOfBirth <= 20){
            zodiac = `Taurus ♉`
        }else {
            zodiac = `Gemini ♊`
        }
        break;
    case 6:
        if(dayOfBirth <= 21){
            zodiac = `Gemini ♊`
        }else {
            zodiac = `Cancer ♋`
        }
        break;
    case 7:
        if(dayOfBirth <= 22){
            zodiac = `Cancer ♋`
        }else {
            zodiac = `Leo ♌`
        }
        break;
    case 8:
        if(dayOfBirth <= 22){
            zodiac = `Leo ♌`
        }else {
            zodiac = `Virgo ♍`
        }
        break;
    case 9:
        if(dayOfBirth <= 22){
            zodiac = `Virgo ♍`
        }else {
            zodiac = `Libra ♎`
        }
        break;
    case 10:
        if(dayOfBirth <= 22){
            zodiac = `Libra ♎`
        }else {
            zodiac = `Scorpio ♏`
        }
        break;
    case 11:
        if(dayOfBirth <= 22){
            zodiac = `Scorpio ♏`
        }else {
            zodiac = `Sagittarius ♐`
        }
        break;
    case 12:
        if(dayOfBirth <= 21){
            zodiac = `Sagittarius ♐`
        }else {
            zodiac = `Capricorn ♑`
        }
        break;
}


if ((yearOfBirth % 400 === 0) || (yearOfBirth % 100 !== 0) && (yearOfBirth % 4 === 0)) {
    alert(`User Bio: ${userName} ${userSurname}, ${userAge} years old (leap year), ${zodiac}`);
} else {
    alert(`User Bio: ${userName} ${userSurname}, ${userAge} years old, ${zodiac}`);
}