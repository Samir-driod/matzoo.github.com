function los() {

  // los
  var zmienne = [2,3,5,10];
  var a = Math.round(Math.random()*3);
  a = zmienne[a]
  var liczby = [];
  var podz = [];
  var i = 0;
    for (j = 0; j < 4; j++) {
    liczby[j] = Math.round(Math.random()*98)+2;
    if (liczby[j]%a == 0)
      podz[j] = 1; else
      podz[j] = 0;
    i = i + podz[j];
  }

  while (i != 1) {
    i = 0;
    for (j = 0; j < 4; j++) {
      liczby[j] = Math.round(Math.random()*98)+2;
      if (liczby[j]%a == 0)
        podz[j] = 1; else
        podz[j] = 0;
      i = i + podz[j];
    }
  }
  
  
  var wynik=1;

  // wyswietl los
  $('#zadanie').html('Która z liczb jest podzielna przez <b>' + a + '</b>?');
  $('#zadanie').addClass('wyrazm');
  $('#wynik').val(wynik);
  for (i=0;i<4;i++)
      if (podz[i]==1) $('#guziki').append('<span class="btn btn-danger btn-matzoo33 gradient s50 text-black" onclick="oblicz(1)">'+liczby[i]+'</span>');
      else $('#guziki').append('<span class="btn btn-danger btn-matzoo33 gradient s50 text-black" onclick="klik(this)">'+liczby[i]+'</span>');
$('#guziki').append('<br><br>');
}


function oblicz(em) {

    // jesli dobra odpowiedź
    if (em == 1) {

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


$(document).ready(function () {

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('wyrazm');
    los();

});