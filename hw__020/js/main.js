const element = document.querySelector(`#element`);
const formFigure = document.querySelector(`#shapeForm`);
const shapeVariant = document.querySelector(`#shapeVariant`);
const shapeColor = document.querySelector(`#shapeColor`);
let currentShape;

const setShapeClass = (shape) => {

    if (currentShape) {
        element.classList.replace(currentShape, shape);
    } else {
        element.classList.add(`${shape}`);
    }
};

const setColor = (figureBackground) => {
    element.style.backgroundColor = figureBackground;
}

formFigure.addEventListener(`submit`, event => {
    event.preventDefault();

    let form = shapeVariant.value;
    let color = shapeColor.value;

    if (shapeVariant) {
        setShapeClass(form);
        currentShape = form;
    }

    setColor(color)

})

