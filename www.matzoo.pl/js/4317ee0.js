
function los() {
    // los
    var example = Math.round(Math.random() * 2);
    
    
    if (example==0) {        
        
        var x = Math.round(Math.random() * 32); 
        var a = Math.round(Math.random() * 18)+2; 
        var b = Math.round(Math.random() * 8)+2; 
        while (b>=a || b>=(a+1)) {
            a = Math.round(Math.random() * 18)+2; 
            b = Math.round(Math.random() * 8)+2; 
        }
        var wynik = a-b-1;
        var ex = Math.round(Math.random() * 1);
        if (ex==1) var tresc = x+'<sup>'+a+'</sup> : '+x+' : '+x+'<sup>'+b+'</sup>';
        else tresc = x+'<sup>'+a+'</sup> : '+x+'<sup>'+b+'</sup> : '+x;
        
    }
    else if (example==2) {        
        
        var x = Math.round(Math.random() * 32); 
        var a = Math.round(Math.random() * 18)+2; 
        var b = Math.round(Math.random() * 8)+2; 
        while (b>=a || b>=(a+1)) {
            a = Math.round(Math.random() * 18)+2; 
            b = Math.round(Math.random() * 8)+2; 
        }
        var wynik = a-b+1;
        var ex = Math.round(Math.random() * 1);
        if (ex==1) var tresc = x+'<sup>'+a+'</sup> · '+x+' : '+x+'<sup>'+b+'</sup>';
        else tresc = x+'<sup>'+a+'</sup> : '+x+'<sup>'+b+'</sup> · '+x;
    }
    else {        

        x = Math.round(Math.random() * 24)-12; 
        a = Math.round(Math.random() * 8)+2; 
        b = Math.round(Math.random() * 8)+2; 
        while (b>=a) {
            a = Math.round(Math.random() * 8)+2; 
            b = Math.round(Math.random() * 8)+2; 
        }
        ex = Math.round(Math.random() * 2);
        if (ex==1 && x>0) {
            x=x/10;
            x=Math.decimal(x,1);
            x=str_replace('.',',',x);
        }
        wynik = a-b;
        if (x<0) x = '('+x+')';
        tresc = x+'<sup>'+a+'</sup> : '+x+'<sup>'+b+'</sup>';
    }
   
    
        // wyswietl los
        $('#zadanie').html('<p>'+tresc+' = '+x+'<sup><input name="odp" type="tel" class="s30" tabindex="2" id="odp" size="1" maxlength="5" autocomplete="off" style="margin-left:2px;line-height:100%;" /></sup>\n\
    <input type="hidden" id="x" value="'+x+'" /><input type="hidden" id="tresc" value="'+tresc+'" /><input type="hidden" id="wyn" value="'+wynik+'" /></p>');
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
    tresc = ($('#tresc').val());
    x = ($('#x').val());
    wyn = ($('#wyn').val());
    
    //var statement = ' ' + x + ' · ' + y + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    var statement = '&nbsp; '+tresc+' = '+x+'<sup>'+wyn+ '</sup> <span class="s15 pull-right black" style="font-family: ">wpisano: '+x+'<sup>' + $('#odp').val() + '</sup></span>';
    return statement;
}


$(document).ready(function () {

$('#zadanie').addClass('s50');
    los();
    keyboardEnter(1);

});