const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
}
function convert(object) {
    let myObj ={}

    for(let keys in object){
        if (typeof(object[keys]) === 'object') {

            for (let items in object[keys]) {
                myObj[items] = object[keys][items]
            }

        } else {
            myObj[keys] = object[keys]
        }
    }

    return myObj
}

console.log(convert(obj))