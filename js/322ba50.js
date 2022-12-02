dobre = 0;
wszystkie = 0;
x = 0;
odpowiedz = '';

// --------

pytania = [
    'lewo','prawo',

];
english = [
    'left','right',

];

ile_pytan = 2;

odpowiedzi = [
    'lewo',
    'prawo',
    
    
];
robaczki = ['slimak','gasienica','motyl','osa'];


// --------


$(document).ready(function() {

    ilosc = $(pytania).length - 1;
    iloscr = $(robaczki).length - 1;
    los();
});


function los() {
        // generowanie klocków
        $('#zadanie').html('');
        $('#zadanie').addClass('col-sm-11');
    var x = Math.round(Math.random() * ilosc);
    var y = Math.round(Math.random() * 10)+1;
    $('#zadanie').html('<div class="col-sm-6"><img class="img-responsive center-block" src="img/arrows/' + english[x] + '_' + y + '.png" style="max-width:50%"/></div>');
    for (i = 0; i < ile_pytan; i++) {
        $('#zadanie').append('<div id="' + i + '" onclick="oblicz(' + x + ',' + i + ')" class="btn btn-info s35" style="margin:1%;cursor:pointer;border-width:5px">'+odpowiedzi[i] + '</div>');
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