function createStatement() {
}


$(document).ready(function() {

    

    $('#zadanie').addClass('tekstowe');  
    $('#zadanie').css('padding','0 3%');  
    los();
    keyboardEnter();

});


function los() {
    
  // los
  var x = Math.round(Math.random()*3000)-1500;
  var y = Math.round(Math.random()*3000)+1;


     var wynik = x-y;
     if (wynik<0) wynik = -wynik;

    x = x/100;
    y = y/100;
    wynik = wynik/100;
    
     wynik = str_replace('.',',',wynik);
     x = str_replace('.',',',x);
     y = str_replace('.',',',y);
  var tresc = 'Odległość na osi liczbowej między punktami o&nbsp;współrzędnych <span class="wyrazm">'+x+'</span> oraz&nbsp;<span class="wyrazm">'+y+'</span> jest równa:</p> ';
     
  // wyswietl los
  $('#zadanie').html(tresc + '<p class="wyrazm text-center"> <input name="odp" type="tel" class="wyraz1 s35" id="odp" size="3" maxlength="6" autocomplete="off" /><input name="odp2" type="tel" style="opacity:0;float:right" id="odp2" size="1" maxlength="6" autocomplete="off" /></p>');
  $('#wynik').val(wynik);
  $('#odp').focus();

}




