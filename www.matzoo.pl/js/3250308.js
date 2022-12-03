dobre = 0;
wszystkie = 0;
x = 0;
odpowiedz = '';

// --------

pytania = [
    'prawo',
    'lewo',
    
];

ile_pytan = 2;

odpowiedzi = [
    'prawo',
    'lewo',
    
];
robaczki = ['slimak','gasienica','motyl','osa'];


// --------


$(document).ready(function() {

    ilosc = $(pytania).length - 1;
    iloscr = $(robaczki).length - 1;
    var last = 1;
    los(last);
    $('#zadanie').addClass('s35');
});


function los(last) {
    $('#zadanie').html('');
  // los
  var x = Math.round(Math.random()*8)+1;
  while (last==x) {
      x = Math.round(Math.random()*8)+1;
  }
  last = x;
  var gdzie = ['','lewy górny róg','górny środek','prawy górny róg', 'lewy środek','środek','prawy środek','lewy dolny róg','dolny środek','prawy dolny róg'];
  var obrazek = ['a','b','c','d'];
  var kolor = ['info','info','info','info'];
  var y = Math.round(Math.random()*2);
  var a = Math.round(Math.random()*2);
  var b = Math.round(Math.random()*2);
  var c = Math.round(Math.random()*2);
  var d = Math.round(Math.random()*2);
  var e = Math.round(Math.random()*2);
  
  var wynik = x;    
  // wyswietl los
  var tresc=gdzie[x];
  tresc = tresc+'<div style="border:3px solid #CCC;border-radius:6px;max-width:360px;overflow:hidden;margin:0 auto">';
  for (i=1;i<10;i++) {
      tresc = tresc+'<img src="img/robaczki/'+i+'.png" class="col-xs-4 btn btn-default" style="border:2px solid #CCC;cursor:pointer" onclick="oblicz('+last+','+x+','+i+')" />';
      
  }
tresc = tresc+'</div>';

  $('#zadanie').html(tresc);
  
  $('#wynik').val(wynik);
  $('#odp').focus();

}



function oblicz(last, x, i) {
    
      // jesli dobra odpowiedź
    if (x == i) {

        countCorrect();
        cleanSpace();
        los(last);

    } // jeśli zła odpowiedź
    else {
        statement = ' Wybrano złą odpowiedź.';
        countWrong(statement);
    }

}