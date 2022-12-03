
function los() {
    // los
    var example = Math.round(Math.random() * 3);
    
    if (example==0) {        
        
        var x = Math.round(Math.random() * 32)-16; 
        var ex1 = Math.round(Math.random() * 5);
         
        if (ex1==1) {
            y=0;
            while (x==0) x = Math.round(Math.random() * 32)-16; 
        } else {
            y=2;
        }
        var wynik = Math.pow(x, y);
        if (x<0) x = '('+x+')';
    }
    else if (example==1) {        

        x = Math.round(Math.random() * 9)+1; 
        var ex1 = Math.round(Math.random() * 1);
        if (ex1==1) {
            x=x/10;
            x = Math.decimal(x,1);
        }
        wynik = Math.pow(x, y);
        wynik = Math.decimal(wynik,4);
        wynik = -wynik;
        x=str_replace('.',',',x);
        wynik=str_replace('.',',',wynik);
        x = '-'+x;
    }
    else if (example==2) {        

        x = Math.round(Math.random() * 8)-5; 
        y=3;
        wynik = Math.pow(x, y);
        if (x<0) x = '('+x+')';
    }
    else if (example==3) {        

        var x = Math.round(Math.random() * 24)-12; 
        var ex1 = Math.round(Math.random() * 5);
        var ex2 = Math.round(Math.random() * 2);
        if (ex1==1 && x<6 && x>-6) y=3; else y=2;
        if (ex2==1) {
            x=x/100;
            x = Math.decimal(x,2);
        } else {
            x=x/10;
            x = Math.decimal(x,1);
        }
        
        var wynik = Math.pow(x, y);
       
            wynik = Math.decimal(wynik,6);
            xspr=x;
        x=str_replace('.',',',x);
        wynik=str_replace('.',',',wynik);
        if (xspr<0) x = '('+x+')';

    }
    
        // wyswietl los
        $('#zadanie').html('<p>'+x+'<sup>'+y+'</sup> = <input name="odp" type="tel" tabindex="1" id="odp" size="6" maxlength="10" autocomplete="off" />\n\
    <input type="hidden" id="x" value="'+x+'" /><input type="hidden" id="y" value="'+y+'" /><input type="hidden" id="wyn" value="'+wynik+'" /></p>');
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
    x = ($('#x').val());
    y = ($('#y').val());
    wyn = ($('#wyn').val());
    
    var statement = '&nbsp; '+x+'<sup>'+y+'</sup> = '+wyn+ ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {

$('#zadanie').addClass('s50');
    los();
    keyboardEnter(1);

});