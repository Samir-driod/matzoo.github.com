function los() {
    $('#zadanie').html('');
    // los
    var x = Math.round(Math.random() * 19) + 31;
    var y = Math.round(Math.random() * 30) + 18;
    var z = Math.round(Math.random() * 40) + 10;
    var example = Math.round(Math.random() * 3);
    while (x == y || x == z || y == z) {
        x = Math.round(Math.random() * 19) + 31;
        y = Math.round(Math.random() * 30) + 18;
        z = Math.round(Math.random() * 40) + 10;
    }
    var wynik = x;
    if (y > x && y > z)
        wynik = y;
    if (z > x && z > y)
        wynik = z;


    // wyswietl los
    $('#wynik').val(wynik);
    if (example == 1) {
        $('#guziki').append('<span class="btn btn-matzoo33 btn-info s60" onclick="klik(this)">' + x + '</span>');
        $('#guziki').append('<span class="btn btn-matzoo33 btn-success s60" onclick="klik(this)">' + y + '</span>');
        $('#guziki').append('<span class="btn btn-matzoo33 btn-primary s60" onclick="klik(this)">' + z + '</span>');
    } else if (example == 2) {
        $('#guziki').append('<span class="btn btn-matzoo33 btn-info s60" onclick="klik(this)">' + x + '</span>');
        $('#guziki').append('<span class="btn btn-matzoo33 btn-success s60" onclick="klik(this)">' + z + '</span>');
        $('#guziki').append('<span class="btn btn-matzoo33 btn-primary s60" onclick="klik(this)">' + y + '</span>');
    } else if (example == 3) {

        $('#guziki').append('<span class="btn btn-matzoo33 btn-info s60" onclick="klik(this)">' + z + '</span>');
        $('#guziki').append('<span class="btn btn-matzoo33 btn-success s60" onclick="klik(this)">' + y + '</span>');
        $('#guziki').append('<span class="btn btn-matzoo33 btn-primary s60" onclick="klik(this)">' + x + '</span>');
    } else {
        $('#guziki').append('<span class="btn btn-matzoo33 btn-info s60" onclick="klik(this)">' + z + '</span>');
        $('#guziki').append('<span class="btn btn-matzoo33 btn-success s60" onclick="klik(this)">' + x + '</span>');
        $('#guziki').append('<span class="btn btn-matzoo33 btn-primary s60" onclick="klik(this)">' + y + '</span>');

    }
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