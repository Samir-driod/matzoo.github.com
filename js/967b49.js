
function los() {
    // los
    var a = Math.round(Math.random()*7)+1;
    var b = Math.round(Math.random()*17)+1;
    var c = Math.round(Math.random()*7)+1;
    var d = Math.round(Math.random()*17)+1;
    var example = Math.round(Math.random()*1);

if (example==1) {
    
    if ((a/b) > (c/b)) var wynik = 2;
    else if ((a/b) < (c/b)) wynik = 1;
    else if ((a/b) == (c/b)) wynik = 3;
    
    // wyswietl los
  $('#zadanie').html('<table class="georgia bold" align="center" style="min-width:50%">\n\
<tr><td><table border="0" align="center" class="georgia"><tr><td class="licznik">'+b+'</td></tr><tr><td>'+a+'</td></tr></table></td>\n\
<td rowspan="2" style="min-width:33%">\n\
<span class="btn btn-lsuccess gradient text-black s20 margin10 center-block" onclick="klik(2)">&nbsp;<i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;</span>\n\
<span class="btn btn-lsuccess gradient text-black s20 margin10 center-block" onclick="klik(3)">&nbsp; = &nbsp;</span>\n\
<span class="btn btn-lsuccess gradient text-black s20 margin10 center-block" onclick="klik(1)">&nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;</span>\n\
<input type="hidden" id="odp" name="odp"/></td>\n\
<td><table border="0" align="center" class="georgia"><tr><td class="licznik">'+b+'</td></tr><tr><td>'+c+'</td></tr></table></td></tr>\n\
</table><br>');
        
} else {
    
    if ((a/b) > (c/b)) var wynik = 1;
    else if ((a/b) < (c/b)) wynik = 2;
    else if ((a/b) == (c/b)) wynik = 3;
    
    // wyswietl los
  $('#zadanie').html('<table class="georgia bold" align="center" style="min-width:50%">\n\
<tr><td><table border="0" align="center" class="georgia"><tr><td class="licznik">'+a+'</td></tr><tr><td>'+b+'</td></tr></table></td>\n\
<td rowspan="2" style="min-width:40%">\n\
<span class="btn btn-lsuccess gradient text-black s20 margin10 center-block" onclick="klik(2)">&nbsp;<i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;</span>\n\
<span class="btn btn-lsuccess gradient text-black s20 margin10 center-block" onclick="klik(3)">&nbsp; = &nbsp;</span>\n\
<span class="btn btn-lsuccess gradient text-black s20 margin10 center-block" onclick="klik(1)">&nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;</span>\n\
<input type="hidden" id="odp" name="odp"/></td>\n\
<td><table border="0" align="center" class="georgia"><tr><td class="licznik">'+c+'</td></tr><tr><td>'+b+'</td></tr></table></td></tr>\n\
</table><br>');            
}

    $('#wynik').val(wynik);
    $('#odp').focus();

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    wyn = parseInt(x) - parseInt(y);
    var statement = ' ';
    return statement;
}


$(document).ready(function () {

    los();
    keyboardEnter(1);
    $('#zadanie').removeClass('wyraz1');

});


function oblicz(em) {

    // jesli dobra odpowiedź
    if (em == $('#wynik').val()) {

        countCorrect();
        cleanSpace();
        los();

    } // jeśli zła odpowiedź
    else {
        
        countWrong();
    }

}

function klik(em) {
    oblicz(em);
}