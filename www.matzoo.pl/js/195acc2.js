limit = 6;
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


    for (i = 1; i < 3; i++) {
        xn = Math.round(Math.random() * (limit - 1)) + 1;
        while (xn == tab[i - 1])
            xn = Math.round(Math.random() * limit);
        if (i == 2)
            while (xn == tab[i - 2] || xn == tab[i - 1])
                xn = Math.round(Math.random() * limit);
        tab[i] = xn;
    }
    tab.sort(sortNumber);


    // wyswietl los
    $('#zadanie').html(x + ' - ' + y + ' = ');
    $('#wynik').val(wynik);
    for (i = 0; i < 3; i++)
        $('#guziki').append('<span class="btn btn-lsuccess btn-matzoo33 gradient-kropki3 s60 text-black" onclick="klik(this)">' + tab[i] + '</span>');

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