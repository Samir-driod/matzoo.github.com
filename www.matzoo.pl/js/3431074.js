$(document).ready(function() {

    los();
    $('#content20').css('font-weight','normal');
    $('#content20').css('padding-left','5%');
    $('#zadanie').addClass('s25');
    
});

function sortNumber(a,b) {
    return a - b;
}

function los() {
    // los
    var x = Math.round(Math.random()*11);
    var los = Math.round(Math.random()*3);
    if (los==0) {
        var miesiac = ['styczniu','lutym','marcu','kwietniu','maju','czerwcu','lipcu','sierpniu','wrześniu','październiku','listopadzie','grudniu'];
        var odpowiedz = ['luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień','styczeń'];
    }
    if (los==1) {
        var miesiac = ['styczniem','lutym','marcem','kwietniem','majem','czerwcem','lipcem','sierpniem','wrześniem','październikiem','listopadem','grudniem'];
        var odpowiedz = ['grudzień','styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad'];
    }
    if (los==2) {
        var miesiac = ['styczniu','lutym','marcu','kwietniu','maju','czerwcu','lipcu','sierpniu','wrześniu','październiku','listopadzie','grudniu'];
        var odpowiedz = ['marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień','styczeń','luty'];
    }
    if (los==3) {
        var miesiac = ['styczniem','lutym','marcem','kwietniem','majem','czerwcem','lipcem','sierpniem','wrześniem','październikiem','listopadem','grudniem'];
        var odpowiedz = ['listopad','grudzień','styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik'];
    }
   
    var zdanie = [ '<p>Następny miesiąc po '+miesiac[x]+' to:</p>', '<p>Miesiąc przed '+miesiac[x]+' to:</p>','<p>2 miesiące po '+miesiac[x]+' to:</p>', '<p>2 miesiące przed '+miesiac[x]+' to:</p>', ];
    var wynik = odpowiedz[x];
    var tab = [wynik];
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
      $('#zadanie').addClass('col-sm-11');
    $('#zadanie').css('line-height','260%');
    $('#zadanie').html(zdanie[los] + ' <input type="hidden" id="odp" name="odp"/>');
    
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

    if (x == i)  {
            countCorrect();
            cleanSpace();
            los();
  }
  else {   
      var statement = 'Wybrano złą odpowiedź.';
      countWrong(statement);
  }
}