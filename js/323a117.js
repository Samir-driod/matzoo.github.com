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
    los();
});


function los() {
  // los
  var x = Math.round(Math.random()*4)+1;
  var gdzie = ['','na','nad','obok','pod','w'];
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
  var tresc='<img src="img/kierunki/'+gdzie[x]+obrazek[y]+'.png" class="col-sm-6">';

  $('#zadanie').addClass('col-sm-11');
  $('#zadanie').addClass('s45');
  $('#zadanie').html(tresc + '<div class="col-sm-6"><input type="hidden" id="odp" name="odp"/>\n\
<span class="btn btn-work s25 btn-'+kolor[a]+'" onclick="oblicz('+x+',2)">nad</span>\n\
<span class="btn btn-work s25 btn-'+kolor[b]+'" onclick="oblicz('+x+',4)">pod</span>\n\
<span class="btn btn-work s25 btn-'+kolor[c]+'" onclick="oblicz('+x+',3)">obok</span>\n\
<span class="btn btn-work s25 btn-'+kolor[d]+'" onclick="oblicz('+x+',1)">na</span>\n\
<span class="btn btn-work s25 btn-'+kolor[e]+'" onclick="oblicz('+x+',5)">w</span></div>');
  
  $('#wynik').val(wynik);
  $('#odp').focus();

}


function oblicz(x, i) {
    
      // jesli dobra odpowiedź
    if (x == i) {

        countCorrect();
        cleanSpace();
        los();

    } // jeśli zła odpowiedź
    else {
        statement = ' Wybrano złą odpowiedź.';
        countWrong(statement);
    }

}