
function los() {
    // los
        
    var x = Math.round(Math.random() * 4)+2; 
    var a = Math.round(Math.random() * 2)+2; 
    if (x>2 && a==4) x = Math.round(Math.random() * 1)+1;  
    var wynik = Math.pow((x*10),a); 

    var ex = Math.round(Math.random() * 1); 
    if (ex==1) var tresc = '('+x+' · 10)<sup>'+a+'</sup>';
    else tresc = (x*10)+'<sup>'+a+'</sup>';


    // wyswietl los
    $('#zadanie').html('<p>'+tresc+' = <input name="odp" type="tel" tabindex="2" id="odp" size="5" maxlength="15" autocomplete="off" style="margin-left:2px;line-height:100%;" />\n\
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
    var statement = '&nbsp; '+tresc+' = '+wyn+ ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {


    los();
    keyboardEnter(1);

});