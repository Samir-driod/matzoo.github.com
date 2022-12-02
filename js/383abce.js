
function los() {

    // los
    var zdania = [
        ['Jedziemy ze stałą prędkością. Im dłużej jedziemy, tym większą przebywamy drogę', 0],
        ['Im szybciej jedzie pociąg (ze stałą prędkością), tym krócej przejedzie 200 km', 1],
        ['Im szybciej biegnie biegacz, tym krócej pokona dystans 5 km', 1],
        ['Im krócej się uczę, tym więcej mam wolnego czasu', 0],
        ['Im więcej robotników, tym krótszy czas wykonania pracy (przy takiej samej wydajności)', 1],
        ['Im więcej kawałków ciasta, tym mają one mniejszą wielkość', 1],
        ['Im więcej dziewcząt w klasie, tym mniej w niej chłopców', 0],
        ['Im więcej kosiarek kosi trawnik, tym mniej potrzeba czasu, aby został cały skoszony', 1]
    ];

    var losuj = Math.round(Math.random() * 7);

    if (zdania[losuj][1] == 1) {
        var wynik = 'TAK';
    }
    else
        wynik = 'NIE';

    // wyswietl los
    $('#zadanie').addClass('tekstowe');
    $('#zadanie').addClass('s21');
    $('#zadanie').html('<p>' + zdania[losuj][0] + '.</p><p class="text-center"><span class="btn btn-matzoo btn-success" onclick="klik(this)">TAK</span> <span class="btn btn-matzoo btn-danger" onclick="klik(this)">NIE</span><input type="hidden" id="odp" name="odp"/></p>');
    $('#wynik').val(wynik);
    $('#odp').focus();



}

function createStatement() {
}

function klik(em) {
    $('#odp').val($(em).html());
    obliczEnter(1);
}


$(document).ready(function () {

    los();


});