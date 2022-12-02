dobre = 0;
wszystkie = 0;
x = 0;
odpowiedz = '';

// --------

pytania = [
    'prawo',
    'lewo',
    'góra',
    'dół',
];

ile_pytan = 4;

odpowiedzi = [
    'prawo',
    'lewo',
    'gora',
    'dol',
];

robaczki = ['mslimak','mgasienica','mmotyl','mosa'];

// --------


$(document).ready(function() {

    ilosc = $(pytania).length - 1;
    iloscr = $(robaczki).length - 1;    
    last = 1;
    los(last);
    $('#content20').css('padding-left','5%');
      $('#zadanie').addClass('col-sm-10');
    
});


function los(last) {
        // generowanie klocków
        $('#zadanie').html('');
    var x = Math.round(Math.random() * ilosc);
    while (last==x) {
        x = Math.round(Math.random() * ilosc);
    }
        var y = Math.round(Math.random() * iloscr);
    $('#zadanie').html('<div>'+pytania[x] + '</div>');
    //$('#zadanie').append('<div class="col-sm-2">&nbsp;</div>');
    for (i = 0; i < ile_pytan; i++) {
        $('#zadanie').append('<div id="' + i + '" onclick="oblicz(' + x + ',' + i + ')" class="col-sm-3" style="cursor: pointer; padding: 1%;"><img class="img-responsive pull-left btn btn-default" style="border-width:0px" src="img/robaczki/' + robaczki[y] + '_' + odpowiedzi[i] + '.png"/></div>');
    }
    $('#zadanie').append('');
}


function oblicz(x, i) {

      // jesli dobra odpowiedź
    if (x == i) {

        countCorrect();
        cleanSpace();
        los();

    } // jeśli zła odpowiedź
    else {
        statement = ' Wybrano zły kierunek.';
        countWrong(statement);
    }

}