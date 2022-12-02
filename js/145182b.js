
function los() {
    
        // los
        var a = Math.round(Math.random() * 188) + 2;
        var example = Math.round(Math.random() * 2) + 1;
        if (example == 1) {
            a = (Math.round(Math.random() * 9) + 1) * 100;
        } else if (example == 2) {
            a = a * 2;
        } else if (example == 3) {
            a = Math.round(Math.random() * 98) + 2;
        }
        var wynik = a/100; 
        if (wynik*100!=Math.round(wynik*100)) {
            wynik = Math.round(wynik*100)/100;
        }
        wynik = str_replace('.',',',wynik);
        
        // wyswietl los
        $('#zadanie').html(a + '% = <input name="odp" type="text" class="wyraz1" id="odp" size="2" maxlength="5" autocomplete="off" />\n\
    <input type="hidden" name="a" id="a" value="' + a + '" />');
        $('#wynik').val(wynik);
        $('#odp').focus();        
}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    a = ($('#a').val());
    wyn = ($('#wynik').val());
    var statement = ' ' + a + '% = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {
    los();
    keyboardEnter(1);
});