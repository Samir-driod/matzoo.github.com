limit = 100;
function los() {

    // los
    var x = Math.round(Math.random() * 80) + 20;
    var y = Math.round(Math.random() * 80) + 15;
    while (x + y > limit) {
        x = Math.round(Math.random() * 80) + 20;
        y = Math.round(Math.random() * 80) + 15;
    }
    var wynik = x + y;
    var tab = [wynik];


    for (i = 1; i < 4; i++) {
        xn = Math.round(Math.random() * (limit - 30)) + 30;
        while (xn == tab[i - 1])
            xn = Math.round(Math.random() * limit);
        if (i == 2)
            while (xn == tab[i - 2] || xn == tab[i - 1])
                xn = Math.round(Math.random() * limit);
        if (i == 3)
            while (xn == tab[i - 3] || xn == tab[i - 2] || xn == tab[i - 1])
                xn = Math.round(Math.random() * limit);
        tab[i] = xn;
    }
    tab.sort(sortNumber);

    // wyswietl los
    $('#zadanie').html(x + ' + ' + y + ' = ');
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