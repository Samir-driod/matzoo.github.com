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
  var x = Math.round(Math.random()*3)+1;
  var gdzie = ['','nad','pod','polewej','poprawej'];
  var obrazek = ['a','b','c','d'];
  var kolor = ['primary','primary','primary','primary'];
  var y = Math.round(Math.random()*1);
  var a = Math.round(Math.random()*2);
  var b = Math.round(Math.random()*2);
  var c = Math.round(Math.random()*2);
  var d = Math.round(Math.random()*2);
  var e = Math.round(Math.random()*2);
  
  var wynik = x;    
  // wyswietl los
  var tresc='<img src="img/kierunki/'+gdzie[x]+obrazek[y]+'.png" class="col-sm-7">';
  $('#zadanie').addClass('col-sm-11');
  $('#zadanie').addClass('s45');

  $('#zadanie').html(tresc + '<div class="col-sm-5"><input type="hidden" id="odp" name="odp"/>\n\
<span class="btn s25 btn-'+kolor[a]+'" onclick="oblicz('+x+',1)">nad</span>\n\
<span class="btn s25 btn-'+kolor[b]+'" onclick="oblicz('+x+',2)">pod</span>\n\
<span class="btn s25 btn-'+kolor[b]+'" onclick="oblicz('+x+',3)">po lewej</span>\n\
<span class="btn s25 btn-'+kolor[d]+'" onclick="oblicz('+x+',4)">po prawej</span></div>');
  
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