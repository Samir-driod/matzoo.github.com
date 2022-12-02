    
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
$('#zadanie').html('');
  // los
  var x = Math.round(Math.random()*9)+1;
  var y = Math.round(Math.random()*10);
  //var z = Math.round(Math.random()*7)+1;
  var example = Math.round(Math.random()*3);
  while (x==y) {
    x = Math.round(Math.random()*9)+1;
    y = Math.round(Math.random()*8)+2;
    
  }
  var wynik = x;
  if (y>x) wynik = y;
  
  
  // wyswietl los
  
  $('#wynik').val(wynik);
  if (example==1) {
      $('#guziki').append('<span class="btn btn-matzoo44 gradient-kropki3 rounded btn-primary s80" onclick="klik(this)">'+x+'</span>');
      $('#guziki').append('<span class="btn btn-matzoo44 gradient-kropki3 rounded btn-success s80" onclick="klik(this)">'+y+'</span>');
      
  } else if (example==2) {
      $('#guziki').append('<span class="btn btn-matzoo44 gradient-kropki3 rounded btn-primary s80" onclick="klik(this)">'+x+'</span>');
      $('#guziki').append('<span class="btn btn-matzoo44 gradient-kropki3 rounded btn-danger s80" onclick="klik(this)">'+y+'</span>');
  } else if (example==3) {
      
      $('#guziki').append('<span class="btn btn-matzoo44 gradient-kropki3 rounded btn-success s80" onclick="klik(this)">'+y+'</span>');
      $('#guziki').append('<span class="btn btn-matzoo44 gradient-kropki3 rounded btn-danger s80" onclick="klik(this)">'+x+'</span>');
  } else {
      $('#guziki').append('<span class="btn btn-matzoo44 gradient-kropki3 rounded btn-danger s80" onclick="klik(this)">'+y+'</span>');
      $('#guziki').append('<span class="btn btn-matzoo44 gradient-kropki3 rounded btn-success s80" onclick="klik(this)">'+x+'</span>');
      
    
  }
    

}




function oblicz() {

    // jesli dobra odpowiedź
    if ($('#odp').val() == $('#wynik').val()) {

        countCorrect();
        cleanSpace();
        los();

    } // jeśli zła odpowiedź
    else {
        statement = '';
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