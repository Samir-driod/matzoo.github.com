
function los(last) {
  // los
  var x = Math.round(Math.random()*3)+1;
  while (last==x) {
      x = Math.round(Math.random()*3)+1;
  }
  last = x;
  var gdzie = ['','kwadrat','trojkat','prostokat','kolo'];
  var kolor = ['info','warning','danger','success'];
  var a = 0;
  var b = Math.round(Math.random()*5)+1;
  var c = Math.round(Math.random()*3);
  var d = Math.round(Math.random()*3);
  
  
  var wynik = x;    
  // wyswietl los
  var tresc='<div class="center-block"><div class = "bokklasa'+b+'" style="width: 200px; margin: 0px auto;url("img/gradient_kropki3.png")"><img src="img/figury/'+gdzie[x]+'.png" /></div>';

  $('#zadanie').addClass('col-sm-11');

  $('#zadanie').html(tresc + '<input type="hidden" id="odp" name="odp"/>\n\
<span class="btn s25 text-black gradient-kropki2 btn-'+kolor[a]+'" onclick="oblicz('+last+','+x+',1)">kwadrat</span>\n\
<span class="btn s25 text-black gradient-kropki2 btn-'+kolor[a]+'" onclick="oblicz('+last+','+x+',2)">trójkąt</span>\n\
<span class="btn s25 text-black gradient-kropki2 btn-'+kolor[a]+'" onclick="oblicz('+last+','+x+',3)">prostokąt</span>\n\
<span class="btn s25 text-black gradient-kropki2 btn-'+kolor[a]+'" onclick="oblicz('+last+','+x+',4)">koło</span></div>');
  
  $('#wynik').val(wynik);
  $('#odp').focus();

}


  

function oblicz(last, x, i) {
    // jesli dobra odpowiedź
    if (x == i) {

        countCorrect();
        cleanSpace();
        los();

    } // jeśli zła odpowiedź
    else {
        statement = ' Wybrano złą figurę.';
        countWrong(statement);
    }

}

function klik(em) {
  $('#odp').val($(em).html());
  oblicz();
}

$(document).ready(function(){

  var last = 0;
  los(last);

});

