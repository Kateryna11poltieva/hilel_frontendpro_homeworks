const users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
];
let arrayExclamationPoint = JSON.parse(JSON.stringify(users))
arrayExclamationPoint.forEach( (item)=> {
    item[0] += "!"
});

console.log(arrayExclamationPoint, "Exclamation Point")

let arrayQuestionMark = JSON.parse(JSON.stringify(users))
    .map(user => {
        user[0] = user[0] +'?'
        return user
    })
console.log(arrayQuestionMark, "Question Mark")


let redTeam = users.filter(item => item[1] === "red")

let THEAD = [`Name`, `Comand`, `Score`, `Data`];

const getThead = array => {
    return `<thead>
    <tr>
        ${array.map(item => `<th>${item}</th>`).join('')}
    </tr>
    </thead>`
}

const getTbody = array => {
    return `<tbody>
             ${
        array.map(user => `<tr>${user
            .map(item => `<td>${item}</td>`).join('')}</tr>`)
            .join('')
    }
        </tbody>`
}

const usersTable = (thead,data) => {

    let scoreSum = data
        .map(user => user[2])
        .reduce((sum, item) => sum+item);

    let table =`<table>
        ${getThead(thead)}
        ${getTbody(data)}
        <tfoot>
        <tr>
            <td colspan="4">Total score: ${scoreSum}</td>
        </tr>
        </tfoot>        
    </table>`

   return  document.write(table)
}

usersTable(THEAD,redTeam)