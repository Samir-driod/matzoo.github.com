limit = 6;
function los() {
    // los
    var a = Math.round(Math.random() * 5) + 1;
    var x = Math.round(Math.random() * 5) + 1;
    var y = Math.round(Math.random() * 5) + 1;
    while (x + y > limit) {
        x = Math.round(Math.random() * 5) + 1;
        y = Math.round(Math.random() * 5) + 1;
    }
    var wynik = x + y;


var tresc = '';
for (i=0;i<x;i++) tresc = tresc + '<img src="imgtask/small'+a+'.png" />';
tresc = tresc + ' + ';
for (i=0;i<y;i++) tresc = tresc +  '<img src="imgtask/small'+a+'.png" />';


    // wyswietl los
    $('#zadanie').html(tresc + ' = <input name="odp" type="tel" class="input1 w90" id="odp" size="1" maxlength="1" autocomplete="off" />\n\
<input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" />');
    $('#wynik').val(wynik);
    $('#odp').focus();

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    wyn = parseInt(x) + parseInt(y);
    var statement = ' ' + x + ' + ' + y + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {

    los();
    keyboardEnter(1);

});