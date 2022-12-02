
function los() {

    // los
    var a = Math.round(Math.random() * 80) + 2;
    var b = Math.round(Math.random() * 50) + 12;
    var c = Math.round(Math.random() * 50) + 2;
    var ex = Math.round(Math.random() * 2);
    if (ex == 2) {
        a = a * 10;
        b = b * 10;
        c = c * 10;
    }
    var aex = Math.round(Math.random() * 2);
    var bex = Math.round(Math.random() * 2);
    var cex = Math.round(Math.random() * 2);

    var ap = a;
    var bp = b;
    var cp = c;

console.debug('a '+a+' b '+b+' c '+c+' aex '+aex+' bex '+bex+' cex '+cex);

    if (aex == 1) {
        ajedn = 'dm';
        ap = a / 10;
        ap = str_replace('.', ',', ap);
    }
    else if (aex == 2) {
        ajedn = 'm';
        ap = a / 100;
        ap = str_replace('.', ',', ap);
    }
    else {
        ajedn = 'cm';
    }

    if (bex == 1) {
        bjedn = 'dm';
        bp = b / 10;
        bp = str_replace('.', ',', bp);
    }
    else if (bex == 2) {
        bjedn = 'm';
        bp = b / 100;
        bp = str_replace('.', ',', bp);
    }
    else {
        bjedn = 'cm';
    }

    if (cex == 1) {
        cjedn = 'dm';
        cp = c / 10;
        cp = str_replace('.', ',', cp);
    }
    else if (cex == 2) {
        cjedn = 'm';
        cp = c / 100;
        cp = str_replace('.', ',', cp);
    }
    else {
        cjedn = 'cm';
    }
    // zakomentowane bo nie wiem o co mi chodzilo, a przez to, gdy byl ex=1 wychodzily zle wyniki. 
//if (ex==1) {
//    ajedn = 'cm'; bjedn = 'cm'; cjedn = 'cm';
//}

    var tresc = 'Czy z podanych boków można zbudować trójkąt?</p><p style="color:#111;" class="bolder s21">\n\
 |AB| = <span style="color:#111;">' + ap + '</span> ' + ajedn + '<br> \n\
 |BC| = <span style="color:#111;">' + bp + '</span> ' + bjedn + '<br>\n\
 |CA| = <span style="color:#111">' + cp + '</span>\n\  ' + cjedn + '';

    if (a + b <= c || a + c <= b || b + c <= a) {
        var wynik = 'NIE';
    }
    else
        wynik = 'TAK';

console.debug ('ex '+ex+' wynik '+wynik);
    // wyswietl los
    $('#zadanie').html('<div><p>' + tresc + '</p>\n\
<p class="text-center"><span class="s30 btn btn-success btn-matzoo" onclick="klik(this)">TAK</span> \n\
<span  class="btn btn-danger s30 btn-matzoo" onclick="klik(this)">NIE</span><input type="hidden" id="odp" name="odp"/></p></div>');
    $('#wynik').val(wynik);
    $('#odp').focus();

}


function createStatement() {
}

function klik(em) {
    $('#odp').val($(em).html());
    obliczEnter(0);
}


$(document).ready(function() {

    los();
    $('#content20').css('padding-left','5%');
    $('#zadanie').addClass('tekstowe');
    $('#zadanie').addClass('s19');

});