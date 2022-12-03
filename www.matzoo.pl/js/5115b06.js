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
        ['5:30','wpół do szóstej'],
        ['5:45','za kwadrans szósta'],
        ['6:05','pięć po szóstej'],
        ['6:15','kwadrans po szóstej'],
        ['6:30','wpół do siódmej'],
        ['6:35','za dwadzieścia pięć siódma'],
        ['6:45','za kwadrans siódma'],
        ['7:30','wpół do ósmej'],
        ['7:35','za dwadzieścia pięć ósma'],
        ['7:40','za dwadzieścia ósma'],
        ['7:45','kwadrans przed ósmą'],
        ['7:50','za dziesięć ósma'],
        ['7:55','za pięć ósma'],
        ['8:05','pięć po ósmej'],
        ['8:10','dziesięć po ósmej'],
        ['8:15','kwadrans po ósmej'],
        ['8:30','wpół do dziewiątej'],
        ['8:40','za dwadzieścia dziewiąta'],
        ['8:45','kwadrans przed dziewiątą'],
        ['8:50','za dziesięć dziewiąta'],
        ['8:55','za pięć dziewiąta'],
        ['9:10','dziesięć po dziewiątej'],
        ['9:15','kwadrans po dziewiątej'],
        ['9:45','kwadrans przed dziesiątą'],
        ['9:50','za dziesięć dziesiąta'],
        ['9:55','za pięć dziesiąta']
    ];

    var ile = godziny.length-1;
    var dane = wylosuj(3,ile);
    var x = dane[0];
    dane.sort(sortNumber);

    var text = godziny[x][1];

var tresc = '<p class="wyrazm s19">Który zegar wyświetla godzinę<br> '+text+'?</p><br><div class="col-xs-10 col-xs-push-1">';
    
    for (i=0;i<3;i++) {
        tresc = tresc + ' <div class="col-sm-4"><a class="electronic" onclick="oblicz(\''+x+'\',\''+dane[i]+'\')">'+godziny[dane[i]][0]+'</a></div>';
    }    

    // wyswietl los
    $('#zadanie').html(tresc + ' <input name="odp" type="hidden" id="odp" size="1" maxlength="3" autocomplete="off" /><p>&nbsp;</p></div>\n\
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