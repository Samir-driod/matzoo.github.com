limit = 19;
function los() {

    // los
    var imiona = ['Mama', 'Tata', 'Zuzia', 'Jola'];
    var obo = ['kto wyprowadza psa na spacer', 'kto zamiata', 'kto nakrywa do stołu', 'kto wynosi śmieci'];
    var obod = ['Kto wyprowadza psa na spacer', 'Kto zamiata', 'Kto nakrywa do stołu', 'Kto wynosi śmieci'];
    var week = ['w poniedziałek', 'we wtorek', 'w środę', 'w czwartek', 'w piątek', 'w sobotę', 'w niedzielę'];

    var table = [
        [0, 1, 2, 3],
        [0, 1, 3, 2],
        [0, 2, 1, 3],
        [0, 2, 3, 1],
        [0, 3, 2, 1],
        [1, 0, 2, 3],
        [1, 0, 3, 2],
        [1, 3, 0, 2],
        [1, 2, 3, 0],
        [1, 3, 2, 0],
        [2, 1, 0, 3],
        [2, 0, 1, 3],
        [2, 0, 1, 3],
        [2, 3, 1, 0],
        [2, 3, 0, 1],
        [3, 1, 2, 0],
        [3, 2, 1, 0],
        [3, 0, 1, 2],
        [3, 0, 2, 1],
        [3, 2, 0, 1]

    ];

    var a = Math.round(Math.random() * 9);
    var tab = [a];

    for (i = 1; i < 7; i++) {
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
        tab[i] = xn;
    }

    var tresc = '<div style="overflow: hidden; margin-bottom: 12px;">';
    for (i = 0; i < 4; i++) {
        tresc = tresc + '<div class="col-md-6 col-sm-6 text-left"><img style="height:30px"  src="imgtask/315/' + i + '.png"> ' + obo[i] + '</div>';
    }

    var x = Math.round(Math.random() * 3);
    var y = Math.round(Math.random() * 6);
    var wynik = '';
    for (i = 0; i < 4; i++) {
        if (table[tab[y]][i] == x)
            wynik = i;
    }

    var tresc = tresc + '</div>\n\
<table class="table table-bordered table-condensed" style="width:94%">';
    tresc = tresc + '<tr style="font-family:helveticaneueb"><td>&nbsp;</td><td>Mama</td><td>Tata</td><td>Zuzia</td><td>Jola</td>';
    tresc = tresc + '</tr><tr><td>Pn</td>';

    for (i = 0; i < 4; i++) {
        tresc = tresc + '<td><img style="height:30px"  src="imgtask/315/' + table[tab[0]][i] + '.png"></td>';
    }
    tresc = tresc + '</tr><tr><td>Wt</td>';
    for (i = 0; i < 4; i++) {
        tresc = tresc + '<td><img style="height:30px"  src="imgtask/315/' + table[tab[1]][i] + '.png"></td>';
    }
    tresc = tresc + '</tr><tr><td>Śr</td>';
    for (i = 0; i < 4; i++) {
        tresc = tresc + '<td><img style="height:30px"  src="imgtask/315/' + table[tab[2]][i] + '.png"></td>';
    }
    tresc = tresc + '</tr><tr><td>Cz</td>';
    for (i = 0; i < 4; i++) {
        tresc = tresc + '<td><img style="height:30px"  src="imgtask/315/' + table[tab[3]][i] + '.png"></td>';
    }
    tresc = tresc + '</tr><tr><td>Pt</td>';
    for (i = 0; i < 4; i++) {
        tresc = tresc + '<td><img style="height:30px"  src="imgtask/315/' + table[tab[4]][i] + '.png"></td>';
    }
    tresc = tresc + '</tr><tr><td>So</td>';
    for (i = 0; i < 4; i++) {
        tresc = tresc + '<td><img style="height:30px"  src="imgtask/315/' + table[tab[5]][i] + '.png"></td>';
    }
    tresc = tresc + '</tr><tr><td>N</td>';
    for (i = 0; i < 4; i++) {
        tresc = tresc + '<td><img style="height:30px"  src="imgtask/315/' + table[tab[6]][i] + '.png"></td>';
    }

    tresc = tresc + '</tr>';
    tresc = tresc + '</table>';
    tresc = tresc + '<p style="font-family: helveticaneueb; font-size: 18pt;">' + obod[x] + ' ' + week[y] + '?</p>';
    
    // wyswietl los
    $('#zadanie').html(tresc);
    $('#wynik').val(wynik);
    for (i = 0; i < 4; i++)
        $('#guziki').append('<span class="btn btn-matzoo btn-primary" onclick="klik(' + i + ')">' + imiona[i] + '</span>');

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

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('spr_tekstowe');
    $('#zadanie').css('margin-left', '5%');
    $('#zadanie').css('font-size', '15pt');
    $('#zadanie').css('font-family', 'helveticaneue');

    los();



});


