limit = 100;
function los() {
    
    
    // los
    var x = Math.round(Math.random() * 9)+1;
    x = x * 10; 
    var y = Math.round(Math.random() * 99);
    while (x < (2*y)) {
        x = Math.round(Math.random() * 9)+1;
        x = x * 10; 
        y = Math.round(Math.random() * 99);
    }
    var wynik = x - y;

    // wyswietl los
    $('#zadanie').html(x + ' - ' + y + ' = <input name="odp" type="tel" class="wyraz1" id="odp" size="1" maxlength="3" autocomplete="off" />\n\
<input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" />');
    $('#wynik').val(wynik);
    $('#odp').focus();

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = $('#x').val();
    y = $('#y').val();
    wyn = $('#wynik').val();
    var statement = ' ' + x + ' - ' + y + ' = ' + wyn  + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {

    los();
    keyboardEnter(1);

});