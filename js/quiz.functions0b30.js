
function quizLos(x) {

    // nowe losowanie
    // generowanie kolejnego pytania z quizu
    $('#odpowiedzonka').html('');

    if (x==ile_pytan) { // jesli koniec gry
        $('#zadanie').html(
            '<p class="alert alert-success s35 text-center" style="font-weight: normal;">Brawo! Gra ukończona.<br>' +
            '<span class="s19">To już wszystkie pytania i ananaski<span class="hidden-xs"> w tej grze</span>.</span></p>'
        );

    } else {
        pytanie = items[x][0];
        ile_odp = items[x].length-1;
        odpowiedzi = randomItemsFrom1(ile_odp,ile_odp);

        $('#zadanie').html('<p class="s25" style="font-weight: normal;">' + pytanie + '</p>');
        for (i = 0; i < ile_odp; i++) {
            $('#zadanie').append('<a class="text-black s21 btn-matzoo33 btn btn-lsuccess margin5" id="' + odpowiedzi[i] + '" onclick="quizOblicz(' + odpowiedzi[i] + ',1)">' + items[x][odpowiedzi[i]] + '</a>');
        }
    }


}

/*
* losuje określoną ilość liczb z puli (od 0 do skad)
 */
function randomItems(ile,skad) {
    linie = [];
    while (linie.length<ile) {
        linia = Math.round(Math.random()*skad);
        while (jQuery.inArray(linia,linie)!==-1) {
            linia = Math.round(Math.random()*skad);
        }
        linie.push(linia);
    }
    return linie;
}
/*
* losuje określoną ilość liczb z puli (od 1 do skad)
 */
function randomItemsFrom1(ile,skad) {
    skad = skad-1;
    linie = [];
    while (linie.length<ile) {
        linia = Math.round(Math.random()*skad)+1;
        while (jQuery.inArray(linia,linie)!==-1) {
            linia = Math.round(Math.random()*skad)+1;
        }
        linie.push(linia);
    }
    return linie;
}


function quizOblicz(odp, i) {

    if (odp === i) var ok = 1;
    else ok = 0;


    if (ok == 1) {
        countCorrect();
    } else {
        countWrong();
    }

    if (ok == 1) {
        x = x+1;
        quizLos(x);
    }

}