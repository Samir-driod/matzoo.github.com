function createStatement() {
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
  var x = Math.round(Math.random()*8)+2;
  var y = Math.round(Math.random()*8)+2;
  var z = Math.round(Math.random()*8)+2;
  var a = Math.round(Math.random()*8)+2;
  var example = Math.round(Math.random()*1);
  var example2 = Math.round(Math.random()*1);
  

  if (example==0) {
      if (example2==1) x=-x;
    var wynik = x;
    var p = x*y-z;
    var b = y+a;
    var zdanie = b + 'x-' + z + ' = ' + a+'x';
    if (p>0) zdanie = zdanie+'+'+p; else  zdanie = zdanie+p;
  }
  else if (example==1) {
      if (example2==1) x=-x;
    var wynik = x;
    var p = x*y+z;
    var b = y+a;
    var zdanie = b + 'x+' + z + ' = ' + a+'x';
    if (p>0) zdanie = zdanie+'+'+p; else  zdanie = zdanie+p;
  }

    
  // wyswietl los
  $('#zadanie').html(zdanie+'<br/>x = <input name="odp" type="tel" id="odp" size="2" maxlength="6" autocomplete="off" /><input name="odp2" type="tel" style="opacity:0;float:left" size="1" maxlength="2" /><input name="odp3" type="tel" style="opacity:0;float:right" size="1" maxlength="2" />');
  $('#wynik').val(wynik);
  $('#odp').focus();

}