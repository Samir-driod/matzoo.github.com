function los() {
$('#zadanie').html('');
  // los
  var x = Math.round(Math.random()*9)+1;
  var y = Math.round(Math.random()*10);
  var z = Math.round(Math.random()*7)+1;
  var example = Math.round(Math.random()*3);
  while (x==y || x==z || y==z) {
    x = Math.round(Math.random()*9)+1;
    y = Math.round(Math.random()*8)+2;
    z = Math.round(Math.random()*7)+1;
  }
  var wynik = x;
  if (y>x && y>z) wynik = y;
  if (z>x && z>y) wynik = z;
  


  // wyswietl los
  
  $('#wynik').val(wynik);
  if (example==1) {
      $('#guziki').append('<span class="btn btn-matzoo33 gradient-kropki3 btn-primary s60" onclick="klik(this)">'+x+'</span>');
      $('#guziki').append('<span class="btn btn-matzoo33 gradient-kropki3 btn-success s60" onclick="klik(this)">'+y+'</span>');
      $('#guziki').append('<span class="btn btn-matzoo33 gradient-kropki3 btn-danger s60" onclick="klik(this)">'+z+'</span>');
  } else if (example==2) {
      $('#guziki').append('<span class="btn btn-matzoo33 gradient-kropki3 btn-primary s60" onclick="klik(this)">'+x+'</span>');
      $('#guziki').append('<span class="btn btn-matzoo33 gradient-kropki3 btn-success s60" onclick="klik(this)">'+z+'</span>');
      $('#guziki').append('<span class="btn btn-matzoo33 gradient-kropki3 btn-danger s60" onclick="klik(this)">'+y+'</span>');
  } else if (example==3) {
      $('#guziki').append('<span class="btn btn-matzoo33 gradient-kropki3 btn-primary s60" onclick="klik(this)">'+z+'</span>');
      $('#guziki').append('<span class="btn btn-matzoo33 gradient-kropki3 btn-success s60" onclick="klik(this)">'+y+'</span>');
      $('#guziki').append('<span class="btn btn-matzoo33 gradient-kropki3 btn-danger s60" onclick="klik(this)">'+x+'</span>');
  } else {
      $('#guziki').append('<span class="btn btn-matzoo33 gradient-kropki3 btn-primary s60" onclick="klik(this)">'+z+'</span>');
      $('#guziki').append('<span class="btn btn-matzoo33 gradient-kropki3 btn-success s60" onclick="klik(this)">'+x+'</span>');
      $('#guziki').append('<span class="btn btn-matzoo33 gradient-kropki3 btn-danger s60" onclick="klik(this)">'+y+'</span>');
    
  }
    

}



function oblicz() {

    // jesli dobra odpowied??
    if ($('#odp').val() == $('#wynik').val()) {

        countCorrect();
        cleanSpace();
        los();

    } // je??li z??a odpowied??
    else {
        statement = ' Wybrano z???? odpowied??.';
        countWrong(statement);
    }
}

function klik(em) {
    $('#odp').val($(em).html());
    oblicz();
}

$(document).ready(function () {

    los();

});


