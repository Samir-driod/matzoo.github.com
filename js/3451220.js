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
  var example = Math.round(Math.random()*0);
  var min = ['00'];
  var m = min[example];
  var tab=[];
  if (x<10) wynik='0'+x; else wynik=x;
  tab[0] = wynik+m;
  obrazek = wynik+'-'+m;
  wynikp = wynik+':'+m;
  wynik = obrazek;
  

  
  for (i=1;i<3;i++) {
    xn = Math.round(Math.random()*11)+1;
    example = Math.round(Math.random()*0);
    if (xn<10) xn = '0'+xn;
    xn = xn+min[example];
    while (xn==tab[i-1]) {
        xn = Math.round(Math.random()*11)+1;
        if (xn<10) xn = '0'+xn;
        example = Math.round(Math.random()*0);
        xn = xn+min[example];
    }
    if (i==2) while (xn==tab[i-2] || xn==tab[i-1]) {
        xn = Math.round(Math.random()*11)+1;
        if (xn<10) xn = '0'+xn;
        example = Math.round(Math.random()*0);
        xn = xn+min[example];
    }
    tab[i]=xn;
  }
  tab.sort(sortNumber);

 for (i=0;i<3;i++) {

     jest = tab[i];
     bedzie = jest[0]+jest[1]+'-'+jest[2]+jest[3];
     tab[i] = bedzie;
 }
  // wyswietl los
  
  $('#zadanie').addClass('new_clockbig');

  tresc = '<p style="margin:0px"><span class="btn text-black s60">'+wynikp+'&nbsp; &nbsp; &nbsp; &nbsp;  </span></p>';
  for (i=0;i<3;i++)
    tresc = tresc+'<div class="btn col-sm-3"  onclick="oblicz(\''+wynik+'\',\''+tab[i]+'\')" id="'+tab[i]+'" ><img src="img/zegary/'+tab[i]+'.png" class="img-responsive" style="max-height:180px"></div>';
    

  $('#zadanie').html(tresc);

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