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
                    height:400,
                    legend:'bottom',
                    backgroundColor: 'none',
                    enableInteractivity: false,
                    pieHole: 0,

        

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


    var x = Math.round(Math.random() * 9);
    x = wylosowany;
//    console.debug(x);

    var pytania = [
        ['Klasa liczy 20 osób. Ile osób dostało ocenę celującą?','Ocenę celującą dostało','osób',parseInt(glosy[0])],
        ['Klasa liczy 20 osób. Ile osób dostało ocenę wyższą niż 5?','Ocenę wyższą niż 5 dostało','osób',parseInt(glosy[0])],
        ['Klasa liczy 20 osób. Ile osób dostało ocenę nie niższą niż dostateczny?','Ocenę nie niższą niż dostateczny dostało','osób',parseInt(glosy[0]+glosy[1]+glosy[2]+glosy[3])],
        ['Klasa liczy 20 osób. Ile osób dostało ocenę nie niższą niż bardzo dobry?','Ocenę nie niższą niż bardzo dobry dostało','osób',parseInt(glosy[0]+glosy[1])],
        ['Klasa liczy 20 osób. Ile osób dostało ocenę niższą niż 4?','Ocenę niższą niż 4 dostało','osób',parseInt(glosy[5]+glosy[4]+glosy[3])],
        ['Klasa liczy 20 osób. Ile osób dostało ocenę nie wyższą niż 3?','Ocenę nie wyższą niż 3 dostało','osób',parseInt(glosy[5]+glosy[4]+glosy[3])],
        ['Klasa liczy 20 osób. Ile osób dostało ocenę bardzo dobrą?','Ocenę bardzo dobrą dostało','osób',parseInt(glosy[1])],
        ['Klasa liczy 20 osób. Ile osób dostało ocenę dobrą?','Ocenę dobrą dostało','osób',parseInt(glosy[2])],
        ['Klasa liczy 20 osób. Ile osób dostało ocenę dostateczną?','Ocenę dostateczną dostało','osób',parseInt(glosy[3])],
        ['Klasa liczy 20 osób. Ile osób dostało ocenę wyższą niż 4?','Ocenę wyższą niż 4 dostało','osób',parseInt(glosy[0]+glosy[1])],
        
    ];
        
    var wynik = pytania[x][3];

    // wyswietl los
    $('#wynik').val(wynik);
    $('#zadanie').html('<div id="chart_div"></div>');
    $('#zadanie').append('<p class="tekstowe s17">'+pytania[x][0]+'</p><p class="wyrazm s21">'+pytania[x][1]+' <input name="odp" type="tel" class="input" autocomplete="off" id="odp" size="1" maxlength="3"> '+pytania[x][2]+'.</p>');
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