limit = 140;
function los() {
    // los
    var x = Math.round(Math.random() * 100);
    var y = Math.round(Math.random() * 100);
    while (x + y > limit) {
        x = Math.round(Math.random() * 100);
        y = Math.round(Math.random() * 100);
    }
    x = x/10;
    y = y/10;
    
  while (Math.floor(x)==x && Math.floor(y)==y) {
    x = Math.round(Math.random() * 100);
        y = Math.round(Math.random() * 100);
    while (x + y > limit) {
        x = Math.round(Math.random() * 100);
        y = Math.round(Math.random() * 100);
    }
    x = x/10;
    y = y/10;    
  }
  var wynik = x+y;
  wynik = Math.round(wynik*10)/10;
  var pwynik = str_replace('.', ',', wynik);
  var px = str_replace('.', ',', x);
  var py = str_replace('.', ',', y);        
    
    


    
    
    

    // wyswietl los
    $('#zadanie').html(px + ' + ' + py + ' = <input name="odp" type="text" class="input" id="odp" size="2" maxlength="6" autocomplete="off"/>\n\
<input type="hidden" name="x" id="x" value="' + px + '" /><input type="hidden" name="y" id="y" value="' + py + '" />');
    $('#wynik').val(pwynik);
    $('#odp').focus();

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    wyn = ($('#wynik').val());
    var statement = ' ' + x + ' + ' + y + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {
$('#zadanie').addClass('wyraz1');
    los();
    keyboardEnter(1);

});