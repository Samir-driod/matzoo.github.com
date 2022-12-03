

function los() {
    // los
    var x = (Math.round(Math.random() * 198)+1);
    var y = (Math.round(Math.random() * 128)+1);
    //if (x>100) x=x/100; else 
        x=x/10;
    if (Math.round(Math.random() * 3)==1) x = Math.round(Math.random() * 9)+1; // czasem łatwiejsze
    x=Math.decimal(x,2);
    //if (y>100) y=y/100; else 
        y=y/10;
    y=Math.decimal(y,2);
 
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
        x = (Math.round(Math.random() * 98)+1);
        x=x/10; x=Math.decimal(x,2);
        y = Math.round(Math.random() * 4)+2;
        
        zn = '·';
        wynik = x * y;
    } else if (znak==4) {
        x = (Math.round(Math.random() * 17)+1);
        x=x/10; x=Math.decimal(x,2);
        y = Math.round(Math.random() * 4)+2;
        zn = ':';
        wynik = x;
        var px=x*y;
        px=Math.decimal(px,2);
    }
    if (znak==4)  px=str_replace('.',',',px); else  px=str_replace('.',',',x);
    var py=str_replace('.',',',y);
    wynik = Math.decimal(wynik,2);
    wynik=str_replace('.',',',wynik);

    // wyswietl los
    $('#zadanie').html(px + ' ' + zn + ' ' + py + ' = <input name="odp" type="text" id="odp" size="5" maxlength="10" />\n\
<input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" /><input type="hidden" name="znak" id="znak" value="' + znak + '" />');
    $('#wynik').val(wynik);
    $('#odp').focus();

}

Math.decimal = function(n, k) 
{
    var factor = Math.pow(10, k+1);
    n = Math.round(Math.round(n*factor)/10);
    return n/(factor/10);
}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = parseFloat($('#x').val());
    y = parseFloat($('#y').val());
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
        wynik=x;
        x=x*y;
        x=Math.decimal(x,2);
        
    }
    wynik=Math.decimal(wynik,4);
    x=str_replace('.',',',x);
    y=str_replace('.',',',y);
    wynik=str_replace('.',',',wynik);
    
        
    var statement = ' ' + x + ' ' + zn + ' ' + y + ' = ' + wynik + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {
    
    $('#zadanie').addClass('s50');

    los();
    keyboardEnter(1);

});