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
  z=-z;
  var example = Math.round(Math.random()*5);
  
  if (example>3) z=-z;
  
  if (example==0) {
      x=Math.round(Math.random()*8)+2;
      x=x/10;
    var wynik = x;
    wynik = str_replace('.',',',wynik);
    var p = x*y+z;
    var pdz = p*10;
    while (Math.round(pdz)!==pdz) {
        x=Math.round(Math.random()*8)+2;
      x=x/2;
    wynik = x;
    wynik = str_replace('.',',',wynik);
    p = x*y+z;
    pdz = p*10;
    }
    p=str_replace('.',',',p);
    var zdanie =  z+' + ' + y + 'x  = ' + p ;
  }
  else if (example==1) {
    var wynik = x;
    var p = x*y+z;
    var zdanie = z+' + ' + y + 'x  = ' + p ;
  }
  else if (example==2) {
    var wynik = x;
    var p = x*y+z;
    var zdanie = y + 'x + ' + z + ' = ' + p ;
  }
  else if (example==3) {
var wynik = x;
    var p = x*y+z;
    var zdanie =  p + ' = '+y + 'x + ' + z  ;
   }
  else if (example==4) {
    var wynik = x*(-1);
    var p = (-1)*x*y+z;
    var zdanie = z+' + ' + y + 'x  = ' + p ;

      
  } else {
    var wynik = x;
    var p = x*y-z;
    var zdanie = y + 'x - ' + z + ' = ' + p ;
  }
  

  
  // wyswietl los
  $('#zadanie').html(zdanie+'<br/>x = <input name="odp" type="tel" id="odp" size="1" maxlength="3" autocomplete="off" /><input name="odp2" type="tel" style="opacity:0;float:left" size="1" maxlength="2" autocomplete="off" /><input name="odp3" type="tel" style="opacity:0;float:right" size="1" maxlength="2" autocomplete="off" />');
  $('#wynik').val(wynik);
  $('#odp').focus();

}