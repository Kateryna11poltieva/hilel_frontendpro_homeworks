const select = document.getElementById("jokesCategories");
const list = document.getElementById("jokesList");

const getCategories = () => {
    fetch("https://api.chucknorris.io/jokes/categories").then(res => res.json())
        .then(options => options.forEach(optionText => {
            const option = new Option(optionText, optionText, false, false)
            select.appendChild(option)
        }));
}


const onSelectCategory = (e) => {
    const category = e.target.value;
    toggleOptionStatus(category, true);

    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(res => res.json())
        .then(joke => {
            return renderJokeInList(category, joke)
        })
}

const toggleOptionStatus = (category, disabledStatus) => {
    const options = [...select.options];
    const targetOption = options.find(el => el.value === category);

    targetOption.disabled = disabledStatus;
}

const renderJokeInList = (category, joke) => {
    const jokeCategory = document.createElement("p");
    const jokeText = document.createElement("p");
    const removeButton = document.createElement("button");

    const listElement = document.createElement("li");

    listElement.setAttribute("id", category);

    jokeCategory.innerHTML = `Category: <b>${category}</b>`
    jokeText.innerText = joke.value;
    removeButton.innerText = `Remove joke`;
    removeButton.addEventListener("click", () => onRemoveJoke(category))

    listElement.appendChild(jokeCategory);
    listElement.appendChild(jokeText);
    listElement.appendChild(removeButton);

    list.appendChild(listElement);
}


const onRemoveJoke = (category) => {
    toggleOptionStatus(category, false);
    document.getElementById(category).remove();
}

document.addEventListener('DOMContentLoaded', (event) => {
    select.addEventListener("change", onSelectCategory);
    getCategories();
});

