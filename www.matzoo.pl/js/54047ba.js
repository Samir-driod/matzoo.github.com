function los() {

    // los
    var glosy = wylosuj(5,10);
    var suma = sum_table(glosy);
    while (suma!=20) {
        glosy = wylosuj(5,10);
        suma = sum_table(glosy);
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
          ['cel', glosy[0]],
          ['bdb', glosy[1]],
          ['db', glosy[2]],
          ['dst', glosy[3]],
          ['dop', glosy[4]]
        ]);
        // Set chart options
        var options = {
                    title:'Diagram pokazuje oceny ze sprawdzianu.',
                    is3D: true,
                    width:0,
                    height:400,
                    legend:'bottom',
                    backgroundColor: 'none',
                    
                       //colors: [kolory[random_kolor]]
                   };
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);

        $('#chart_div text').css('font-family','helveticaneue');
        $('#chart_div text').css('font-weight','100');
        $('#chart_div text').css('font-size','16pt');
        $('#chart_div text').css('text-align','center');
    }
    // chart end


    var x = Math.round(Math.random() * 7);
    var pytania = [
        ['Ile procent uczniów otrzymało ocenę celującą?','Ocenę celującą otrzymało','% uczniów',parseInt(glosy[0]/20*100)],
        ['Ile procent uczniów otrzymało ocenę bardzo dobrą?','Ocenę bardzo dobrą otrzymało','% uczniów',parseInt(glosy[1]/20*100)],
        ['Ile procent uczniów otrzymało ocenę dobrą?','Ocenę dobrą otrzymało','% uczniów',parseInt(glosy[2]/20*100)],
        ['Ile procent uczniów otrzymało ocenę dostateczną?','Ocenę dostateczną otrzymało','% uczniów',parseInt(glosy[3]/20*100)],
        ['<span class="s19">Ile procent uczniów otrzymało ocenę bardzo dobrą lub lepszą?</span>','<span class="s19">Ocenę bardzo dobrą lub lepszą otrzymało','% uczniów</span>',parseInt(parseInt(glosy[1]+glosy[0])/20*100)],
        ['<span class="s19">Ile procent uczniów otrzymało ocenę dobrą lub lepszą?</span>','<span class="s19">Ocenę dobrą lub lepszą otrzymało','% uczniów</span>',parseInt(parseInt(glosy[2]+glosy[1]+glosy[0])/20*100)],
        ['<span class="s19">Ile procent uczniów otrzymało ocenę dobrą lub gorszą?</span>','<span class="s19">Ocenę dobrą lub gorszą otrzymało','% uczniów</span>',parseInt(parseInt(glosy[2]+glosy[3]+glosy[4])/20*100)],
        ['<span class="s19">Ile procent uczniów otrzymało ocenę dostateczną lub gorszą?</span>','<span class="s19">Ocenę dostateczną lub gorszą otrzymało','% uczniów</span>',parseInt(parseInt(glosy[3]+glosy[4])/20*100)],
    ];

    var wynik = pytania[x][3];

    // wyswietl los
    $('#wynik').val(wynik);
    $('#zadanie').html('<div id="chart_div"></div>');
    $('#zadanie').append('<p class="wyrazm s25">'+pytania[x][0]+'</p><p class="wyrazm s25 dblue">'+pytania[x][1]+' <input name="odp" type="tel" class="wyrazm" id="odp" size="1" maxlength="3"> '+pytania[x][2]+'.</p>');

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