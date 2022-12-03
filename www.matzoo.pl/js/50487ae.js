function createStatement() {
    var statement = ' Spróbuj ponownie.';
    return statement;        
}

$(document).ready(function() {

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('s50');
    $('#zadanie').addClass('wyrazm');  
    $('#zadanie').css('font-weight','normal');  
    los();
    keyboardEnter();

});


function los() {
  // los
  var a = Math.round(Math.random()*15)+5;
  var atr = Math.round(Math.random()*15)+2;
  var f = Math.round(Math.random()*99)+100;
  var zmienna = Math.round(Math.random()*20)-10;
  var e = Math.round(Math.random()*9)+1;
  var c = Math.round(Math.random()*5)*100;
  var b = Math.round(Math.random()*9);
  var litery = ['a','b','x','y','k','c','z','n','p','d'];
  b = 'x';
  var example = Math.round(Math.random()*4);

  var example2 = Math.round(Math.random()*1);
  if (example2==1) zmienna = -zmienna;
  if (example==0) {
     var wynik = e*(zmienna-atr)-a;
    var tresc = ''+e+'('+b+'-'+atr+')-'+a+' = '+wynik+'';    
    wynik=zmienna;
  }
  else if (example==1){
      var wynik = e*(zmienna+atr);
    var tresc = ''+e+'('+b+'+'+atr+') = '+wynik+'';
    var wynik = e*(zmienna+atr);
    wynik=zmienna;
  }
  else if (example==2){
      var wynik = atr+(e*zmienna);
    var tresc = ''+e+b+'+'+atr+' = '+wynik+'';
    wynik=zmienna;
  }
  else if (example==3){
    var wynik = e*(zmienna+atr)+a;
    var tresc = ''+e+'('+b+'+'+atr+')+'+a+' = '+wynik+'';    
    wynik=zmienna;
  }
  else if (example==4){
var wynik = e*(zmienna+atr)-a;
    var tresc = ''+e+'('+b+'+'+atr+')-'+a+' = '+wynik+'';    
    wynik=zmienna;
  }


    
  // wyswietl los
  $('#zadanie').html(tresc+'<br/>x = <input name="odp" type="tel" id="odp" size="3" maxlength="8" autocomplete="off" /><input name="odp2" type="tel" style="opacity:0;float:left" size="1" maxlength="2" /><input name="odp3" type="tel" style="opacity:0;float:right" size="1" maxlength="2" />');
  $('#wynik').val(wynik);
  $('#odp').focus();

}