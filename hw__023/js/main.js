const controller = async (url, method = 'GET', obj) => {
    let options = {
        method: method,
        headers: {
            "Content-type": "application/json"
        }
    }

    if (obj) options.body = JSON.stringify(obj);

    let request = await fetch(url, options);
    let response = request.ok ? request.json() : Promise.catch(request.statusText);

    return response;
};

const API = `https://61c9d37520ac1c0017ed8eac.mockapi.io`;

const createHeroComics = document.querySelector(`#createHeroComics`);
const createHero = document.querySelector(`#createHero`);
const createHeroName = document.querySelector(`#createHeroName`);
const createHeroFavorite = document.querySelector(`#createHeroFavorite`);

// renderHeroComicsSelect
const renderHeroComicsSelect = async () => {
    let comics = await controller(API + `/universes`);
    createHeroComics.innerHTML = comics
        .map(item => `<option value="${item.name}">${item.name}</option>`)
        .join(``)
}
renderHeroComicsSelect();
//renderHeroComicsSelect

//crateNewHero
createHero.addEventListener(`submit`, async e => {
    e.preventDefault();

    try {

        let heroName = createHeroName.value;

        let newHero = {
            name: heroName,
            comics: createHeroComics.value,
            favourite: createHeroFavorite.checked,
        };

        let storageHeroes = await controller(API + `/heroes `);
        let notAvailableHeroName = storageHeroes.find(hero => hero.name === heroName);

        if (notAvailableHeroName) {
            console.log(`Герой з ім'ям ${newHero.name} вже є в базі, пошукайте іншого героя`)
            return
        }

        let addedHero = await controller(API + `/heroes `, `POST`, newHero);
        renderHero(addedHero);
    } catch (err) {
        console.log(err)
    }

})
//crateNewHero

// updateHeroFavorite

const updateHeroFavorite = async (favourite, id) => {

    try {
        let updatedHero = await controller(API + `/heroes/${id} `, `PUT`, {favourite});
        console.log(updatedHero)
    } catch (err) {
        const checkbox = document.getElementById(`checkbox-${id}`);
        checkbox.attributes.checked = !favourite;

    }

}

// updateHeroFavorite

//deleteHero

const deleteHero = async (id) => {
    try {
        await controller(API + `/heroes/${id} `, `DELETE`);
        document.getElementById(id).remove();

    } catch (err) {
        console.log(err);
    }
}

//deleteHero

//renderHero
const renderHero = (newHeroInformation) => {
    console.log(newHeroInformation);
    const tbody = document.getElementById(`heroTbody`)
    let tr = tbody.insertRow();
    tr.id = newHeroInformation.id;

    const name = tr.insertCell(); // cell - ячейка td
    name.innerText = newHeroInformation.name;

    const comics = tr.insertCell();
    comics.innerText = newHeroInformation.comics;


    const checkbox = document.createElement(`input`);
    checkbox.type = `checkbox`;
    checkbox.id = `checkbox-${newHeroInformation.id}`;
    checkbox.defaultChecked = newHeroInformation.favourite;
    checkbox.addEventListener(`change`, (e) => updateHeroFavorite(e.target.checked, newHeroInformation.id));

    const favoriteTd = tr.insertCell();
    favoriteTd.appendChild(checkbox);

    const deleteBtn = document.createElement(`button`);
    deleteBtn.innerText = `Delete`;
    deleteBtn.addEventListener(`click`, () => deleteHero(newHeroInformation.id));

    const deleteTd = tr.insertCell();
    deleteTd.appendChild(deleteBtn);


}

//renderHero

//renderStorageHeroes
const renderStorageHeroes = async () => {

    let table = document.createElement(`table`);
    let thead = table.createTHead();
    let tr = thead.insertRow();

    [`Name`, `Comics (DC, Marvel)`, `Favourite`, `Actions `].forEach(name => {
        const th = tr.insertCell();
        th.innerText = name;
    })

    let tbody = table.createTBody();
    tbody.id = `heroTbody`;

    document.body.appendChild(table);


    let heroes = await controller(API + `/heroes `);
    console.log(heroes);
    heroes.forEach(hero => renderHero(hero, tbody));


}

renderStorageHeroes()
//renderStorageHeroes