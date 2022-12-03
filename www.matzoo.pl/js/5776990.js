
function los() {
    // los
    var a = Math.round(Math.random()*7)+1;
    var b = Math.round(Math.random()*9)+1;
    var c = Math.round(Math.random()*7)+1;
    var e = Math.round(Math.random()*9)+1;
    
    
    if (a==b) b = b+1;
    else if (a>b) {
        var tmp = a; a = b; b = tmp;
    }
    var nwd_ab = nwd(a,b);
    a = a/nwd_ab;
    b = b/nwd_ab;
    
    if (c==e) e = e+1;
    else if (c>e) {
        var tmp = c; c = e; e = tmp;
    }
    var nwd_ce = nwd(c,e);
    c = c/nwd_ce;
    e = e/nwd_ce;    
    
    if ((a*e) > (c*b)) var wynik = 1;
    else if ((a*e) < (c*b)) wynik = 2;
    else if ((a*e) == (c*b)) wynik = 3;
    
    // wyswietl los
  $('#zadanie').html('<table class="georgia bold" align="center" style="min-width:50%">\n\
<tr><td><table border="0" align="center" class="georgia"><tr><td class="licznik">'+a+'</td></tr><tr><td>'+b+'</td></tr></table></td>\n\
<td rowspan="2" style="min-width:33%">\n\
<span class="btn btn-lsuccess gradient text-black s20 margin10 center-block" onclick="klik(2)">&nbsp;<i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;</span>\n\
<span class="btn btn-lsuccess gradient text-black s20 margin10 center-block" onclick="klik(3)">&nbsp; = &nbsp;</span>\n\
<span class="btn btn-lsuccess gradient text-black s20 margin10 center-block" onclick="klik(1)">&nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;</span>\n\
<input type="hidden" id="odp" name="odp"/></td>\n\
<td><table border="0" align="center" class="georgia"><tr><td class="licznik">'+c+'</td></tr><tr><td>'+e+'</td></tr></table></td></tr>\n\
</table><br>');
  

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


function nwd(a, b) {
  while (b) {
    tmp = a % b;
    a = b;
    b = tmp;
  } return a;
}
