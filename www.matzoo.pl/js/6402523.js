limit = 100;
function los() {

var example = Math.round(Math.random() * 1);

if (example==1) {

    // los
    var x = Math.round(Math.random() * limit);
    var y = Math.round(Math.random() * limit);
    while (x + y > limit) {
        x = Math.round(Math.random() * limit);
        y = Math.round(Math.random() * limit);
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

} else {
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
        xn = Math.round(Math.random() * (limit - 1)) + 1;
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
    $('#zadanie').html(x + ' - ' + y + ' = ');
    $('#wynik').val(wynik);
    for (i = 0; i < 4; i++)
        $('#guziki').append('<span class="btn btn-lsuccess btn-matzoo33 gradient s50 text-black" onclick="klik(this)">' + tab[i] + '</span>');
}
}


function oblicz() {

    // jesli dobra odpowied??
    if ($('#odp').val() == $('#wynik').val()) {

        countCorrect();
        cleanSpace();
        los();

    } // je??li z??a odpowied??
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