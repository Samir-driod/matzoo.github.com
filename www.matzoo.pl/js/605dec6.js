limit = 5;
function los() {

    // los
    var x = Math.round(Math.random() * 2)+2;
    var y = Math.round(Math.random() * 5)+1;
    if ((y==5 || y==6) && x==4) x = Math.round(Math.random() * 1)+2;
    if (y==1 && x==1) x = Math.round(Math.random() * 2)+2;
    var pol = (y/2)
    if (Math.floor(pol)!=pol) pol = Math.floor(pol)+1;
    var icon = Math.round(Math.random() * 9)+1;
    
    var wynik = x;
    var wynik2 = x*y;

    
var tresc = '';
for (i=0;i<x;i++) {
    tresc = tresc + '<div class="btn border5 padding1p " style="background-color:#FFF;border-color:#BBB">';
    for (j=1;j<=y;j++) {
        tresc = tresc + '<img src="img/male/'+icon+'.png" class="icon-count" /> ';
        if (j==pol) tresc = tresc + '<br>';
    }
    tresc = tresc + '</div> ';
}


    // wyswietl los
    $('#zadanie').html(tresc);

        ginner = y;
        for (j=1;j<x;j++) {
            ginner = ginner + '+'+y;
        }
        ginner = ginner + ' = <input name="odp1" type="tel" class="w60" id="odp" size="1" maxlength="3"  autocomplete="off"/> · '+y;
    
        $('#zadanie').append('<p>'+ginner + '   = <input name="odp2" type="tel" class="w90" id="odp2" size="1" maxlength="3" autocomplete="off" /> \n\
<input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" /></p>');
    $('#wynik').val(wynik);
    $('#wynik2').val(wynik2);
$('input[name=odp1]').focus();

   

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    ginner = y;
        for (j=1;j<x;j++) {
            ginner = ginner + '+'+y;
        }
        ginner = ginner + ' = '+x+' · ' +y;
    wyn = parseInt(x) * parseInt(y);
    var statement = ' ' + ginner + ' = ' + wyn  + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '·'+y+'=' + $('#odp2').val() + '</span>';
    return statement;
}


$(document).ready(function () {
$('#zadanie').css('margin','20px');
$('#zadanie').css('min-height','160px');
    los();
    keyboardEnter(1);

});