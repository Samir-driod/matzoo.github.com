dobre = 0;
zle = 0;
x = 0;
odpowiedz = '';

ile_pytan = 4;

function los() {
    //los
    pytania = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    ilosc = $(pytania).length - 5;

    // generowanie klocków
    kolejnosc = [];
    var k = Math.round(Math.random() * 3);
    kolejnosc.push(k);
    k = Math.round(Math.random() * 3);
    i = 1;
    while ($(kolejnosc).length < 4) {
        while (jQuery.inArray(k, kolejnosc) != -1) {
            k = Math.round(Math.random() * 3);

        }
        kolejnosc.push(k);
    }

    var x = Math.round(Math.random() * ilosc);
    $('#zadanie').html('');
    $('#zadanie').addClass('col-md-10');
    $('#zadanie').css('padding', '0 20%');
    color_tab = ['warning', 'danger', 'success', 'info', 'primary'];
    color_los = Math.round(Math.random() * 4);
    color = color_tab[color_los];
    // wyswietl los
    for (i = 0; i < 4; i++) {
        $('#zadanie').append('<a class="btn btn-matzoo gradient-kropki3 btn-' + color + ' s60" style="width:45%;display:block; float:left;margin:2%" id="' + kolejnosc[i] + '" onclick="oblicz(' + kolejnosc[i] + ')">' + pytania[kolejnosc[i] + x] + '</a>');
        if (i % 2 == 1)
            $('#zadanie').append('<br>');
    }
    $('#x').val(0);
    nielicz = 0;

    $('#wynik').val(wynik);
    $('#odp').focus();

}


function oblicz(i) {

    x = parseInt($('#x').val());
    
    // jesli dobra odpowiedz
    if (x == i) {
        
        countCorrect();
        $('#zadanie').delay(500).val('');
        
        if (x != 3) {
            $('#' + x).css('opacity', '0.4');
            x = x + 1;
            $('#x').val(x);
        } else {
            los();
        }

    } // jeśli zła odpowiedź
    else {
        countWrong();
        $('#nie').fadeIn('').delay(500).fadeOut('');
        $('#zadanie').delay(500).val('');
        $('#zle_odp').fadeIn("fast");
    }
}

function klik(em) {
    $('#odp').val($(em).html());
    oblicz();
}


$(document).ready(function () {

    los();

});