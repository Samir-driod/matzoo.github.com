xn = 0;
yn = 0;
limit = 10;
function los() {

    // los
    var x = Math.round(Math.random() * limit);
    var y = Math.round(Math.random() * limit);
    var wynik = x * y;
    var tab = [wynik];
    var n = x * y;


    for (i = 1; i < 4; i++) {
        xn = Math.round(Math.random() * limit);
        yn = Math.round(Math.random() * limit);
        n = xn * yn;
        while (n == tab[i - 1]) {
            xn = Math.round(Math.random() * limit);
            yn = Math.round(Math.random() * limit);
            n = xn * yn;
        }
        if (i == 2)
            while (n == tab[i - 2] || n == tab[i - 1]) {
                xn = Math.round(Math.random() * limit);
                yn = Math.round(Math.random() * limit);
                n = xn * yn;
            }
        if (i == 3)
            while (n == tab[i - 3] || n == tab[i - 2] || n == tab[i - 1]) {
                xn = Math.round(Math.random() * limit);
                yn = Math.round(Math.random() * limit);
                n = xn * yn;
            }
        tab[i] = n;


    }
    tab.sort(sortNumber);


    // wyswietl los
    $('#zadanie').html(x + ' · ' + y + ' = ');
    $('#wynik').val(wynik);
    for (i = 0; i < 4; i++)
        $('#guziki').append('<span class="btn btn-lsuccess btn-matzoo33 gradient s50 text-black" onclick="klik(this)">' + tab[i] + '</span>');

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