limit = 5;
function los() {

    // los
    var x = Math.round(Math.random() * 2)+2;
    var y = Math.round(Math.random() * 4)+1;
    if (y==5 && x==4) x = Math.round(Math.random() * 1)+2;
    if (y==1 && x==1) x = Math.round(Math.random() * 2)+2;
    var pol = (y/2)
    if (Math.floor(pol)!=pol) pol = Math.floor(pol)+1;
    var icon = Math.round(Math.random() * 9)+21;
    
    var wynik = x + '·' + y;
    var tab = [wynik];

    for (i = 1; i < 3; i++) {
        xn = Math.round(Math.random() * 2)+2;
        xn2 = Math.round(Math.random() * 4)+1;
        
        while (xn == x && xn2== y || xn2 == x && xn== y || (xn + '·' + xn2)==tab[i-1]) {
            xn = Math.round(Math.random() * 2)+2;
            xn2 = Math.round(Math.random() * 4)+1;
        }
        if (i == 2)
                while (xn == x && xn2== y || xn2 == x && xn== y || (xn + '·' + xn2)==tab[i-1] || (xn + '·' + xn2)==tab[i-2]) {
                xn = Math.round(Math.random() * 2)+2;
                xn2 = Math.round(Math.random() * 4)+1;
            }
        tab[i] = xn + '·' + xn2;
    }
    var example = Math.round(Math.random() * 2);
    if (example==1) {
        var tmp = tab[0]; tab[0] = tab[1]; tab[1] = tmp;
    }
    else if (example==2) {
        var tmp = tab[0]; tab[0] = tab[2]; tab[2] = tmp;
    }
    
var tresc = '';
for (i=0;i<x;i++) {
    tresc = tresc + '<div class="btn border5 padding1p bg-warning" style="border-color:#EC971F">';
    for (j=1;j<=y;j++) {
        tresc = tresc + '<img src="img/male/'+icon+'.png" class="icon-count" /> ';
        if (j==pol) tresc = tresc + '<br>';
    }
    tresc = tresc + '</div> ';
}


    // wyswietl los
    $('#zadanie').html(tresc);
    $('#wynik').val(wynik);
    for (i = 0; i < 3; i++) {
        zb = tab[i][0];
        el = tab[i][2]; 
        ginner = el;
        for (j=1;j<zb;j++) {
            ginner = ginner + '+'+el;
        }
        
        gtresc = '<span class="btn btn-warning btn-matzoo gradient text-black s40" onclick="klik(\''+tab[i]+'\')">'+ginner+'</span>';
        $('#guziki').append(gtresc);
    }

}


function oblicz() {

    // jesli dobra odpowiedź
    if ($('#odp').val() == $('#wynik').val()) {

        countCorrect();
        cleanSpace();
        los();

    } // jeśli zła odpowiedź
    else {

        countWrong();
    }
}

function klik(em) {
    $('#odp').val(em);
    oblicz();
}


$(document).ready(function () {
$('#zadanie').css('margin','20px');
$('#zadanie').css('min-height','160px');
    los();

});