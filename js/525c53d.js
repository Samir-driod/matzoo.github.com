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
  var a = Math.round(Math.random()*15)+2;
  var x = Math.round(Math.random()*20)-10;
  var e = Math.round(Math.random()*9)+1;
  var c = Math.round(Math.random()*9)+1;
  var f = Math.round(Math.random()*5)+1;
  var b = Math.round(Math.random()*9);
  var litery = ['a','b','x','y','k','c','z','n','p','d'];
  b = 'x';
  var example = Math.round(Math.random()*1);

  var example2 = Math.round(Math.random()*1);
  if (example2==1) x = -x;
  
    if (example==0){
    var wynik = ((e-c)*x)+a;
    if (wynik<0) var tresc = ''+e+'x+'+a+' = '+c+'x'+wynik+'';
    else if (wynik==0)  tresc = ''+e+'x+'+a+' = '+c+'x';
    else  tresc = ''+e+'x+'+a+' = '+c+'x+'+wynik+'';
    tresc = tresc+'<br/>';
    wynik=x;
  }
  else if (example==1){
    var wynik = (f*e*x)+(f*a)-(c*x);
    var tresc = '<table class="geometria" style="margin-bottom:10px" border="0" align="center"><tr><td rowspan="2" class="s50">'+e+'x+'+a+' = </td><td class="licznik"><strong>1</strong></td>';
if (wynik<0) tresc = tresc+ '<td rowspan="2" class="s50">('+c+'x'+wynik+')</td></tr>';
else if (wynik==0) tresc = tresc+ '<td rowspan="2" class="s50">('+c+'x)</td></tr>';
else tresc = tresc+ '<td rowspan="2" class="s50">('+c+'x+'+wynik+')</td></tr>';
tresc = tresc+ '<tr><td class="mianownik"><strong>'+f+'</strong></td></tr></table>';
//    if (wynik<0) var tresc = ''+e+'x+'+a+' = <sup>1</sup>/<sub>'+f+'</sub>('+c+'x'+wynik+')';
//    else if (wynik==0)  tresc = ''+e+'x+'+a+' = <sup>1</sup>/<sub>'+f+'</sub>('+c+'x)';
//    else  tresc = ''+e+'x+'+a+' = <sup>1</sup>/<sub>'+f+'</sub>('+c+'x+'+wynik+')';
    
    wynik=x;
  }


    
  // wyswietl los
  $('#zadanie').html(tresc+'x = <input name="odp" type="tel" id="odp" size="3" maxlength="8" autocomplete="off" /><input name="odp2" type="tel" style="opacity:0;float:left" size="1" maxlength="2" /><input name="odp3" type="tel" style="opacity:0;float:right" size="1" maxlength="2" />');
  $('#wynik').val(wynik);
  $('#odp').focus();

}