dobre = 0;
zle = 0;

x = 0;
exam = 0;
wpisal = '';

co_ile = 5;

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
    var x = Math.round(Math.random()*8)+2;
    var y = Math.round(Math.random()*8)+2;
    var wynik = x+y;
    while(wynik>10) {
        x = Math.round(Math.random()*8)+2;
        y = Math.round(Math.random()*8)+2;
        wynik = x+y;
    }

        var tresc='<div class="row"><p style="float: left; border-style: none solid solid; -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none; margin: 1% 4%; border-radius: 16px; border-width: 0px 1px 3px; border-color: #90CEDD; padding: 0px 3px 3px; width: 40%; line-height: 70%; height: 190px;">';

    for (i=0;i<x;i++) {
        tresc = tresc+'<img src="img/robaczki/m31.png" alt="*" style="margin:1px;" />';
    }
    tresc=tresc+'</p><p style="float: left; border-style: none solid solid; -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none; margin: 1% 0 0; border-radius: 16px; border-width: 0px 1px 3px; border-color: #90CEDD; padding: 0px 3px 3px; width: 40%; line-height: 70%; height: 190px;">';

   for (i=0;i<y;i++) {
        tresc = tresc+'<img src="img/robaczki/m32.png" alt="*" style="margin:1px" />';
    }

tresc=tresc+'</p></div>';

    // wyswietl los
    
    $('#zadanie').html(tresc + '<p><input name="odp" type="tel" id="odp" size="1" maxlength="2" autocomplete="off" /> + <input name="odp2" type="tel" id="odp2" size="1" maxlength="2" autocomplete="off" /> = <input name="odp3" type="tel" id="odp3" size="1" maxlength="2" autocomplete="off" /></p>');
    $('#wynik').val(x);
    $('#wynik2').val(y);
    $('#wynik3').val(wynik);
    $('#odp').focus();

}

