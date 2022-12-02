function los() {

  // los
  var x = Math.round(Math.random()*27)+2;
  var wynik='1';
    if (x==2) {
        wynik = 'pierwsza';
    } else {    
        for (i = 2; i < x; i++) {
          if (x%i == 0) {
            wynik = 'złożona';
            break;
          }
          else
            wynik = 'pierwsza';
        }
    }
  
  // wyswietl los
    $('#zadanie').html(x + '<input type="hidden" name="x" id="x" value="' + x + '" />');
  $('#wynik').val(wynik);
    $('#guziki').append('<span class="btn btn-matzoo btn-primary" value="pierwsza" onclick="klik(this)">pierwsza</span>');
    $('#guziki').append('<span class="btn btn-matzoo btn-primary" value="złożona" onclick="klik(this)">złożona</span>');

}


function oblicz() {

    // jesli dobra odpowiedź
    if ($('#odp').val() == $('#wynik').val()) {

        countCorrect();
        cleanSpace();
        los();

    } // jeśli zła odpowiedź
    else {

        // tworzenie poprawnej odpowiedzi systemowej
        wynik = $('#wynik').val();
        if (wynik=='pierwsza') wrong = 'złożona';
        else wrong = 'pierwsza';
        x = ($('#x').val());
        y = ($('#y').val());
        wyn = parseInt(x) + parseInt(y);
        var statement = ' ' + x + ' to liczba ' + wynik + ' <span class="s15 pull-right black" style="font-family: ">wybrano: ' + wrong + '</span>';
        countWrong(statement);
        cleanSpace();
        los();
    }

}

function klik(em) {
    $('#odp').val($(em).html());
    oblicz();
}

$(document).ready(function () {

    los();

});