$(document).ready(function() {

    los();
    $('#content20').css('padding-left','5%');
    $('#zadanie').css('font-weight','normal');
    $('#zadanie').addClass('s25');
    $('#zadanie').addClass('col-sm-11');
    
});

function sortNumber(a,b) {
    return a - b;
}

function los() {
    // los
    var x = Math.round(Math.random()*11);
 

        var miesiac = ['Pierwszy','Drugi','Trzeci','Czwarty','Piąty','Szósty','Siódmy','Ósmy','Dziewiąty','Dziesiąty','Jedenasty','Dwunasty'];
        var odpowiedz = ['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień'];

 

   
    var wynik = odpowiedz[x];
    var tab = [wynik];
    //tab[0] = wynik;
    tab[0] = x;

    for (i=1;i<4;i++) {
        xn = Math.round(Math.random()*11);
        while (xn==tab[i-1]) xn = Math.round(Math.random()*11);
        if (i==2) while (xn==tab[i-2] || xn==tab[i-1]) xn = Math.round(Math.random()*11);
        if (i==3) while (xn==tab[i-3] || xn==tab[i-2] || xn==tab[i-1]) xn = Math.round(Math.random()*11);
        tab[i]=xn;
    }
    tab.sort(sortNumber);
  
    for (i=0;i<4;i++) {
        tab[i]=odpowiedz[tab[i]];
    }
    // wyswietl los
  
    $('#zadanie').css('line-height','260%');
    $('#zadanie').html('<p>'+miesiac[x] + ' miesiąc w roku. </p>');
    
    kolory = ['pink','info','primary','danger','warning','lsuccess','success'];
    kolorlos= Math.round(Math.random()*3);     
    
    for (i=0;i<4;i++) {
        kolor = i+kolorlos;        
            $('#zadanie').append('<div class="btn-work btn btn-'+kolory[kolor]+' s35" onclick="oblicz(\''+wynik+'\',\''+tab[i]+'\')" >'+tab[i]+'</div> ');
    if (i==1) $('#zadanie').append('<br>');
    }
    
    $('#wynik').val(wynik);
    $('#odp').focus();

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