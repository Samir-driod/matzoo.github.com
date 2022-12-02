function createStatement() {
}


$(document).ready(function() {

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('tekstowe');  
    los();
    keyboardEnter(0);

});


function los() {
  // los

  var example = Math.round(Math.random()*4);

  if (example==1) {

    polecenie = '<p class="text-center">Zaokrąglij do setek.</p>';

    var los = Math.round(Math.random()*2)*1;

    if (los==1) x = Math.round(Math.random()*400)+110;
    else  x = Math.round(Math.random()*19600)+400;

    y = Math.round(x/100)*100;
    y = str_replace('.', ',', y);

    px = str_replace('.', ',', x);

    // wyswietl los


  } else if (example==2) {

    polecenie = '<p class="text-center">Zaokrąglij do jedności.</p>';
    var los = Math.round(Math.random()*2)*1;

    if (los==1) x = Math.round(Math.random()*400)+110;
    else  x = Math.round(Math.random()*19600)+400;

    x=x/100;
    y = Math.round(x);
    y = str_replace('.', ',', y);
    px = str_replace('.', ',', x);

  } else if (example==3) {

    polecenie = '<p class="text-center">Zaokrąglij do dziesiątek.</p>';

    var los = Math.round(Math.random()*2)*1;

    if (los==1) x = Math.round(Math.random()*400)+110;
    else  x = Math.round(Math.random()*19600)+400;

    y = Math.round(x/10)*10;
    y = str_replace('.', ',', y);

    px = str_replace('.', ',', x);

  } else if (example==4) {

    polecenie = '<p class="text-center">Zaokrąglij do części dziesiątych.</p>';

    var los = Math.round(Math.random()*2)*1;

    if (los==1) x = Math.round(Math.random()*4090)+10;
    else if (los==2) x = Math.round(Math.random()*490)+10;
    else x = Math.round(Math.random()*899)+100;
    x=x/1000;
    y = Math.round(x*10)/10;
    y = y.toFixed(1);
    y = str_replace('.', ',', y);
    px = str_replace('.', ',', x);

  } else {

    polecenie = '<p class="text-center">Zaokrąglij do części setnych.</p>';
    

    var los = Math.round(Math.random()*2)*1;

    if (los==1) x = Math.round(Math.random()*400)+110;
    else  x = Math.round(Math.random()*19000)+400;

    x=x/10000;
    y = Math.round(x*100)/100;
    y = y.toFixed(2);
    y = str_replace('.', ',', y);
    px = str_replace('.', ',', x);

  }


  // wyswietl los
  $('#zadanie').html(polecenie+'<p class="wyrazm text-center s45"><input name="odp3" type="tel" style="opacity:0;float:left" size="1" maxlength="2" />'+px + ' = <input name="odp" type="tel" class="s50" id="odp" size="5" maxlength="6" autocomplete="off" /><input name="odp2" type="tel" style="opacity:0;float:right" id="odp2" size="1" maxlength="2" /></p>');
  $('#wynik').val(y);
  $('#odp').focus();

}


