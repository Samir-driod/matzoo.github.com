limit = 14;
function los() {

    // los

    var table = [
        ['sok pomidory ziemniaki ogórki makaron cukinia szpinak brokuł cytryny jaja jabłka pomarańcze arbuz chleb ciastka cebula',
         '3 6 4 3 4 7 6 8 10 12 2 5 5 3 9 1'],
    ];
    
    var a = Math.round(Math.random() * 9); a = 0;
    var tab = table[a];
    var pogoda = tab[0].split(' ');
    var ceny = tab[1].split(" ");

    var tresc = '<div style="overflow: hidden; margin-bottom: 12px;">';
    
    var a = Math.round(Math.random() * 9);
    var tab = [a];

    for (i = 1; i < 8; i++) {
        var xn = Math.round(Math.random() * (limit - 1)) + 1;
        while (xn == tab[i - 1])
            xn = Math.round(Math.random() * limit);
        if (i == 2)
            while (xn == tab[i - 2] || xn == tab[i - 1])
                xn = Math.round(Math.random() * limit);
        if (i == 3)
            while (xn == tab[i - 3] || xn == tab[i - 2] || xn == tab[i - 1])
                xn = Math.round(Math.random() * limit);
        if (i == 4)
            while (xn == tab[i - 4] || xn == tab[i - 3] || xn == tab[i - 2] || xn == tab[i - 1])
                xn = Math.round(Math.random() * limit);
        if (i == 5)
            while (xn == tab[i - 5] || xn == tab[i - 4] || xn == tab[i - 3] || xn == tab[i - 2] || xn == tab[i - 1])
                xn = Math.round(Math.random() * limit);
        if (i == 6)
            while (xn == tab[i - 6] || xn == tab[i - 5] || xn == tab[i - 4] || xn == tab[i - 3] || xn == tab[i - 2] || xn == tab[i - 1])
                xn = Math.round(Math.random() * limit);
        if (i == 7)
            while (xn == tab[i - 7] || xn == tab[i - 6] || xn == tab[i - 5] || xn == tab[i - 4] || xn == tab[i - 3] || xn == tab[i - 2] || xn == tab[i - 1])
                xn = Math.round(Math.random() * limit);
        tab[i] = xn;
    }
    //console.debug(tab);

    var tresc = tresc + '</div>\n\
<table class="table table-condensed paragon s15" style="max-width:300px;margin:0 auto"><tr><th colspan="2"><p class="dashed text-center">PARAGON</p></th></tr>';
   // tresc = tresc + '<tr class="s19" style="font-family:helveticaneueb"><td>Pn</td><td>Wt</td><td>Śr</td><td>Cz</td><td>Pt</td><td>So</td><td>N</td>';
   // tresc = tresc + '</tr><tr>';
    tresc = tresc + '<tr>';

    var ile = Math.round(Math.random() * 2)+4;
    var wynik = 0;
    for (i = 1; i <= ile; i++) {
        tresc = tresc + '<td>' + pogoda[tab[i]] + '</td><td class="text-right">' + ceny[tab[i]] + '&nbsp; zł</td></tr><tr>';
        wynik = wynik + parseInt(ceny[tab[i]]);
    }

    

    tresc = tresc + '</tr><tr class=dashed><th colspan="2"><p class="dashed-top">SUMA<span class="pull-right"><input name="odp" type="tel" class="bold" id="odp" size="1" autocomplete="off" maxlength="3" /> zł</span></p></th></tr>';
    tresc = tresc + '</table><p>&nbsp;</p>';
    
    // wyswietl los
    $('#zadanie').html(tresc);
    $('#wynik').val(wynik);


}

function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    wyn = parseInt(x) + parseInt(y);
    var statement = ' Spróbuj ponownie.';
    return statement;
}



$(document).ready(function () {

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('tekstowe');
    $('#zadanie').css('margin-left', '5%');
    
    los();
    keyboardEnter(0);



});


