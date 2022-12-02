
function los() {
    // los
    var example = Math.round(Math.random() * 2);
    
    var x = Math.round(Math.random() * 50); 
    if (Math.round(Math.random() * 1)==1) x = -x;
    var y = Math.round(Math.random() * 50); 
    if (Math.round(Math.random() * 1)==1) y = -y;
    
    if (example==0) {        
        var what = 'osi x';
        var wynik = x;
        var wynik2 = -y;
    }
    if (example==1) {        
         what = 'osi y';
         wynik = -x;
         wynik2 = y;
    }
    if (example==2) {        
         what = 'początku układu współrzędnych, czyli punktu (0,0),';
         wynik = -x;
         wynik2 = -y;
    }
    
        // wyswietl los
        $('#zadanie').html('<p class="tekstowe s21 text-center">Punktem symetrycznym do punktu ('+x+','+y+') względem '+what+' jest punkt o&nbsp;współrzędnych:<br>(<input name="ox" type="tel" class="wyrazm" tabindex="1" id="odp" size="2" maxlength="3" autocomplete="off" style="font-weight:normal" />,<input name="odp2" type="tel" class="wyrazm" tabindex="1" id="odp2" size="2" maxlength="3" autocomplete="off" style="font-weight:normal" />).</p>');
        $('#wynik').val(wynik);
        $('#wynik2').val(wynik2);
        $('#odp').focus();        
   


}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
//    x = ($('#x').val());
//    y = ($('#y').val());
//    wyn = x * y;
    //var statement = ' ' + x + ' · ' + y + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    var statement = 'Spróbuj ponownie.';
    return statement;
}


$(document).ready(function () {

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('wyrazm');
    los();
    keyboardEnter(0);

});