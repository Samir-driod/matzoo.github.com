limit = 20;
function los() {
    // los
    var x = limit;
    var y = Math.round(Math.random() * limit);
    var wynik = x - y;

    // wyswietl los
    $('#zadanie').html(y + ' + <input name="odp" type="tel" class="wyraz1" id="odp" size="1" maxlength="3" autocomplete="off" /> = '+limit+' \n\
<input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" />');
    $('#wynik').val(wynik);
    $('#odp').focus();

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    wyn = parseInt(x) - parseInt(y);
    var statement = ' ' + y + ' + ' + wyn + ' = ' + x  + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {

    los();
    keyboardEnter(1);

});