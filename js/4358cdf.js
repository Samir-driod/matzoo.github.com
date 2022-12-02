
function los() {
    // los
        
    var x = Math.round(Math.random() * 4)+2; 
    var a = Math.round(Math.random() * 4)+2; 

    var ex = Math.round(Math.random() * 3); 
    if (ex==1) {
        x = 10;
        var tab = [
            ['2','5'],
            ['5','2'],
            ['2.5','4'],
            ['4','2.5']
        ];
        var elem = Math.round(Math.random() * 3); 
        var tresc = str_replace('.',',',tab[elem][0])+'<sup>'+a+'</sup> · '+str_replace('.',',',tab[elem][1])+'<sup>'+a+'</sup>';
    }
    else if (ex==2) {
        x = 10;
        tab = [
            ['40','4'],
            ['50','5'],
            ['150','15'],
            ['80','8'],
            ['90','9'],
            ['0,1','0,01']
        ];
        elem = Math.round(Math.random() * 5); 
        tresc = str_replace('.',',',tab[elem][0])+'<sup>'+a+'</sup> : '+str_replace('.',',',tab[elem][1])+'<sup>'+a+'</sup>';
    }
    else if (ex==3) {
        x = 2;
        
        tab = [
            ['0,5','4'],
            ['0,2','10'],
            ['20','0,1'],
            ['8','0,25']
        ];
        elem = Math.round(Math.random() * 3); 
        tresc = str_replace('.',',',tab[elem][0])+'<sup>'+a+'</sup> · '+str_replace('.',',',tab[elem][1])+'<sup>'+a+'</sup>';
    }
    else {
        x = 2;
        tab = [
            ['16','8'],
            ['0,5','0,25'],
            ['20','10'],
            ['90','45'],
            ['80','40']
        ];
        elem = Math.round(Math.random() * 4); 
        tresc = str_replace('.',',',tab[elem][0])+'<sup>'+a+'</sup> : '+str_replace('.',',',tab[elem][1])+'<sup>'+a+'</sup>';
    }
        var wynik = x;
        var wynik2 = a;
        var wynik3 = Math.pow(x,a);

    // wyswietl los
    $('#zadanie').html('<p>'+tresc+' = <input name="odp" type="tel" tabindex="1" id="odp" size="1" maxlength="5" autocomplete="off" style="width:86px"/><sup><input name="odp2" tabindex="2" id="odp2" size="1" maxlength="4" autocomplete="off" style="margin-left:2px;line-height:100%;width:40px" type="tel"></sup> = <input name="odp3" type="tel" tabindex="2" id="odp3" size="5" maxlength="15" autocomplete="off" />\n\
<input type="hidden" id="x" value="'+x+'" /><input type="hidden" id="tresc" value="'+tresc+'" /><input type="hidden" id="wyn" value="'+wynik+'" /></p>');
    $('#wynik').val(wynik);
    $('#wynik2').val(wynik2);
    $('#wynik3').val(wynik3);

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
    wynik = ($('#wynik').val());
    wynik2 = ($('#wynik2').val());
    wynik3 = ($('#wynik3').val());
    
    //var statement = ' ' + x + ' · ' + y + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    var statement = '&nbsp; '+tresc+' = '+wynik+ '<sup>'+wynik2+'</sup> = '+wynik3+' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '<sup>' + $('#odp2').val() + '</sup>=' + $('#odp3').val() + '</span>';
    return statement;
}


$(document).ready(function () {

$('#zadanie').addClass('s45');
    los();
    keyboardEnter(1);

});