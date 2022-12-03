function los() {

    // los
    var glosy = wylosuj_bezzera(5,10);
    var suma = sum_table(glosy);
    while (suma>=20) {
        glosy = wylosuj_bezzera(5,10);
        suma = sum_table(glosy);
    }
    glosy[5] = 20-suma;
    //console.debug(glosy);
    var kolory = ['#FEDEBE','#FFAF42','#FF8303','#ED6200','#FD5602','#C9490A'];
    
function wylosuj(ile, skad) {
    linia = Math.round(Math.random() * skad);
    linie = [];
    linie.push(linia);
    while (linie.length < ile) {
        linia = Math.round(Math.random() * skad);
        while (jQuery.inArray(linia, linie) != - 1)
            linia = Math.round(Math.random() * skad);
        linie.push(linia);
    }
    return linie;
}
    
function wylosuj_bezzera(ile, skad) {
    linia = Math.round(Math.random() * (skad-1))+1;
    linie = [];
    linie.push(linia);
    while (linie.length < ile) {
        linia = Math.round(Math.random() * skad);
        while (jQuery.inArray(linia, linie) != - 1)
            linia = Math.round(Math.random() * skad);
        linie.push(linia);
    }
    return linie;
}

var bloki = wylosuj(6,5);
//console.debug(bloki);


for (i=0;i<6;i++) {
    if (bloki[i]==0) wylosowany = i;
}

    // chart start
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.

    function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'ocena');
        data.addColumn('number', 'ilość ocen');
        data.addRows([
          ['6', glosy[0]],
          ['5', glosy[1]],
          ['4', glosy[2]],
          ['3', glosy[3]],
          ['2', glosy[4]],
          ['1', glosy[5]]
        ]);
        // Set chart options
        var options = {
                    title:'Diagram pokazuje oceny ze sprawdzianu.',
                    is3D: true,
                    width:0,
                    height:420,
                    legend:'bottom',
                    backgroundColor: 'none',
                    enableInteractivity: false,
                    pieHole: 0,
pieSliceTextStyle: {color: '#FEDEBE'}      ,              
                    slices: {
           
            0: { color: kolory[bloki[0]] },
            1: { color: kolory[bloki[1]] },
            2: { color: kolory[bloki[2]]},
            3: { color: kolory[bloki[3]]},
            4: { color: kolory[bloki[4]] },
            5: { color: kolory[bloki[5]] },
          }
        

                       //colors: [kolory[random_kolor]]
                   };
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);

        $('#chart_div text').css('font-family','Open Sans');
        $('#chart_div text').css('font-weight','100');
        $('#chart_div text').css('font-size','11pt');
        $('#chart_div text').css('text-align','center');
    }
    // chart end


    var x = Math.round(Math.random() * 4);
    x = wylosowany;
    //console.debug(x);
    var pytania = [
        ['Ile procent stanowią szóstki w tej klasie?','Szóstki stanowią','%',parseInt(glosy[0]/20*100)],
        ['Ile procent stanowią piątki w tej klasie?','Piątki stanowią','%',parseInt(glosy[1]/20*100)],
        ['Ile procent stanowią czwórki w tej klasie?','Czwórki stanowią','%',parseInt(glosy[2]/20*100)],
        ['Ile procent stanowią trójki w tej klasie?','Trójki stanowią','%',parseInt(glosy[3]/20*100)],
        ['Ile procent stanowią dwójki w tej klasie?','Dwójki stanowią','%',parseInt(glosy[4]/20*100)],
        ['Ile procent stanowią jedynki w tej klasie?','Jedynki stanowią','%',parseInt(glosy[5]/20*100)],
    ];

    var wynik = pytania[x][3];

    // wyswietl los
    $('#wynik').val(wynik);
    $('#zadanie').html('<div id="chart_div"></div>');
    $('#zadanie').append('<p class="tekstowe s19">'+pytania[x][0]+'</p><p class="wyrazm s21">'+pytania[x][1]+' <input name="odp" type="tel" class="input" autocomplete="off" id="odp" size="1" maxlength="3"> '+pytania[x][2]+'.</p>');
$('#odp').focus();
}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    var statement = 'Spróbuj ponownie. <span class="s13 pull-right" style="margin-top: 4%;"><a onclick="los()" class="text-black" style="cursor: pointer;">Chcę następny przykład</a></span>';
    return statement;
}



$(document).ready(function () {

    $('#zadanie').removeClass('wyraz1');
    los();
    keyboardEnter(0);

});


function wylosuj(ile, skad) {
    linia = Math.round(Math.random() * skad);
    linie = [];
    linie.push(linia);
    while (linie.length < ile) {
        linia = Math.round(Math.random() * skad);
        while (jQuery.inArray(linia, linie) != - 1)
            linia = Math.round(Math.random() * skad);
        linie.push(linia);
    }
    return linie;
}

function sum_table(table) {
    var suma = 0;
    for(var i = 0; i < table.length; i++) { 
      suma = suma + table[i]; 
    }  
    return suma;
}