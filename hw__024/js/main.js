const URL = `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;
const $colorDots = $('#colorDots');
const $imgCar = $('#imgCar');
const $titleCar = $('#titleCar');

const renderCars = (array) => {
    array.forEach(item => renderColorDots(item));
    $colorDots.on('click', dotOnClick);
}

const renderColorDots = (item) => {
    const {color, img, title} = item;
    $colorDots.append(`<div class='dot' style="background-color: ${color}" data-img="${img}" data-title="${title}"></div>`);
}

const dotOnClick = (event) => {
    const eventTarget = $(event.target);
    if (!eventTarget.hasClass('dot')) return

    const {img, title}=$(event.target).data();
    $imgCar.attr({src: `https://mc-astro.github.io/tesla-roadster-colors/img/${img}.jpg`,alt:`car ${title}`});
    $titleCar.text(title)
}

$.ajax({
    url: URL,
    method: 'GET',
    success: data => renderCars(JSON.parse(data)),
    error: error => console.log(error),
});
