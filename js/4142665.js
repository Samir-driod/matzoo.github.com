

$(document).ready(function() {


    los();
    $('#content20').css('padding-left','5%');
    $('#zadanie').addClass('s25');
        $('#zadanie').css('font-weight','normal');
    $('#zadanie').addClass('col-sm-11');
    $('#zadanie').css('line-height','250%');    
    
});

function sortNumber(a,b) {
    return a - b;
}

function los() {
    // los
    
    var example = Math.round(Math.random()*1);
    
    if (example==1) {
    
    var x = Math.round(Math.random()*6);
 
    var los = Math.round(Math.random()*1);

    if (los==0) {
        var miesiac = ['poniedziałku','wtorku','środzie','czwartku','piątku','sobocie','niedzieli'];
        var odpowiedz = ['wtorek','środa','czwartek','piątek','sobota','niedziela','poniedziałek'];
    }
    if (los==1) {
        miesiac = ['poniedziałkiem','wtorkiem','środą','czwartkiem','piątkiem','sobotą','niedzielą'];
        odpowiedz = ['niedziela','poniedziałek','wtorek','środa','czwartek','piątek','sobota'];
    }

   
    var zdanie = [ '<p>Następny dzień po '+miesiac[x]+' to:</p>', '<p>Dzień przed '+miesiac[x]+' to:</p>'];
    var wynik = odpowiedz[x];
    var tab = [wynik];
    //tab[0] = wynik;
    tab[0] = x;

    for (i=1;i<4;i++) {
        xn = Math.round(Math.random()*6);
        while (xn==tab[i-1]) xn = Math.round(Math.random()*6);
        if (i==2) while (xn==tab[i-2] || xn==tab[i-1]) xn = Math.round(Math.random()*6);
        if (i==3) while (xn==tab[i-3] || xn==tab[i-2] || xn==tab[i-1]) xn = Math.round(Math.random()*6);
        tab[i]=xn;
    }
    tab.sort(sortNumber);
  
    for (i=0;i<4;i++) {
        tab[i]=odpowiedz[tab[i]];
    }
    // wyswietl los
  

    $('#zadanie').html(zdanie[los] + ' <input type="hidden" id="odp" name="odp"/>');
    for (i=0;i<4;i++) {
            $('#zadanie').append('<div class="btn-work btn btn-info s30" onclick="oblicz(\''+wynik+'\',\''+tab[i]+'\')" >'+tab[i]+'</div> ');
    if (i==1) $('#zadanie').append('<br>');
    }
    
    $('#wynik').val(wynik);
    $('#odp').focus();
    
    } else {
        
var x = Math.round(Math.random()*6);
 
    var los = Math.round(Math.random()*3);

    if (los==0) {
        var miesiac = ['poniedziałku','wtorku','środzie','czwartku','piątku','sobocie','niedzieli'];
        var odpowiedz = ['wtorek','środa','czwartek','piątek','sobota','niedziela','poniedziałek'];
    }
    if (los==1) {
        miesiac = ['poniedziałku','wtorku','środzie','czwartku','piątku','sobocie','niedzieli'];
        odpowiedz = ['środa','czwartek','piątek','sobota','niedziela','poniedziałek','wtorek'];
    }
    if (los==2) {
        miesiac = ['poniedziałkiem','wtorkiem','środą','czwartkiem','piątkiem','sobotą','niedzielą'];
        odpowiedz = ['niedziela','poniedziałek','wtorek','środa','czwartek','piątek','sobota'];
    }
    if (los==3) {
        miesiac = ['poniedziałkiem','wtorkiem','środą','czwartkiem','piątkiem','sobotą','niedzielą'];
        odpowiedz = ['sobota','niedziela','poniedziałek','wtorek','środa','czwartek','piątek'];
    }
   
    var zdanie = [ '<p>Następny dzień po '+miesiac[x]+' to:</p>', '<p>Dzień dwa dni po '+miesiac[x]+' to:</p>', '<p>Dzień przed '+miesiac[x]+' to:</p>', '<p>Dzień 2 dni przed '+miesiac[x]+' to:</p>' ];
    var wynik = odpowiedz[x];
    var tab = [wynik];
    //tab[0] = wynik;
    tab[0] = x;

    for (i=1;i<4;i++) {
        xn = Math.round(Math.random()*6);
        while (xn==tab[i-1]) xn = Math.round(Math.random()*6);
        if (i==2) while (xn==tab[i-2] || xn==tab[i-1]) xn = Math.round(Math.random()*6);
        if (i==3) while (xn==tab[i-3] || xn==tab[i-2] || xn==tab[i-1]) xn = Math.round(Math.random()*6);
        tab[i]=xn;
    }
    tab.sort(sortNumber);
  
    for (i=0;i<4;i++) {
        tab[i]=odpowiedz[tab[i]];
    }
    // wyswietl los
  
    $('#zadanie').html(zdanie[los] + ' <input type="hidden" id="odp" name="odp"/>');
    for (i=0;i<4;i++) {
            $('#zadanie').append('<div class="btn-work btn btn-info s30" onclick="oblicz(\''+wynik+'\',\''+tab[i]+'\')" >'+tab[i]+'</div> ');
    if (i==1) $('#zadanie').append('<br>');
    }
    
    $('#wynik').val(wynik);
    $('#odp').focus();        
        
        
    }

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