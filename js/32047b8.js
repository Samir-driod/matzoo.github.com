dobre = 0;
wszystkie = 0;

x = 0;
exam = 0;
wpisal = '';

co_ile = 5;

// --------

 function wylosuj(ile,skad) {
     
    linia = Math.round(Math.random()*skad)+1;
    linie = [];
    linie.push(linia);
    while (linie.length<ile) {
      linia = Math.round(Math.random()*skad)+1;
      while (jQuery.inArray(linia,linie)!=-1) linia = Math.round(Math.random()*skad)+1;
      linie.push(linia);
    }
    return linie;
 }    
// --------


function los() {
        // generowanie klocków
        $('#zadanie').html('');
    bloki = wylosuj(2,ilosc);
    var x = Math.round(Math.random() * ilosc)+1;
    while (x==bloki[0] || x==bloki[1]) x = Math.round(Math.random() * ilosc)+1;
    bloki.push(x);
    bloki.sort();
    $('#zadanie').append('<div class="col-sm-12 img-responsive"><img class="img-responsive center-block" src="img/ksztalty/' + x + 'c.png"></div><div>');
    $('#guziki').append('<a class="col-sm-1"></a>');

    for (i = 0; i < 3; i++) {
$('#guziki').append('<a id="' + i + '" onclick="oblicz(' + x + ',' + bloki[i] + ')" class="col-sm-3" style="cursor:pointer; border-radius:0; border:0; " class="pull-left img-responsive"><img class="img-responsive center-block btn btn-default" style="border-width:0" src="img/ksztalty/' + bloki[i] + '.png"/></a>');
    }
}


  

function oblicz(x, i) {
    // jesli dobra odpowiedź
    if (x == i) {

        countCorrect();
        cleanSpace();
        los();

    } // jeśli zła odpowiedź
    else {
        statement = ' Wybrano zły kształt.';
        countWrong(statement);
    }

}

function klik(em) {
  $('#odp').val($(em).html());
  oblicz();
}

$(document).ready(function(){

ilosc = 16;
  los();

});

