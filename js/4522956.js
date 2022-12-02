

function los() {
    // los
    var x = (Math.round(Math.random() * 111)+1)*10;
    var y = (Math.round(Math.random() * 81)+1)*10;
    if (Math.round(Math.random() * 1)==1) x=x*10;
    var znak = Math.round(Math.random() * 3)+1;
    
    if (znak==1) {
        var zn = '+';
        var wynik = x + y;
    } else if (znak==2) {
        if (y>x) {
            tmp=x; x=y; y=tmp;
        }
        zn = '-';
        wynik = x - y;
    } else if (znak==3) {
        x = (Math.round(Math.random() * 9)+1)*10;
        y = (Math.round(Math.random() * 9)+1)*10;
        if (Math.round(Math.random() * 1)==1) x=x*10;
        zn = '·';
        wynik = x * y;
    } else if (znak==4) {
        x = (Math.round(Math.random() * 9)+1)*10;
        y = (Math.round(Math.random() * 9)+1)*10;
        if (Math.round(Math.random() * 1)==1) x=x*10;
        zn = ':';
        wynik = x;
        x=x*y;
    }
    

    // wyswietl los
    $('#zadanie').html(x + ' ' + zn + ' ' + y + ' = <input name="odp" type="text" id="odp" size="5" maxlength="10" autocomplete="off" />\n\
<input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" /><input type="hidden" name="znak" id="znak" value="' + znak + '" />');
    $('#wynik').val(wynik);
    $('#odp').focus();

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = parseInt($('#x').val());
    y = parseInt($('#y').val());
    znak = ($('#znak').val());
    if (znak==1) {
        var zn = '+';
        var wynik = x + y;
    } else if (znak==2) {
        zn = '-';
        wynik = x - y;
    } else if (znak==3) {
        zn = '·';
        wynik = x * y;
    } else if (znak==4) {
        zn = ':';
        wynik = x/y;
        
    }
    var statement = ' ' + x + ' ' + zn + ' ' + y + ' = ' + wynik + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {
    
    $('#zadanie').addClass('s50');

    los();
    keyboardEnter(1);

});