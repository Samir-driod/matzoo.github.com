function createStatement() {
}


$(document).ready(function() {
    
    $('#zadanie').addClass('col-sm-11');  
    $('#zadanie').removeClass('wyraz1');  
    $('#zadanie').addClass('wyrazm');  
    ilosc = 16;
    
    los();
    keyboardEnter(1);

});


function los() {
  // los
  var a = Math.round(Math.random()*15)+5;
  var b = Math.round(Math.random()*9);
  var litery = ['a','b','x','y','k','c','z','n','p','d'];
  b = litery[b];
  var example = Math.round(Math.random()*1);
  var example2 = Math.round(Math.random()*6);


  if (example==0) {
    tmp=a;
    a=b;
    b=tmp;
  }

  if (example2==0) {
    var tresc = 'Suma liczb '+a+' i '+b;
    var wynik = a+'+'+b;
}
  else if (example2==4){
      a = Math.round(Math.random()*15)+5;
      var liczby = ['dwa','trzy','cztery','pięć','sześć','siedem'];
      var cyfry = [2,3,4,5,6,7];
      var losl = Math.round(Math.random()*5);
      b = Math.round(Math.random()*9);
      b = litery[b];
    var tresc = 'Liczba o '+a+' mniejsza od liczby '+liczby[losl]+'&nbsp;razy większej od '+b;
    var wynik = cyfry[losl]+b+'-'+a;
  }
  else if (example2==5){
      a = Math.round(Math.random()*15)+5;
      var liczby = ['dwa','trzy','cztery','pięć','sześć','siedem'];
      var cyfry = [2,3,4,5,6,7];
      var losl = Math.round(Math.random()*5);
      b = Math.round(Math.random()*9);
      b = litery[b];
    var tresc = 'Liczba '+liczby[losl]+'&nbsp;razy większa od '+b;
    var wynik = cyfry[losl]+b;
  }

  else if (example2==1){
    tresc = 'Różnica liczb '+a+' i '+b;
    wynik = a+'-'+b;
  }
  else if (example2==2){
    tresc = 'Liczba o '+a+' mniejsza od '+b;
    wynik = b+'-'+a;
  }
  else if (example2==3){
    tresc = 'Liczba o '+a+' większa od '+b;
    wynik = b+'+'+a;
  }
  else {
    tresc = 'Iloraz liczb '+a+' i '+b;
    wynik = a+':'+b;
  }

  
  // wyswietl los
  $('#zadanie').html(tresc + '. <br/><input name="odp3" type="text" style="opacity:0;float:left" size="1" maxlength="2" /><input name="odp" type="text" class="s50" id="odp" size="4" maxlength="6" style="margin-top:20px" autocomplete="off" /><input name="odp2" type="text" style="opacity:0;float:right" id="odp2" size="1" maxlength="2" /><br/>');
  $('#wynik').val(wynik);
  $('#odp').focus();

}




