
function los() {
    // los
    var znak = Math.round(Math.random() * 1);
    
    var tab_y = [10,100,1000];
    
    if (znak == 1) {

        var x = Math.random(Math.random() *10)+1;
        x = Math.round(x*tab_y[Math.round(Math.random() * 2)])/tab_y[Math.round(Math.random() * 2)];
        while (x==Math.round(x)) {
            var x = Math.random(Math.random() *10)+1;
            x = Math.round(x*tab_y[Math.round(Math.random() * 2)])/tab_y[Math.round(Math.random() * 2)];
        }
        var y = tab_y[Math.round(Math.random() * 2)];

        var wynik = x * y;
        wynik = Math.round(wynik*10000)/10000;
        
        var px = str_replace('.', ',', x);
        var pwynik = str_replace('.', ',', wynik);
        // wyswietl los
        $('#zadanie').html(px + ' · ' + y + ' = <input name="odp" type="text" class="wyraz1 s50" id="odp" size="5" maxlength="9" autocomplete="off" />\n\
        <input type="hidden" name="x" id="x" value="' + px + '" /><input type="hidden" name="y" id="y" value="' + y + '" /><input type="hidden" name="znak" id="znak" value="' + znak + '" />');
        $('#wynik').val(pwynik);
        $('#odp').focus();        
        
    } else {
        var x = Math.random(Math.random() *10)+1;
        x = Math.round(x*tab_y[Math.round(Math.random() * 2)])/tab_y[Math.round(Math.random() * 2)];
        while (x==Math.round(x)) {
            var x = Math.random(Math.random() *10)+1;
            x = Math.round(x*tab_y[Math.round(Math.random() * 2)])/tab_y[Math.round(Math.random() * 2)];
        }
        var y = tab_y[Math.round(Math.random() * 2)];
        var wynik = x;
        var xn = x*y;
    
        
        xn = Math.round(xn*1000)/1000;

        var px = str_replace('.', ',', xn);
        var pwynik = str_replace('.', ',', wynik);


        // wyswietl los
        $('#zadanie').html(px + '  :  ' + y + ' = <input name="odp" type="text" class="wyraz1 s50" id="odp" size="5" maxlength="9" autocomplete="off"/>\n\
    <input type="hidden" name="x" id="x" value="' + px + '" /><input type="hidden" name="y" id="y" value="' + y + '" /><input type="hidden" name="znak" id="znak" value="' + znak + '" />');
        $('#wynik').val(pwynik);
        $('#odp').focus();      
    }


}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    znak = ($('#znak').val());
    wyn = ($('#wynik').val());
    if (znak == 1) {
        zn = '·';
    } else {
        zn = ':';
    }
//    
    var statement = ' ' + x + ' '+ zn +' ' + y + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    //var statement = 'Spróbuj ponownie.';
    return statement;
}


$(document).ready(function () {
    $('#zadanie').addClass('s50');
    los();
    keyboardEnter(1);

});