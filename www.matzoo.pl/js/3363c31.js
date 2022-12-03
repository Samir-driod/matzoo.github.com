

pytania  =     ['zero', 'jeden', 'dwa', 'trzy', 'cztery', 'pięć', 'sześć', 'siedem', 'osiem', 'dziewięć'];
odpowiedzi  =  ['zero', 'jeden', 'dwa', 'trzy', 'cztery', 'piec', 'szesc', 'siedem', 'osiem', 'dziewiec'];

    
    
 function wylosuj(ile,skad) {
    linia = Math.round(Math.random()*skad);
    linie = [];
    linie.push(linia);
    while (linie.length<ile) {
      linia = Math.round(Math.random()*skad);
      while (jQuery.inArray(linia,linie)!=-1) linia = Math.round(Math.random()*skad);
      linie.push(linia);
    }
    return linie;
 }    
// --------

function los(last) {

    

    // generowanie klocków
    bloki = wylosuj(2,ilosc);
    var x = Math.round(Math.random() * ilosc);
    while (x==bloki[0] || x==bloki[1] || x==last) x = Math.round(Math.random() * ilosc);
    bloki.push(x);
    bloki.sort();
    $('#zadanie').html(pytania[x] + '<br/>');
    
    for (i = 0; i < ile_pytan; i++) {
        $('#guziki').append('<a id="' + i + '" onclick="oblicz(' + x + ',' + bloki[i] + ')" class="btn btn-matzoo33 gradient-kropki3 btn-pink text-black s60">'+bloki[i]+'</a> ');
    }


}

$(document).ready(function() {

    ilosc = $(pytania).length - 1;
    ile_pytan = 3;
    co_ile = 1;
    var last = 1;
    los(last);
    $('#zadanie').addClass('s45');  
    

});

function oblicz(x, i) {

    if (x == i)  {
            countCorrect();
            cleanSpace();
            los();
  }
  else {   
      var statement = 'Wybrano złą odpowiedź.';
      countWrong(statement);
  }
}