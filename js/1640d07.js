
function los() {
    // los
    var los = Math.round(Math.random() * 4)+1;
    if (los==1)  var x = Math.round(Math.random() * 5000);
    else if (los==2) x = Math.round(Math.random() * 100);
    else if (los==2) x = Math.round(Math.random() * 899)+100;
    else if (los==2) x = (Math.round(Math.random() * 9)+1)*100;
    else x = (Math.round(Math.random() * 99)+1)*10;

    var wynik = Math.round(x*100)/10000;
    var pwynik = str_replace('.', ',', wynik);
    if ((wynik*10)==Math.round(wynik*10) && (wynik)!=Math.round(wynik)) pwynik = pwynik+'0'; // grosze więc zawsze 2 miejsca po przecinku

    // wyswietl los
    $('#zadanie').html('<p class="wyraz1 s60">'+ x + '&nbsp;gr = <input name="odp" type="text" class="input" id="odp" size="3" maxlength="5" autocomplete="off" />&nbsp;zł<input type="hidden" name="x" id="x" value="' + x + '" /></p>');
    $('#wynik').val(pwynik);
    $('#odp').focus();

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    wyn = ($('#wynik').val());
    var statement = ' ' + x + '&nbsp;gr = ' + wyn + '&nbsp;zł<span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {
    los();
    keyboardEnter(1);

});