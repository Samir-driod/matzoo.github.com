$(document).ready(function() {

    los();
    $('#content20').css('padding-left','5%');
    $('#zadanie').addClass('s25');
    
});

function sortNumber(a,b) {
    return a - b;
}

function los() {
  // los
  var x = Math.round(Math.random()*11)+1;
    var wynik = x;
    if (x<10) wynik='0'+wynik;
     pwynik=wynik+'-00';
     wynik=wynik+':00';

      var tab = [wynik];
  //tab[0] = wynik;
  tab[0] = x;

  for (i=1;i<3;i++) {
    xn = Math.round(Math.random()*11)+1;
    while (xn==tab[i-1]) xn = Math.round(Math.random()*11)+1;
    if (i==2) while (xn==tab[i-2] || xn==tab[i-1]) xn = Math.round(Math.random()*11)+1;
    tab[i]=xn;
  }
  tab.sort(sortNumber);
  
 for (i=0;i<3;i++) {
     if (tab[i]<10) tab[i] = '0'+tab[i];
      tab[i]=tab[i]+':00';
 }
  // wyswietl los
  
  $('#zadanie').addClass('new_clock');
  $('#zadanie').html('<div><img src="img/zegary/' + pwynik + '.png" class="img-responsive center-block col-sm-5" style="max-width:250px;padding: 0px 30px 10px;" /></div><input type="hidden" id="odp" name="odp"/>');
  for (i=0;i<3;i++)
    $('#zadanie').append('<div class="btn btn-pink gradient text-black s35 margin2" onclick="oblicz(\''+wynik+'\',\''+tab[i]+'\')" >'+tab[i]+'</div>');


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