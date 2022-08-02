let hero = ['Ivan'];
let native = ['York','Of'];
let destination = ['Poltava','In'];

hero.splice(0,1, 'Richard');
native.reverse();
destination.reverse().splice(1,1,'Vain');
destination.unshift('Gave','Battle');

let rainbow = hero.concat(native,destination);
let a = '';

for (let i=0; i < rainbow.length; i++) {
    switch (i){

        case 0:
            a += `<div class="rainbow__wrapper">
                       <div class="rainbow__circle red"></div>
                       <p>Richard</p>
                  </div>`;
            break;
        case 1:
            a += `<div class="rainbow__wrapper">
                       <div class="rainbow__circle orange"></div>
                       <p>Of</p>
                  </div>`;
            break;
        case 2:
            a += `<div class="rainbow__wrapper">
                       <div class="rainbow__circle yellow"></div>
                       <p>York</p>
                  </div>`;
            break;
        case 3:
            a += `<div class="rainbow__wrapper">
                       <div class="rainbow__circle green"></div>
                       <p>Gave</p>
                  </div>`;
            break;
        case 4:
            a += `<div class="rainbow__wrapper">
                       <div class="rainbow__circle blue"></div>
                       <p>Battle</p>
                  </div>`;
            break;
        case 5:
            a += `<div class="rainbow__wrapper">
                       <div class="rainbow__circle indigo"></div>
                       <p>In</p>
                  </div>`;
            break;
        case 6:
            a += `<div class="rainbow__wrapper">
                       <div class="rainbow__circle violet"></div>
                       <p>Vain</p>
                  </div>`;
            break;

    }
}

document.write(`
<section class="rainbow">
${a}
</section>
`);
