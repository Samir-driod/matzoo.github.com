limit = 10;
function los() {

  // los
  limit = 6;
  slimit = 10;
    var x = Math.round(Math.random()*limit);
    var a = Math.round(Math.random()*limit);
    var b = Math.round(Math.random()*limit);
  while(a==x || b==x || a==b) {
            x = Math.round(Math.random()*limit);
    a = Math.round(Math.random()*limit);
    b = Math.round(Math.random()*limit);
  }
  var wynik = x;

    var example = Math.round(Math.random()*2);

  // wyswietl los
  $('#zadanie').html(x);
  $('#wynik').val(wynik);

    
  if (example==1) {
    $('#guziki').append('<a class="btn" onclick="oblicz('+wynik+')"><img class="img-responsive" style="max-height:125px;" src="img/domino/'+x+'.png"/></a>');
    $('#guziki').append('<a class="btn" onclick="klik(this)"><img class="img-responsive" style="max-height:125px;" src="img/domino/'+a+'.png"/></a>');
    $('#guziki').append('<a class="btn" onclick="klik(this)"><img class="img-responsive" style="max-height:125px;" src="img/domino/'+b+'.png"/></a>');
  } else if (example==2) {
   
    $('#guziki').append('<a class="btn" onclick="klik(this)"><img class="img-responsive" style="max-height:125px;" src="img/domino/'+a+'.png"/></a>');
    $('#guziki').append('<a class="btn" onclick="oblicz('+wynik+')"><img class="img-responsive" style="max-height:125px;" src="img/domino/'+x+'.png"/></a>');
    $('#guziki').append('<a class="btn" onclick="klik(this)"><img class="img-responsive" style="max-height:125px;" src="img/domino/'+b+'.png"/></a>');  
  } else {
    $('#guziki').append('<a class="btn" onclick="klik(this)"><img class="img-responsive" style="max-height:125px;" src="img/domino/'+b+'.png"/></a>');      
    $('#guziki').append('<a class="btn" onclick="klik($(this))"><img class="img-responsive" style="max-height:125px;" src="img/domino/'+a+'.png"/></a>');
    $('#guziki').append('<a class="btn" onclick="oblicz('+wynik+')"><img class="img-responsive" style="max-height:125px;" src="img/domino/'+x+'.png"/></a>');

  }
}



function oblicz(em){
  var dobre = $('.ok').html();
  var zle = $('.wrong').html();
  
  if(em==$('#wynik').val()) {
  
     countCorrect();
    cleanSpace();
    los();

    
  }
  else {
    var statement = '';
      countWrong(statement);
  }


}

function klik(em) {
  $('#odp').val($(em));
  oblicz();
}

$(document).ready(function(){



  
  los();



});


