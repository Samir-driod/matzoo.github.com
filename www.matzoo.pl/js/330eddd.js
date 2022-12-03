dobre = 0;
zle = 0;

x = 0;
exam = 0;
wpisal = '';


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

function createStatement() {}

$(document).ready(function() {
    
    $('#zadanie').addClass('col-sm-11');  
    $('#zadanie').addClass('s45');  
    ilosc = 16;
    
    los();
    keyboardEnter(0);

});


function los() {
    $('#odp2').val('');
    $('#odp3').val('');

    // los
    var x = Math.round(Math.random()*5)+1;
    var y = Math.round(Math.random()*5)+1;
    var wynik = x+y;
    while(wynik>6) {
        x = Math.round(Math.random()*5)+1;
        y = Math.round(Math.random()*5)+1;
        wynik = x+y;
    }

        var tresc='<div class="row"><p style="line-height: 66%; float: left; border-style: none solid solid; -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none; width: 40%; margin: 1% 4%; border-radius: 16px; border-width: 0px 1px 3px; border-color: rgb(123, 196, 115); padding: 0px 3px 3px; height: 188px;">';

    for (i=0;i<x;i++) {
        tresc = tresc+'<img src="img/robaczki/m1.png" alt="*" style="margin:1px;" />';
    }
    tresc=tresc+'</p><p style="line-height: 66%; float: left; border-style: none solid solid; -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none; width: 40%; margin: 1% 4%; border-radius: 16px; border-width: 0px 1px 3px; border-color: rgb(123, 196, 115); padding: 0px 3px 3px; height: 188px;">';

   for (i=0;i<y;i++) {
        tresc = tresc+'<img src="img/robaczki/m2.png" alt="*" style="margin:1px" />';
    }

tresc=tresc+'</p></div>';

    // wyswietl los
    
    $('#zadanie').html(tresc + '<p><input name="odp" type="tel" id="odp" size="1" maxlength="2" autocomplete="off" /> + <input name="odp2" type="tel" id="odp2" size="1" maxlength="2" autocomplete="off" /> = <input name="odp3" type="tel" id="odp3" size="1" maxlength="2" autocomplete="off" /></p>');
    $('#wynik').val(x);
    $('#wynik2').val(y);
    $('#wynik3').val(wynik);
    $('#odp').focus();

}




