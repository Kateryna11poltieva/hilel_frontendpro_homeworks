
const block = document.querySelector(`#block`);
const p = document.querySelector(`p`);

const step = 10;
let activeBlock;
block.addEventListener(`click`, () => activeBlock = block);

const windowHeight = document.body.clientHeight;
const windowWidth = document.body.clientWidth;

const setClassBams = () => {
    p.classList.add(`bams`);
    setTimeout(()=> p.classList.remove(`bams`), 2000)
};

const getBounce = () => {
    block.classList.add(`bounce`);
    document.addEventListener(`keyup`, event => block.classList.remove(`bounce`))
};

const getSquat = () => {
    block.classList.add(`squat`);
    document.addEventListener(`keyup`, event => block.classList.remove(`squat`))
}


const movingUp = block => {
    const {y} = block.getBoundingClientRect();

    if (y > step) {
        block.style.top = `${y - step}px`;
    } else {
        block.style.top = `${y + (step*2)}px`;
        setClassBams()
    }
};

const movingDown = block => {
   const {bottom, y} = block.getBoundingClientRect();
   const height = windowHeight - bottom;

   if (height >= step) {
       block.style.top = `${y + step}px`;
   } else {
       block.style.top = `${y - (step*2)}px`;
       setClassBams();
   }

};

const movingLeft = block => {
    const {x} =  block.getBoundingClientRect();
    if (x >= step) {
        block.style.left = `${x - step}px`;
    } else {
        block.style.left = `${x + (step*2)}px`;
        setClassBams();
    }
};

const movingRight = block => {
    const {right, x} = block.getBoundingClientRect();
    const width = windowWidth - right;

    if (width >= step) {
        block.style.left = `${x + step}px`;
    } else {
        block.style.left = `${x - (step*2)}px`;
        setClassBams();
    }

};

const EVENTS = {
    37: block => movingLeft(block),
    38: block => movingUp(block),
    39: block => movingRight(block),
    40: block => movingDown(block),
    32: block => getBounce(block),
    17: block => getSquat(block)
}

document.addEventListener(`keydown`, event => {
    activeBlock && EVENTS[event.keyCode] && EVENTS[event.keyCode](activeBlock);
})