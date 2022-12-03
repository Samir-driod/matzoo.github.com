limit = 20;
function los() {

    // los
    var x = Math.round(Math.random() * limit);
    var y = Math.round(Math.random() * limit);
    while (x < y) {
        x = Math.round(Math.random() * limit);
        y = Math.round(Math.random() * limit);
    }
    var wynik = x - y;
    var tab = [wynik];


    for (i = 1; i < 4; i++) {
        xn = Math.round(Math.random() * limit);
        tab[i] = xn;
    }
    tab.sort(sortNumber);



    // wyswietl los
    $('#zadanie').html(x + ' - ' + y + ' = ');
    $('#wynik').val(wynik);
    for (i = 0; i < 4; i++)
        $('#guziki').append('<span class="btn btn-lsuccess btn-matzoo33 gradient-kropki3 s50 text-black" onclick="klik(this)">' + tab[i] + '</span>');

}


function oblicz() {

    // jesli dobra odpowiedź
    if ($('#odp').val() == $('#wynik').val()) {

        countCorrect();
        cleanSpace();
        los();

    } // jeśli zła odpowiedź
    else {

        countWrong();
    }
}

function klik(em) {
    $('#odp').val($(em).html());
    oblicz();
}


$(document).ready(function () {

    los();

});