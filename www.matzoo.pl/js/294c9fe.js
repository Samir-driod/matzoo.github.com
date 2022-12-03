function los() {
        $('#zadanie').html('');
    // los
    limit = 5;
    slimit = 6;
    var s = Math.round(Math.random() * limit);
    var x = Math.round(Math.random() * 5) + 1;
    var a = Math.round(Math.random() * 5) + 1;
    var b = Math.round(Math.random() * 5) + 1;
    while (a == x || b == x || a == b) {
        x = Math.round(Math.random() * 5) + 1;
        a = Math.round(Math.random() * 5) + 1;
        b = Math.round(Math.random() * 5) + 1;
    }
        var wynik = x;
        
        var example = Math.round(Math.random() * 2);

        // wyswietl los
        $('#zadanie').html('');
        $('#wynik').val(wynik);

        for (i = 0; i < x; i++) {
            $('#zadanie').append('<img src="imgtask/toy' + s + '.png" style="margin:2px 2px 12px;" /> ');
        }

        if (example == 1) {
            $('#guziki').append('<span class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="oblicz(' + wynik + ')">' + x + '</span> ');
            $('#guziki').append('<span class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="klik(this)">' + a + '</span> ');
            $('#guziki').append('<span class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="klik(this)">' + b + '</span> ');
        } else if (example == 2) {

            $('#guziki').append('<span class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="klik(this)">' + a + '</span> ');
            $('#guziki').append('<span class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="oblicz(' + wynik + ')">' + x + '</span> ');
            $('#guziki').append('<span class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="klik(this)">' + b + '</span> ');
            d
        } else {
            $('#guziki').append('<span class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="klik(this)">' + b + '</span> ');
            $('#guziki').append('<span class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="klik($(this))">' + a + '</span> ');
            $('#guziki').append('<span class="btn btn-info btn-matzoo33 gradient-kropki3 s50" onclick="oblicz(' + wynik + ')">' + x + '</span> ');

        }
    }



function oblicz(em) {

    // jesli dobra odpowiedź
    if (em == $('#wynik').val()) {

        countCorrect();
        cleanSpace();
        los();

    } // jeśli zła odpowiedź
    else {
        
        countWrong();
    }

}

function klik(em) {
    $('#odp').val($(em));
    oblicz();
}


$(document).ready(function () {

    los();

});