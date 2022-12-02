
function los() {

    // los
    var zdania = [
        ['Im dłuższy bok kwadratu, tym większy jego obwód', 1],
        ['Im dłuższy bok kwadratu, tym większe jego pole', 0],
        ['Im dłuższa krawędź sześcianu, tym większa jego objętość', 0],
        ['Jedziemy ze stałą prędkością. Im dłużej jedziemy, tym większą przebywamy drogę', 1],
        ['Im dłuższa droga na mapie, tym dłuższa w&nbsp;rzeczywistości w&nbsp;terenie', 1],
        ['Im więcej kupujemy jabłek, tym więcej za nie płacimy', 1],
        ['Kot ma cztery łapy. Dwa koty mają osiem&nbsp;łap', 1],
        ['Im więcej dziewcząt w klasie, tym mniej w&nbsp;niej chłopców', 0],
        ['Im szybciej jedzie pociąg (ze stałą prędkością), tym krócej przejedzie 200 km', 0],
        ['Im krócej się uczę, tym więcej mam wolnego czasu', 0],
        ['Cena zeszytu i cena dwóch zeszytów', 1],
        ['Cena za SMSa i opłata za 20 SMSów', 1],
        ['Wzrost i masa człowieka', 0],
        ['Liczba przyjaciół jedzących pizzę i wielkość kawałka pizzy przypadająca na osobę', 0]
    ];


    var losuj = Math.round(Math.random() * (zdania.length-1));

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