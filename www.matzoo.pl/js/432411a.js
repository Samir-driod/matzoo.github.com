
function los() {
    // los
    var example = Math.round(Math.random() * 2);
    
    if (example==0) {        
        
        var x = Math.round(Math.random() * 32); 
        var a = Math.round(Math.random() * 2)+2; 
        var b = Math.round(Math.random() * 3)+2; 
        var c = Math.round(Math.random() * 8)+2; 
        
        var wynik = a*b*c;
        var tresc = '(('+x+'<sup>'+a+'</sup>)<sup>'+b+'</sup>)<sup>'+c+'</sup>';
        
        
    }
    else {        
        
        x = Math.round(Math.random() * 32); 
        a = Math.round(Math.random() * 8)+2; 
        b = Math.round(Math.random() * 8)+2; 
        wynik = a*b;
        tresc = '('+x+'<sup>'+a+'</sup>)<sup>'+b+'</sup>';
    }

   
    
        // wyswietl los
        $('#zadanie').html('<p>'+tresc+' = '+x+'<sup><input name="odp" type="tel" class="s30" tabindex="2" id="odp" size="1" maxlength="5" autocomplete="off" style="margin-left:2px;line-height:100%;" /></sup>\n\
    <input type="hidden" id="x" value="'+x+'" /><input type="hidden" id="tresc" value="'+tresc+'" /><input type="hidden" id="wyn" value="'+wynik+'" /></p>');
        $('#wynik').val(wynik);

        $('#odp').focus();        
   


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