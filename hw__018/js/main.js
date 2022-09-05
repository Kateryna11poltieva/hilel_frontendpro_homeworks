let getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
const block = document.querySelector(`.block`);

const getRandomColor = () => `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`;

const setColorForBlock = () => block.style.background = getRandomColor();

const getMaxLeftPosition = () => {

    let maxWidth = document.body.clientWidth - 100;
    return `${getRandomInt(0, maxWidth)}px`
}

const getMaxTopPosition = () => {

    let maxHeight = document.body.clientHeight - 100;
    return `${getRandomInt(0, maxHeight)}px`
}

const setPosition = () => {

    block.style.left = getMaxLeftPosition();
    block.style.top = getMaxTopPosition();
}

setInterval(setPosition, 1000)
setInterval(setColorForBlock, 500)

