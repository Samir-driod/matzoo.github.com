dobre = 0;
zle = 0;
x = 0;
odpowiedz = '';

// --------



// --------


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
    var x = Math.round(Math.random()*11)+1;
 

        var miesiac = ['Pierwszy','Drugi','Trzeci','Czwarty','Piąty','Szósty','Siódmy','Ósmy','Dziewiąty','Dziesiąty','Jedenasty','Dwunasty'];
        var odpowiedz = ['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień'];
        var rzymskie = [' ','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X','XI','XII'];
 

   
    var wynik = rzymskie[x];
    var tab = [wynik];
    //tab[0] = wynik;
    tab[0] = x;

    for (i=1;i<4;i++) {
        xn = Math.round(Math.random()*11)+1;
        while (xn==tab[i-1]) xn = Math.round(Math.random()*11)+1;
        if (i==2) while (xn==tab[i-2] || xn==tab[i-1]) xn = Math.round(Math.random()*11)+1;
        if (i==3) while (xn==tab[i-3] || xn==tab[i-2] || xn==tab[i-1]) xn = Math.round(Math.random()*11)+1;
        tab[i]=xn;
    }
    tab.sort(sortNumber);
  
    for (i=0;i<4;i++) {
        tab[i]=rzymskie[tab[i]];
    }
    // wyswietl los
  
    $('#zadanie').css('line-height','260%');
    $('#zadanie').html('<div class="s80 margin10">'+x + '</div>');
    
    kolory = ['pink','info','primary','danger','warning','lsuccess','success'];
    kolorlos= Math.round(Math.random()*3);     
    $('#zadanie').append('<div class="col-xs-1"></div>');
    for (i=0;i<4;i++) {
        kolor = i+kolorlos;        
            $('#zadanie').append('<div class="btn-work btn btn-lsuccess text-black s45 col-xs-2 margin10" onclick="oblicz(\''+wynik+'\',\''+tab[i]+'\')" >'+tab[i]+'</div> ');
    
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