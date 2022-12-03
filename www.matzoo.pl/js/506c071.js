limit = 19;
function los() {

    // los

    var week = [
        [1,'w poniedziałek'], 
        [2,'we wtorek'], 
        [3,'w środę'], 
        [4,'w czwartek'], 
        [5,'w piątek'],
        [6,'w sobotę'],
        [7,'w niedzielę']
    ];
    var table = [
        [' 6 5 6 2 5 1 3',' 22 21 20 22 20 25 24'],
        [' 5 6 5 6 7 8 7',' 20 19 18 16 12 10 13'],
        [' 2 3 3 3 3 4 2',' 21 19 19 17 16 14 18'],
        [' 2 2 1 1 1 2 2',' 25 26 29 30 32 28 27'],
        [' 3 2 1 3 1 2 2',' 17 22 29 26 32 27 26'],
        [' 4 4 3 3 2 3 1',' 15 12 11 18 22 23 26'],
        [' 4 5 5 4 3 3 2',' 15 12 11 18 22 23 22'],
        [' 8 7 7 6 6 5 4',' 5 10 11 14 16 13 12'],
        [' 3 3 4 5 4 5 5',' 20 20 18 17 16 13 15'],
        [' 1 1 2 3 4 3 2',' 30 29 28 27 26 23 25'],
    ];
    
    var a = Math.round(Math.random() * 9);
    var tab = table[a];
    var pogoda = tab[0].split(' ');
    var temperatury = tab[1].split(" ");

    var tresc = '<div style="overflow: hidden; margin-bottom: 12px;">';
    
    var y = Math.round(Math.random() * 6);
    var wynik = '';
    wynik = parseInt(temperatury[week[y][0]]);

    var tresc = tresc + '</div>\n\
<table class="table table-bordered table-condensed" style="width:94%">';
    tresc = tresc + '<tr class="s19" style="font-family:helveticaneueb"><td>Pn</td><td>Wt</td><td>Śr</td><td>Cz</td><td>Pt</td><td>So</td><td>N</td>';
    tresc = tresc + '</tr><tr>';

    for (i = 1; i < 8; i++) {
        tresc = tresc + '<td><img style="max-height:60px" class="img-responsive center-block"  src="imgtask/pogoda' + pogoda[i] + '.png"></td>';
    }
    tresc = tresc + '</tr><tr>';
    for (i = 1; i < 8; i++) {
        tresc = tresc + '<td class="s19">'+temperatury[i]+'°C</td>';
    }
    

    tresc = tresc + '</tr>';
    tresc = tresc + '</table>';
    tresc = tresc + '<p class="wyrazm s25">Jaka jest temperatura ' + week[y][1] + '?</p>\n\
   <p class="wyrazm s25 dblue">Temperatura ' + week[y][1] + ' wynosi <input name="odp" type="tel" class="wyrazm" id="odp" size="1" maxlength="3" autocomplete="off" /> °C.</p>\n\
';
    
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
    $('#zadanie').css('margin-left', '5%');
    $('#zadanie').css('font-family', 'helveticaneue');

    los();
    keyboardEnter(0);



});


