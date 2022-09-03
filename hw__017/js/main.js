const lastLis = document.querySelectorAll(`li:last-of-type`);

const setClassLastLis = () => lastLis.forEach(li => li.classList.add(`last`))
setTimeout(setClassLastLis, 2000)



const root = document.querySelector("ul.root");

const setFirstItemClassName = (ul, level) => {
    level--;

    if(level > 0) {
        let LIs = [...ul.children];
        LIs.forEach(li => {
            let innerUls = [...li.children];
            innerUls.forEach(ul => setFirstItemClassName(ul, level));
        })
    } else {
        let firstLis = ul.querySelector(`li:first-of-type`);
        setTimeout(() => firstLis.classList.add(`first`), 2000);
    }
}

setFirstItemClassName(root, 2);
