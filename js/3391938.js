limit = 10;
function los() {

  // los
  limit = 6;
  slimit = 10;
    var x = Math.round(Math.random()*limit);
    var y = Math.round(Math.random()*limit);
    var a = Math.round(Math.random()*limit);
    var b = Math.round(Math.random()*limit);
  while(x+y>slimit || a==x || a==y || b==x || b==y || a==b) {
            x = Math.round(Math.random()*limit);
            y = Math.round(Math.random()*limit);
    a = Math.round(Math.random()*limit);
    b = Math.round(Math.random()*limit);            
  }
  var wynik = x+y;
  var tab = [wynik];

    for (i=1;i<4;i++) {
        xn = Math.round(Math.random()*(limit-1))+1;
        while (xn==tab[i-1]) xn = Math.round(Math.random()*limit);
        if (i==2) while (xn==tab[i-2] || xn==tab[i-1]) xn = Math.round(Math.random()*limit);
        if (i==3) while (xn==tab[i-3] || xn==tab[i-2] || xn==tab[i-1]) xn = Math.round(Math.random()*limit);
        tab[i]=xn;
    }
  tab.sort(sortNumber);

    var example = Math.round(Math.random()*2);

  // wyswietl los
  $('#zadanie').html(x + ' + ' + y);
  $('#wynik').val(wynik);

    
  if (example==1) {
    $('#guziki').append('<span onclick="oblicz('+wynik+')"><img style="margin: 0 2%; cursor:pointer" src="imgtask/domino/'+x+'_'+y+'.png"/></span>');
    $('#guziki').append('<span onclick="klik(this)"><img style="margin: 0 2%; cursor:pointer" src="imgtask/domino/'+a+'_'+y+'.png"/></span>');
    $('#guziki').append('<span onclick="klik(this)"><img style="margin: 0 2%; cursor:pointer" src="imgtask/domino/'+x+'_'+b+'.png"/></span>');
  } else if (example==2) {
   
    $('#guziki').append('<span onclick="klik(this)"><img style="margin: 0 2%; cursor:pointer" src="imgtask/domino/'+a+'_'+y+'.png"/></span>');
    $('#guziki').append('<span onclick="oblicz('+wynik+')"><img style="margin: 0 2%; cursor:pointer" src="imgtask/domino/'+x+'_'+y+'.png"/></span>');
    $('#guziki').append('<span onclick="klik(this)"><img style="margin: 0 2%; cursor:pointer" src="imgtask/domino/'+x+'_'+b+'.png"/></span>');  d
  } else {
          $('#guziki').append('<span onclick="klik(this)"><img style="margin: 0 2%; cursor:pointer" src="imgtask/domino/'+x+'_'+b+'.png"/></span>');      
    $('#guziki').append('<span onclick="klik($(this))"><img style="margin: 0 2%; cursor:pointer" src="imgtask/domino/'+a+'_'+y+'.png"/></span>');
        $('#guziki').append('<span onclick="oblicz('+wynik+')"><img style="margin: 0 2%; cursor:pointer" src="imgtask/domino/'+x+'_'+y+'.png"/></span>');

  }
}



function oblicz(em){

  
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


