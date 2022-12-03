function los() {

    // los
    var imiona = ['Paulina','Karina','Ada','Joanna','Martyna','Laura','Natasza','Małgosia','Agata','Iga','Eliza','Basia','Zosia','Gabrysia','Daria'];
    var imionab = ['Pauliny','Kariny','Ady','Joanny','Martyny','Laury','Nataszy','Małgosi','Agaty','Igi','Elizy','Basi','Zosi','Gabrysi','Darii'];
    var imiona2 = ['Krzyś','Paweł','Łukasz','Krystian','Gracjan','Filip','Kuba','Mateusz','Wiktor','Igor','Waldek','Damian'];
    var imiona2b = ['Krzyia','Pawła','Łukasza','Krystiana','Gracjana','Filipa','Kuby','Mateusza','Wiktora','Igora','Waldka','Damiana'];
    var dziewczynki = wylosuj(3, 14);
    var chlopcy = wylosuj(2, 11);
    var glosy = wylosuj(5,20);
    var kolory = ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f'];
    var random_kolor = Math.round(Math.random() * 3);

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
    google.charts.load('current', {'packages':['corechart']});
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    
    var kolor = '#'+(Math.round(Math.random() * 7)+2)+''+(Math.round(Math.random() * 7)+2)+''+(Math.round(Math.random() * 7)+2)+''+(Math.round(Math.random() * 7)+2)+''+(Math.round(Math.random() * 7)+2)+''+(Math.round(Math.random() * 7)+2);

    function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'uczeń');
        data.addColumn('number', 'ilość głosów');
        data.addRows([
          [imiona[dziewczynki[0]], glosy[0]],
          [imiona[dziewczynki[1]], glosy[1]],
          [imiona2[chlopcy[0]], glosy[2]],
          [imiona[dziewczynki[2]], glosy[3]],
          [imiona2[chlopcy[1]], glosy[4]]
        ]);
        // Set chart options
        var options = {'title':'Diagram pokazuje wyniki wyborów do samorządu.',
                       'is3D':true,
                       'width':0,
                       'height':300,
                       legend:'bottom',
                       backgroundColor: 'none',
                       colors:[kolor]
                      // colors: [kolory[random_kolor]]
                   };
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);

        $('#chart_div text').css('font-family','helveticaneue');
        $('#chart_div text').css('font-weight','normal');
        $('#chart_div text').css('font-size','16pt');
    }
    // chart end


    var x = Math.round(Math.random() * 2);
    
    if (x==0) {
        var wynik = suma;
    }
    else if (x==1) {
        wynik = glosy[2]-glosy[4];
    }
    else if (x==2) {
        wynik = glosy[0]-glosy[3];
    }
    
    if (wynik==1) {
        var pg = 'głos';
        var zo = 'Został oddany';
    } else if ((wynik%10==2 || wynik%10==3 || wynik%10==4) && wynik!=12 && wynik!=13 && wynik!=14) {
        pg = 'głosy';
        zo = 'Zostały oddane';
    } else {
        pg = 'głosów';
        zo = 'Zostało oddanych';
    }
    var pytania = [
        ['Ile zostało oddanych głosów w tych wyborach?',zo,pg,suma],
        ['O ile więcej głosów zdobył '+imiona2[chlopcy[0]]+' od '+imiona2b[chlopcy[1]]+'?',imiona2[chlopcy[0]]+' zdobył',pg+' więcej niż '+imiona2[chlopcy[1]],(glosy[2]-glosy[4])],
        ['O ile więcej głosów zdobyła '+imiona[dziewczynki[0]]+' od '+imionab[dziewczynki[2]]+'?',imiona[dziewczynki[0]]+' zdobyła',pg+' więcej niż '+imiona[dziewczynki[2]],(glosy[0]-glosy[3])]
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