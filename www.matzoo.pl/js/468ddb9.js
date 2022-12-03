$(document).ready(function() {

    los();
    $('#content20').css('padding-left','5%');
    $('#zadanie').css('font-weight','normal');
    $('#zadanie').addClass('s25');
});

function sortNumber(a,b) {
    return a - b;
}

function los() {
    // los
    var x = Math.round(Math.random()*11);
    var ex = Math.round(Math.random()*2);
    var dzien = Math.round(Math.random()*27)+1;
    var odpowiedz = ['stycznia','lutego','marca','kwietnia','maja','czerwca','lipca','sierpnia','września','października','listopada','grudnia'];
    var rzymskie = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X','XI','XII'];
    var wynik = odpowiedz[x];
    var tab = [wynik];
    tab[0] = x;

    for (i=1;i<3;i++) {
        xn = Math.round(Math.random()*11);
        while (xn==tab[i-1]) xn = Math.round(Math.random()*11);
        if (i==2) while (xn==tab[i-2] || xn==tab[i-1]) xn = Math.round(Math.random()*11);
        if (i==3) while (xn==tab[i-3] || xn==tab[i-2] || xn==tab[i-1]) xn = Math.round(Math.random()*11);
        tab[i]=xn;
    }
    tab.sort(sortNumber);
  
    for (i=0;i<3;i++) {
        tab[i]=odpowiedz[tab[i]];
    }
    // wyswietl los
    $('#zadanie').css('line-height','260%');
    if (ex==1) {x=x+1;
        if (x<10) var px='0'+x; else px=x;
    $('#zadanie').html('<div class="daily-calendar s50"> '+dzien+'.'+px + '.</div>');
    }
    else
        $('#zadanie').html('<div class="daily-calendar s50"> '+dzien+' '+rzymskie[x] + '</div>');
    kolory = ['pink','info','primary','danger','warning','lsuccess','success'];
    kolorlos= Math.round(Math.random()*3);     
    
    for (i=0;i<3;i++) {
        kolor = i+kolorlos;        
            $('#zadanie').append('<div class="btn-work btn btn-lsuccess text-black s25" onclick="oblicz(\''+wynik+'\',\''+tab[i]+'\')" >'+dzien+' '+tab[i]+'</div> ');
    
    }
    $('#wynik').val(wynik);
    $('#odp').focus();
}



function oblicz(x, i) {

    if (x == i) ok = 1;
    else ok = 0;
  
  if (ok==1) {
    countCorrect();
    cleanSpace();
    los();
  }
  else {   
    var statement = 'Wybrano złą odpowiedź.';
    countWrong(statement);
  }
}