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
    var x = Math.round(Math.random()*6);
    var los = Math.round(Math.random()*5);
    if (los==0) {
        tydzien = ['poniedziałku','wtorku','środzie','czwartku','piątku','sobocie','niedzieli'];
        odpowiedz = ['środa','czwartek','piątek','sobota','niedziela','poniedziałek','wtorek'];
    }
    else if (los==1) {
        tydzien = ['poniedziałku','wtorku','środzie','czwartku','piątku','sobocie','niedzieli'];
        odpowiedz = ['czwartek','piątek','sobota','niedziela','poniedziałek','wtorek','środa'];
    }
    else if (los==2) {
        tydzien = ['poniedziałku','wtorku','środzie','czwartku','piątku','sobocie','niedzieli'];
        odpowiedz = ['piątek','sobota','niedziela','poniedziałek','wtorek','środa','czwartek',];
    }
    else if (los==3) {
        tydzien = ['poniedziałkiem','wtorkiem','środą','czwartkiem','piątkiem','sobotą','niedzielą'];
        odpowiedz = ['sobota','niedziela','poniedziałek','wtorek','środa','czwartek','piątek'];
    }
    else if (los==4) {
        tydzien = ['poniedziałkiem','wtorkiem','środą','czwartkiem','piątkiem','sobotą','niedzielą'];
        odpowiedz = ['piątek','sobota','niedziela','poniedziałek','wtorek','środa','czwartek'];
    }
    else if (los==5) {
        tydzien = ['poniedziałkiem','wtorkiem','środą','czwartkiem','piątkiem','sobotą','niedzielą'];
        odpowiedz = ['czwartek','piątek','sobota','niedziela','poniedziałek','wtorek','środa'];
    }
   
    var zdanie = ['dwa dni po '+tydzien[x], 'trzy dni po '+tydzien[x], 'cztery dni po '+tydzien[x], 'dwa dni przed '+tydzien[x], 'trzy dni przed '+tydzien[x], 'cztery dni przed '+tydzien[x] ];
    var wynik = odpowiedz[x];
    var tab = [wynik];
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
  
    $('#zadanie').addClass('col-sm-11');
    $('#zadanie').css('line-height','260%');
    $('#zadanie').css('font-weight','normal');
    $('#zadanie').html('<p>Jaki to dzień, '+zdanie[los] + '?</p> <input type="hidden" id="odp" name="odp"/>');
    for (i=0;i<4;i++) {
            $('#zadanie').append('<div class="btn-work btn btn-success s35" onclick="oblicz(\''+wynik+'\',\''+tab[i]+'\')" >'+tab[i]+'</div> ');
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