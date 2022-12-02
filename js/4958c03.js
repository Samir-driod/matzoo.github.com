
function los() {
    
    // los
    var znak = Math.round(Math.random() * 1);
    
    var x = Math.round(Math.random() * 2100) + 1;
    var px = x; 
    var y = '';
    x = x+1;

    while (x>1000) { x = x-1000; y=y+'M'; }
    if (x>900) { x = x-900; y=y+'CM'; }
    while (x>500) { x = x-500; y=y+'D'; }
    if (x>400) { x = x-400; y=y+'CD'; }
    while (x>100) { x = x-100; y=y+'C'; }
    if (x>90) { x = x-90; y=y+'XC'; }
    while (x>50) { x = x-50; y=y+'L'; }
    if (x>40) { x = x-40; y=y+'XL'; }
    while (x>10) { x = x-10; y=y+'X'; }
    if (x>9) { x = 0; y=y+'IX'; }
    while (x>5) { x = x-5; y=y+'V'; }
    if (x>4) { x = 0; y=y+'IV'; }
    while (x>1) { x = x-1; y=y+'I'; }        
    
    if (znak == 1) {
        var wynik = px;
        // wyswietl los
        $('#zadanie').html( y + ' = <input name="odp" type="tel" class="input" id="odp" size="3" maxlength="5" autocomplete="off"/>\n\
        <input type="hidden" name="y" id="y" value="' + y + '" />');
        
    } else {
        wynik = y;
        y = px;
        // wyswietl los
        $('#zadanie').html( y + ' = <input name="odp" type="tel" class="input" id="odp" size="12" maxlength="23" autocomplete="off"/>\n\
        <input type="hidden" name="y" id="y" value="' + y + '" />');
        
    }
        
        $('#wynik').val(wynik);
        $('#odp').focus();        

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    znak = ($('#znak').val());
    wyn = ($('#wynik').val());
    var statement = ' ' + y + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {

    los();
    keyboardEnter(1);

});