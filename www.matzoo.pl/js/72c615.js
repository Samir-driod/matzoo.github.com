
function los() {
    // los
    var x = Math.round(Math.random() * 29) + 1;
    var y = Math.round(Math.random() * 7) + 2;
    var a = Math.round(Math.random() * 3) + 2;
    
    var wynik = x + (y*a);
    // wyswietl los
    $('#zadanie').html(x + ' + ' + y + ' · ' + a + ' = <input name="odp" type="tel" class="wyraz1" id="odp" size="1" maxlength="3" autocomplete="off" />\n\
<input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" /><input type="hidden" name="a" id="a" value="' + a + '" />');
    $('#wynik').val(wynik);
    $('#odp').focus();

}

function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    a = ($('#a').val());
    mwyn = parseInt(y)*parseInt(a);
    wyn = parseInt(x) + mwyn;
    var statement = ' ' + x + ' + ' + y + ' · ' + a + ' = ' + x + ' + ' + mwyn  + ' = ' + wyn  + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {
    los();
    keyboardEnter(1);
});