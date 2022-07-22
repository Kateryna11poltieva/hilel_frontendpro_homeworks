const userConfirm = confirm('Tell me three most important words 💚')

if(userConfirm){
    const wordCounts = 3;
    let finalWords ='';

    for (let i=1; i<= wordCounts; i++) {

        let word,
            wordWithNumber;
        do {
            word = prompt(`Enter word #${i}`);

            if(word){
                word = word.trim();
                wordWithNumber = false;

                for (let j = 0; j < word.length; j++){
                    let letter = word[j];

                    if (!isNaN(+letter)) {
                        wordWithNumber = true;
                        break;
                    }
                }
            }

        }while (!word || wordWithNumber);

        let register;

        do {
            register = prompt(`Choose formating style: uppercase or lowercase or capitalize`);

            if (register){

                register = register.replaceAll(' ', '').toLowerCase();
            }

        }while (!register || (register !== `uppercase` &&  register !== `lowercase` && register !== `capitalize`));


        switch (register) {
            case `uppercase`:
                word = word.toUpperCase();
                break;
            case `lowercase`:
                word = word.toLowerCase();
                break;
            case "capitalize":
                word = word[0].toUpperCase() + word.slice(1).toLowerCase();
                break;
        }

        finalWords += word;
        finalWords += i === wordCounts ? '!' : ' ';
    }

    console.log(finalWords)
}