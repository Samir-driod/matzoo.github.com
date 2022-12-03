
const units = [
    [1000, 'tysięcy'],
    [100, 'setek'],
    [10, 'dziesiątek'],
];


function los() {
    // los
    let losNumber = Math.round(Math.random()*15)+1;
    let x = Math.round(Math.random()*(units.length - 1));
    let counter = units[x][0];
    losNumber = losNumber*counter;



    let tab = [];
    tab[0] = losNumber;

    for (let i=1; i<4; i++) {
        tab[i] = losNumber+(counter*i);
    }

    losNumber = Math.round(Math.random()*(tab[3]-tab[0]))+tab[0];
    let wynik = Math.round(losNumber/counter)*counter;
    tab.sort(sortNumber);
    console.log(losNumber+' '+wynik);
    // show task
    const taskDiv = $('#zadanie');
    taskDiv.html('<p> Wskaż na osi zaokrąglenie liczby <b>'+losNumber+'</b> do&nbsp;'+units[x][1    ]+'. <input type="hidden" id="odp" name="odp"/></p>' +
        '<img src="imgtask/os560.png" alt="os" style="max-width: 100%;">');

    for (let i=0; i<4; i++) {

        taskDiv.append('<div class="btn btn-lgrey text-black s19 bold w-100" onclick="oblicz(\''+wynik+'\',\''+tab[i]+'\')" >'+tab[i]+'</div> ');
    }

    $('#wynik').val(wynik);
    $('#odp').focus();

}


function oblicz(x, i) {

    if (x === i) {
        countCorrect();
        cleanSpace();
        los();
    } else {
        const statement = 'Wybrano złą odpowiedź.';
        countWrong(statement);
    }
}


$(document).ready(function() {

    los();
    const taskDiv = $('#zadanie');
    taskDiv
        .removeClass('wyraz1');
    taskDiv
        .addClass('tekstowe')
        .addClass('s17')
        .addClass('os692');

});