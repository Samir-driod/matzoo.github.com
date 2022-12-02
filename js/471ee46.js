 function wylosuj(ile,skad) {
    linia = Math.round(Math.random()*skad);
    linie = [];
    linie.push(linia);
    while (linie.length<ile) {
      linia = Math.round(Math.random()*skad);
      while (jQuery.inArray(linia,linie)!=-1) linia = Math.round(Math.random()*skad);
      linie.push(linia);
    }
    return linie;
 }  

function los() {
    
    
    // los
    var x = Math.round(Math.random() * 9)+1;
    x = x * 10; 
    var y = Math.round(Math.random() * 99);
    while (x < (2*y)) {
        x = Math.round(Math.random() * 9)+1;
        x = x * 10; 
        y = Math.round(Math.random() * 99);
    }
    var wynik = x - y;

    var godziny = [
        ['7:35','za dwadzieścia pięć ósma'],
        ['7:40','za dwadzieścia ósma'],
        ['7:45','kwadrans przed ósmą'],
        ['7:50','za dziesięć ósma'],
        ['7:55','za pięć ósma'],
        ['8:15','kwadrans po ósmej'],
        ['8:30','wpół do dziewiątej'],
        ['8:40','za dwadzieścia dziewiąta'],
        ['8:45','kwadrans przed dziewiątą'],
        ['8:50','za dziesięć dziewiąta'],
        ['8:55','za pięć dziewiąta'],
        ['9:45','kwadrans przed dziesiątą'],
        ['9:50','za dziesięć dziesiąta'],
        ['9:55','za pięć dziesiąta'],
        ['10:15','kwadrans po dziesiątej'],
        ['10:40','za dwadzieścia jedenasta'],
        ['10:45','kwadrans przed jedenastą'],
        ['10:50','za dziesięć jedenasta'],
        ['10:55','za pięć jedenasta'],
        ['11:30','wpół do dwunastej'],
        ['11:40','za dwadzieścia dwunasta'],
        ['11:45','kwadrans przed dwunastą'],
        ['11:50','za dziesięć dwunasta'],
        ['11:55','za pięć dwunasta'],
    ];
    
    var miasta = ['Kraków','Łódź','Katowice','Warszawa','Wrocław','Poznań','Gdańsk','Tarnów','Bydgoszcz','Lublin'];
    
    var ile = godziny.length-1;
    var ilem = miasta.length-1;

    var dane = wylosuj(5,ile);
    var x = dane[0];
    var dane_miasta = wylosuj(5,ilem);
    dane.sort(sortNumber);
    console.debug(dane);
    

    var example = Math.round(Math.random()*ile);

    var text = godziny[x][1];

    var tresc = '<table class="table table-condensed rozklad_jazdy_autobusow">\n\
    <tr>\n\
        <th colspan="2" class=s19>ROZKŁAD JAZDY AUTOBUSÓW</th>\n\
    </tr>\n\
    <tr>\n\
        <th><span class="margin10 btn-matzoo btn text-black s15 margin0">GODZINA ODJAZDU</span></th>\n\
        <th><span class="margin10 btn-matzoo btn text-black s15 margin0">STACJA KOŃCOWA</span></th>\n\
    </tr>';
    
    for (i=0;i<5;i++) {
        tresc = tresc + '<tr>\n\
        <td><span class="margin10 btn-matzoo btn text-black s15 margin0">'+godziny[dane[i]][0]+'</span></td>\n\
        <td><a class="margin10 btn-matzoo w100p btn btn-warning text-black s15 margin0" onclick="oblicz(\''+x+'\',\''+dane[i]+'\')">'+miasta[dane_miasta[i]]+'</td>\n\
    </tr>';
    }
    
    
    tresc = tresc + '</table>\n\
<p class="wyrazm s19">Który autobus odjeżdża '+text+'?</p><br>';

    // wyswietl los
    $('#zadanie').html(tresc + ' <input name="odp" type="hidden" id="odp" size="1" maxlength="3" autocomplete="off" />\n\
');
    $('#wynik').val(wynik);
    $('#odp').focus();

}

function oblicz(x, i) {

    if (x == i)
        ok = 1;
    else
        ok = 0;

  
  if(ok==1) {
            countCorrect();
            cleanSpace();
            los();
  }
  else {   
      var statement = 'Wybrano złą odpowiedź.';
      countWrong(statement);
  }
}

function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = $('#x').val();
    y = $('#y').val();
    wyn = $('#wynik').val();
    var statement = ' ' + x + ' - ' + y + ' = ' + wyn  + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}



$(document).ready(function () {

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('wyrazm');
    los();
    keyboardEnter(1);

});