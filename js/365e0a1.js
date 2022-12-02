function createStatement() {
}



$(document).ready(function() {
    
    $('#zadanie').addClass('s40');  
    $('#zadanie').addClass('wyrazm');  
    ilosc = 16;
    
    los();
    keyboardEnter();

});


function los() {
    
  var losuje = Math.round(Math.random()*1);  
  
  if (losuje==1) {  
  // los
  var a = Math.round(Math.random()*15)+5;
  var atr = Math.round(Math.random()*15)+2;
  var f = Math.round(Math.random()*99)+100;
  var zmienna = Math.round(Math.random()*20)-10;
  var e = Math.round(Math.random()*9)+1;
  var c = Math.round(Math.random()*5)*100;
  var b = Math.round(Math.random()*9);
  var litery = ['a','b','x','y','k','c','z','n','p','d'];
  b = litery[b];
  var example = Math.round(Math.random()*4);

  
  if (example==0) {
     zmienna = zmienna/10;
    var pzmienna = str_replace('.',',',zmienna);
    var tresc = '<b>'+atr+'+'+e+b+'</b> &nbsp; <span class="s30 white">dla</span> &nbsp;  <b>'+b+'='+pzmienna+'</b>';
    var wynik = atr+(e*zmienna);
    wynik = Math.round(wynik*100)/100;
    wynik = str_replace('.',',',wynik);
  }
  else if (example==2){
    var tresc = '<b>'+e+b+'+'+atr+'</b> &nbsp; <span class="s30 white">dla</span> &nbsp;  <b>'+b+'='+zmienna+'</b>';
    var wynik = atr+(e*zmienna);
  }
  else if (example==3){
    var tresc = '<b>'+atr+'-'+e+b+'</b> &nbsp; <span class="s30 white">dla</span> &nbsp;  <b>'+b+'='+zmienna+'</b>';
    var wynik = atr-(e*zmienna);
  }
  else if (example==4){
    var tresc = '<b>'+e+b+'-'+atr+'</b> &nbsp; <span class="s30 white">dla</span> &nbsp;  <b>'+b+'='+zmienna+'</b>';
    var wynik = (e*zmienna)-atr;
  }
  else {
      zmienna = zmienna/10;
    var pzmienna = str_replace('.',',',zmienna);
    var tresc = '<b>'+atr+'-'+e+b+'</b> &nbsp; <span class="s30 white">dla</span> &nbsp;  <b>'+b+'='+pzmienna+'</b>';
    var wynik = atr-(e*zmienna);
    wynik = Math.round(wynik*100)/100;
    wynik = str_replace('.',',',wynik);
  }
 

  
  // wyswietl los
  $('#zadanie').html(tresc + '<br/><input name="odp" type="tel" class="s40" id="odp" size="4" maxlength="6" autocomplete="off" /><input name="odp3" type="tel" style="opacity:0;float:left" size="1" maxlength="2" /><input name="odp2" type="tel" style="opacity:0;float:right" id="odp2" size="1" maxlength="2" />');
  $('#wynik').val(wynik);
  $('#odp').focus();
  
    } else {
        
  // los
  var a = Math.round(Math.random()*15)+5;
  var atr = Math.round(Math.random()*15)+2;
  var f = Math.round(Math.random()*99)+100;
  var zmienna = Math.round(Math.random()*20)-10;
  var e = Math.round(Math.random()*9)+1;
  var c = Math.round(Math.random()*5)*100;
  var b = Math.round(Math.random()*9);
  var litery = ['a','b','x','y','k','c','z','n','p','d'];
  b = litery[b];
  var example = Math.round(Math.random()*2);


  
  if (example==0) {
    var tresc = '<b>'+e+b+'<sup>2</sup>-'+atr+'</b> &nbsp; <span class="s30 white">dla</span> &nbsp;  <b>'+b+'='+zmienna+'</b>';
    var wynik = (e*zmienna*zmienna)-atr;
    
  }
  else if (example==1){
    
      var tresc = '<b>'+atr+'+'+e+b+'<sup>2</sup></b> &nbsp; <span class="s30 white">dla</span> &nbsp;  <b>'+b+'='+zmienna+'</b>';
    var wynik = atr+(e*zmienna*zmienna);
    
  }
  else if (example==2){
  
var tresc = '<b>'+e+b+'<sup>2</sup></b> &nbsp; <span class="s30 white">dla</span> &nbsp;  <b>'+b+'='+zmienna+'</b>';
    var wynik = e*zmienna*zmienna;
  }
  

  
  // wyswietl los
  $('#zadanie').html(tresc + '<br/><input name="odp" type="tel" class="s40" id="odp" size="4" maxlength="6" /><input name="odp3" type="tel" style="opacity:0;float:left" size="1" maxlength="2" /><input name="odp2" type="tel" style="opacity:0;float:right" id="odp2" size="1" maxlength="2" />');
  $('#wynik').val(wynik);
  $('#odp').focus();        
        
        
        
    }

}





