
limit = 98;

function los() {

    // los
    var x = Math.round(Math.random() * limit) + 2;
    if (x % 2 == 0)
        var wynik = 'parzysta';
    else
        wynik = 'nieparzysta';

    // wyswietl los
    $('#zadanie').html(x + '<input type="hidden" name="x" id="x" value="' + x + '" />');
    $('#wynik').val(wynik);
    $('#guziki').append('<span class="btn btn-matzoo btn-info" value="parzysta" onclick="klik(this)">parzysta</span>');
    $('#guziki').append('<span class="btn btn-matzoo btn-info" value="nieparzysta" onclick="klik(this)">nieparzysta</span>');

}


function oblicz() {

    // jesli dobra odpowiedź
    if ($('#odp').val() == $('#wynik').val()) {

        countCorrect();
        cleanSpace();
        los();

    } // jeśli zła odpowiedź
    else {

        // tworzenie poprawnej odpowiedzi systemowej
        wynik = $('#wynik').val();
        if (wynik=='parzysta') wrong = 'nieparzysta';
        else wrong = 'parzysta';
        x = ($('#x').val());
        y = ($('#y').val());
        wyn = parseInt(x) + parseInt(y);
        var statement = ' ' + x + ' to liczba ' + wynik + '. <span class="s15 pull-right black" style="font-family: ">wybrano: ' + wrong + '</span>';
        countWrong(statement);
        cleanSpace();
        los();
    }

}

function klik(em) {
    $('#odp').val($(em).html());
    oblicz();
}

$(document).ready(function () {

    los();

});