limit=3;
function los(last) {
    // los
    var x = Math.round(Math.random()*3);
    while (last==x) {
        x = Math.round(Math.random()*3);
    }
    last = x;
    var gdzie = ['kwadrat','trojkat','prostokat','kolo'];
    var b = Math.round(Math.random()*3);


    var pytania = [
        ['pierwszej figury od lewej', 0],
        ['drugiej figury od lewej', 1],
        ['trzeciej figury od lewej', 2],
        ['czwartej figury od lewej', 3],
        ['pierwszej figury od prawej', 3],
        ['drugiej figury od prawej', 2],
        ['trzeciej figury od prawej', 1],
        ['czwartej figury od prawej', 0],
         
    ];  
    var pytanie = pytania[Math.round(Math.random() * ((pytania.length)-1))];
    
    console.debug(pytanie);

    var tab = [b];
    for (i = 1; i < 4; i++) {
        var xn = Math.round(Math.random() * (limit - 1)) + 1;
        while (xn == tab[i - 1])
            xn = Math.round(Math.random() * limit);
        if (i == 2)
            while (xn == tab[i - 2] || xn == tab[i - 1])
                xn = Math.round(Math.random() * limit);
        if (i == 3)
            while (xn == tab[i - 3] || xn == tab[i - 2] || xn == tab[i - 1])
                xn = Math.round(Math.random() * limit);
        tab[i] = xn;
    }  
  
    console.debug(tab);
    var wynik = tab[pytanie[1]];    
    // wyswietl los
    var tresc = '<div class="row">';
   
    for (i = 0; i < 4; i++) {
        tresc = tresc+'<div class="col-xs-3"><div class = "bokklasa'+(Math.round(Math.random() * (6)) + 2)+'" style="background-image:url(../img/gradient_kropki3.png)"><img src="img/figury/'+gdzie[tab[i]]+'.png" class="img-responsive gradient"></div></div>';
  
    }
  
    tresc = tresc+'</div><p class="polecenie" style="font-weight:normal">Podaj nazwę '+pytanie[0]+'.</p>';

    $('#zadanie').addClass('col-sm-9');
    $('#zadanie').addClass('col-sm-push-1');

    $('#zadanie').html(tresc + '<input type="hidden" id="odp" name="odp"/>\n\
<span class="btn s21 btn-pink" onclick="oblicz('+last+','+wynik+',0)">kwadrat</span>\n\
<span class="btn s21 btn-pink" onclick="oblicz('+last+','+wynik+',1)">trójkąt</span>\n\
<span class="btn s21 btn-pink" onclick="oblicz('+last+','+wynik+',2)">prostokąt</span>\n\
<span class="btn s21 btn-pink" onclick="oblicz('+last+','+wynik+',3)">koło</span></div>');

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

