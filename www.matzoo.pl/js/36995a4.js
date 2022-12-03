function createStatement() {
}

$(document).ready(function() {

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('s19');
    $('#zadanie').addClass('tekstowe');  
    los();
    keyboardEnter(1);

});


function los() {
  // los
  var a = Math.round(Math.random()*15)+5;
  var c = Math.round(Math.random()*45)+5;
  var e = Math.round(Math.random()*45)-50;
  var b = Math.round(Math.random()*9);
  var litery = ['a','b','x','y','k','c','z','n','p','d'];
  b = litery[b];
  var example = Math.round(Math.random()*4);
  


  if (example==0) {
    var tresc = 'Jeśli liczbę '+b+' powiększymy o '+a+', to&nbsp;otrzymamy '+c;
    var wynik = b+'+'+a+'='+c;
  }
  else if (example==1){
    var tresc = 'Jeśli liczbę '+b+' pomniejszymy o '+a+', to&nbsp;otrzymamy '+c;
    var wynik = b+'-'+a+'='+c;
  }
  else if (example==2){
    var tresc = 'Jeśli od liczby dwa razy większej od '+b+' odejmiemy '+a+', to&nbsp;otrzymamy '+e;
    var wynik = '2'+b+'-'+a+'='+e;
  }
  else if (example==3){
    var tresc = 'Jeśli do liczby trzy razy większej od '+b+' dodamy '+a+', to&nbsp;otrzymamy '+c;
    var wynik = '3'+b+'+'+a+'='+c;
  }
  else {
    var tresc = 'Jeśli od liczby pięć razy większej od '+b+' odejmiemy '+b+', to&nbsp;otrzymamy '+c;
    var wynik = '5'+b+'-'+b+'='+c;  
}

  
  // wyswietl los
  $('#zadanie').html(tresc + ': <br/><br/><p class="wyrazm">  &nbsp; <input name="odp3" type="text" style="opacity:0;float:left" id="odp3" size="1" maxlength="2" autocomplete="off" /><input name="odp" type="text" class="s35" id="odp" size="12" maxlength="20" autocomplete="off" /><input name="odp2" type="text" style="opacity:0;float:left" id="odp2" size="1" maxlength="2" autocomplete="off" /></p>');
  $('#wynik').val(wynik);
  $('#odp').focus();

}


function klik(em) {

    $('#odp').val(em);
    oblicz();

}
function sortNumber(a, b) {
    return a - b;
}
