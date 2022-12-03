function los() {

    // los
    var kolory = ['#EC1257', '#cc0c45', '#bc1027', '#ad1111'];
    var random_kolor = Math.round(Math.random() * 3);

    var glosy = wylosuj(8,25);
    for(var i = 0; i < 8; i++) { 
      glosy[i] = glosy[i]+5;
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
    google.charts.load('current', {'packages':['bar']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    
    //var kolor = '#'+(Math.round(Math.random() * 7)+2)+''+(Math.round(Math.random() * 7)+2)+''+(Math.round(Math.random() * 7)+2)+''+(Math.round(Math.random() * 7)+2)+''+(Math.round(Math.random() * 7)+2)+''+(Math.round(Math.random() * 7)+2);
    var kolor = kolory[random_kolor];
    function drawChart() {

        // Create the data table.
        var data = google.visualization.arrayToDataTable([
          ['hobby', 'chłopcy', 'dziewczęta' ],
          ['słuchanie muzyki', glosy[0], glosy[1]],
          ['granie na komputerze', glosy[2], glosy[3]],
          ['czytanie książek', glosy[4], glosy[5]],
          ['zabawy na świeżym powietrzu', glosy[6], glosy[7]]
        ]);
        
        
            

        // Set chart options
        var options = {'title':'  Diagram pokazuje, jak uczniowie pewnej szkoły lubią spędzać czas wolny.',
                       'is3D':true,
                       'width':0,
                       'height':300,
                       legend:'none',
                       backgroundColor: 'none',
                       bars: 'horizontal'
                   };
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.charts.Bar(document.getElementById('chart_div'));

        chart.draw(data, google.charts.Bar.convertOptions(options));

        $('#chart_div text').css('font-family','helveticaneue');
        $('#chart_div text').css('font-weight','normal');
        $('#chart_div text').css('font-size','16pt');
    }

    // chart end


    var x = Math.round(Math.random() * 11);
    if (x==0) {
        var wynik = glosy[0];
        var tresc1 = '';
        var tresc2 = ' chłopców lubi najbardziej słuchać muzyki';
    }
    else if (x==1) {
        var wynik = glosy[1];
        var tresc1 = '';
        var tresc2 = ' dziewcząt lubi najbardziej słuchać muzyki';
    }
    else if (x==2) {
        var wynik = glosy[2];
        var tresc1 = '';
        var tresc2 = ' chłopców lubi najbardziej grać na komputerze';
    }
    else if (x==3) {
        var wynik = glosy[3];
        var tresc1 = '';
        var tresc2 = ' dziewcząt lubi najbardziej grać na komputerze';
    }
    else if (x==4) {
        var wynik = glosy[4];
        var tresc1 = '';
        var tresc2 = ' chłopców lubi najbardziej czytać książki';
    }
    else if (x==5) {
        var wynik = glosy[5];
        var tresc1 = '';
        var tresc2 = ' dziewcząt lubi najbardziej czytać książki';
    }
    else if (x==6) {
        var wynik = glosy[6];
        var tresc1 = '';
        var tresc2 = ' chłopców lubi najbardziej zabawy na świeżym powietrzu';
    }
    else if (x==7) {
        var wynik = glosy[7];
        var tresc1 = '';
        var tresc2 = ' dziewcząt lubi najbardziej zabawy na świeżym powietrzu';
    }
    else if (x==8 || x==9) {
        var wynik = glosy[0]+glosy[2]+glosy[4]+glosy[6];
        var tresc1 = '';
        var tresc2 = ' chłopców wzięło udział w ankiecie';
    }
    else if (x==10 || x==11) {
        var wynik = glosy[1]+glosy[3]+glosy[5]+glosy[7];
        var tresc1 = '';
        var tresc2 = ' dziewcząt wzięło udział w ankiecie';
    }
    //console.debug(wynik);

    //var wynik = pytania[x][3];

    // wyswietl los
    $('#wynik').val(wynik);
    $('#zadanie').html('<div id="chart_div"></div>');
    $('#zadanie').append('<br><p class="wyrazm s19 dblue">'+tresc1+' <input name="odp" type="tel" class="wyrazm" id="odp" size="2" maxlength="3"> '+tresc2+'.</p><p>&nbsp;</p>');

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    var statement = 'Spróbuj ponownie. <span class="s13 pull-right" style="margin-top: 4%;"><a onclick="los()" class="text-black" style="cursor: pointer;">Chcę następny przykład</a></span>';
    return statement;
}



$(document).ready(function () {

    $('#zadanie').removeClass('wyraz1');
    $('#task.zadanie').css('font-size','10pt');
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