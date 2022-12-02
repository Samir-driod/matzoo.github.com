function los() {

    // los
    var kolory = ['#EC1257', '#cc0c45', '#bc1027', '#ad1111'];
    var random_kolor = Math.round(Math.random() * 3);

    var glosy = wylosuj(10,30);
    for(var i = 0; i < 10; i++) { 
      glosy[i] = glosy[i]+90;
    }


    if (glosy[2]<glosy[4]) {
        var tmp = glosy[2];
        glosy[2] = glosy[4];
        glosy[4] = tmp;
    }

    if (glosy[0]<glosy[3]) {
        var tmp = glosy[0];
        glosy[0] = glosy[3];
        glosy[3] = tmp;
    }
    var suma = 0;
    
    
    for(var i = 0; i < glosy.length; i++) { 
      suma = suma + glosy[i]; 
    }    

    // chart start
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {packages: ['corechart', 'line']});
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    
    //var kolor = '#'+(Math.round(Math.random() * 7)+2)+''+(Math.round(Math.random() * 7)+2)+''+(Math.round(Math.random() * 7)+2)+''+(Math.round(Math.random() * 7)+2)+''+(Math.round(Math.random() * 7)+2)+''+(Math.round(Math.random() * 7)+2);
    var kolor = kolory[random_kolor];
    function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'dzień');
        data.addColumn('number', 'cena akcji (zł)');
        data.addRows([
          ['1 maja', glosy[0]],
          ['2 maja', glosy[1]],
          ['3 maja', glosy[2]],
          ['4 maja', glosy[3]],
          ['5 maja', glosy[4]],
          ['6 maja', glosy[5]],
          ['7 maja', glosy[6]],
          ['8 maja', glosy[7]],
          ['9 maja', glosy[8]],
          ['10 maja', glosy[9]],
          
        ]);
        // Set chart options
        var options = {'title':'Diagram pokazuje ceny akcji pewnej firmy w ciągu kolejnych 10 dni maja.',
                       'is3D':true,
                       'width':0,
                       'height':300,
                       legend:'bottom',
                       backgroundColor: 'none',
                       colors:[kolor]
                      // colors: [kolory[random_kolor]]
                   };
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);

        $('#chart_div text').css('font-family','helveticaneue');
        $('#chart_div text').css('font-weight','normal');
        $('#chart_div text').css('font-size','16pt');
    }
    // chart end


    var x = Math.round(Math.random() * 5);
    
    if (x==0 || x==5) {
        var wynik = glosy[9]-glosy[0];
        console.debug(wynik);
        if (wynik<0) {
            wynik = wynik*(-1);
            var tresc1 = 'Ceny akcji w tym okresie zmalały o';
        } else {
            var tresc1 = 'Ceny akcji w tym okresie wzrosły o';
        }
        var tresc2 = 'zł';
    }
    else if (x==1) {
        var max = glosy[0];
        for (var i=0; i < glosy.length; i++) {
            if (max <= glosy[i]) {
                max = glosy[i];
            }
        }
        wynik = max;
        var tresc1 = 'Najwyższa cena akcji w tym okresie wynosiła';
        var tresc2 = 'zł';
    }
    else if (x==2) {
        var min = glosy[0];
        for (var i=0; i < glosy.length; i++) {
            if (min >= glosy[i]) {
                min = glosy[i];
            }
        }
        wynik = min;
        var tresc1 = 'Najniższa cena akcji w tym okresie wynosiła';
        var tresc2 = 'zł';
    }
    else if (x==3) {
        var max = glosy[0]; var index_max = 0;
        for (var i=0; i < glosy.length; i++) {
            if (max <= glosy[i]) {
                max = glosy[i];
                index_max = i;
            }
        }
        wynik = index_max+1;
        var tresc1 = 'Cena akcji była najwyższa';
        var tresc2 = 'maja';
    }
    else if (x==4) {
        var min = glosy[0]; var index_min = 0;
        for (var i=0; i < glosy.length; i++) {
            if (min >= glosy[i]) {
                min = glosy[i];
                index_min = i;
            }
        }
        wynik = index_min+1;
        var tresc1 = 'Cena akcji była najniższa';
        var tresc2 = 'maja';
    }
    //console.debug(wynik);

    //var wynik = pytania[x][3];

    // wyswietl los
    $('#wynik').val(wynik);
    $('#zadanie').html('<div id="chart_div"></div>');
    $('#zadanie').append('<p class="wyrazm s21 dblue">'+tresc1+' <input name="odp" type="tel" class="wyrazm" id="odp" size="2" maxlength="3"> '+tresc2+'.</p><p>&nbsp;</p>');

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