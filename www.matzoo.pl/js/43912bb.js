
function los() {
    // los
 
  var liczby = [ 
      ['8','2√2'],
      ['18','3√2'],
      ['32','4√2'],
      ['50','5√2'],
      ['72','6√2'],
      
      ['12','2√3'],
      ['27','3√3'],
      ['48','4√3'],
      ['75','5√3'],
      
      ['20','2√5'],
      ['45','3√5'],
      ['80','4√5'],
      
      ['24','2√6'],
      ['54','3√6'],
      
      ['250','5√10'],
            
      
  ];    
  limit  = 14;
  // los
  var x = Math.round(Math.random()*limit);

  var wynik = liczby[x][1];
  var tab = [x];

    for (i=1;i<4;i++) {
        xn = Math.round(Math.random()*limit);
        if (i==3) while (xn==tab[i-3] || xn==tab[i-2] || xn==tab[i-1]) xn = Math.round(Math.random()*limit);
        else if (i==2) while (xn==tab[i-2] || xn==tab[i-1]) xn = Math.round(Math.random()*limit);
        else while (xn==tab[i-1]) xn = Math.round(Math.random()*limit);
        tab[i]=xn;
    }
  tab.sort(sortNumber);


  // wyswietl los
  $('#zadanie').html('<div class="sqrt" style="margin-left:30%">'+liczby[x][0]+'</div><div class="pull-left"> = ?</div>');
  $('#zadanie').addClass('reczne_max');
  $('#wynik').val(wynik);
  for (i=0;i<4;i++) {
    nr = tab[i];
    $('#guziki').append('<span class="btn btn-lsuccess btn-matzoo33 gradient s50 text-black" onclick="klik(this)">'+liczby[nr][1]+'</span>');  
  }
    $('#guziki').append('<p>&nbsp;</p>');

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
  $('#odp').val($(em).html());
  oblicz();
}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    wyn = ($('#wyn').val());
    
    //var statement = ' ' + x + ' · ' + y + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    var statement = '&nbsp; '+x+'<sup>'+y+'</sup> = '+wyn+ ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    var statement = '';
    return statement;
}


$(document).ready(function () {

   //$('#zadanie').removeClass('wyraz1');
    los();
    keyboardEnter(1);

});

