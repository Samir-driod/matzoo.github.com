


function los() {

    // los
   var zdania = [
        ['Jeżeli dwa trójkąty mają bok jednakowej długości oraz miary kątów przy tym boku w jednym trójkącie są równe miarom odpowiednich kątów w drugim trójkącie, to te trójkąty są przystające.<br>', 1],
        ['Jeżeli dwa trójkąty mają odpowiednie kąty tej samej miary, to na pewno te dwa trójkąty są przystające.<br><br>', 0],
        ['Jeżeli dwa trójkąty mają dwa odpowiednie boki równej długości oraz miara kąta między tymi bokami w jednym trójkącie jest równa mierze odpowiedniego kąta w drugim trójkącie, to te dwa trójkąty są przystające.<br>', 1],
        ['Jeżeli dwa trójkąty mają odpowiednie boki równej długości, to te dwa trójkąty są przystające.<br><br>', 1],
        ['Każde dwa trójkąty prostokątne są przystające.<br><br>', 0],
        ['Narysowane trójkąty są przystające.<br><img src="imgtask/411/7.png" style="max-width:70%" class="center-block img-responsive" alt="rysunek" />', 0], //5
        ['Narysowane trójkąty są przystające.<br><img src="imgtask/411/6.png" style="max-width:70%" class="center-block img-responsive" alt="rysunek" />', 1],
        ['Narysowane trójkąty są przystające.<br><img src="imgtask/411/5.png" style="max-width:70%" class="center-block img-responsive" alt="rysunek" />', 1],
        ['Narysowane trójkąty są przystające.<br><img src="imgtask/411/4.png" style="max-width:70%" class="center-block img-responsive" alt="rysunek" />', 1], //8
        ['Narysowane trójkąty są przystające.<br><img src="imgtask/411/3.png" style="max-width:70%" class="center-block img-responsive" alt="rysunek" />', 0],
        ['Narysowane trójkąty są przystające.<br><img src="imgtask/411/2.png" style="max-width:70%" class="center-block img-responsive" alt="rysunek" />', 1]
   ];
    
     var losuj = Math.round(Math.random()*(zdania.length-1));
    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
    if ((previous_tab.length)>=9) { previous = ''; previous_tab = ''; }
    this_example = losuj;
    while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
        losuj = Math.round(Math.random() * (zdania.length - 1));
        this_example = losuj;
    }    
    $('#previous').val(previous+this_example+';');      

    if (zdania[losuj][1]==1) {
        var wynik = 'PRAWDA';
    }
    else
        wynik = 'FAŁSZ';


    // wyswietl los

    $('#zadanie').html('<div class=""><p>' + zdania[losuj][0] + '</p><p class="text-center">\n\
<span class="btn btn-success btn-work s35 btn-matzoo" id="PRAWDA" onclick="klik(this)">PRAWDA</span>\n\
<span class="btn btn-danger btn-work s35 btn-matzoo" id="FAŁSZ" onclick="klik(this)">FAŁSZ</span><input type="hidden" id="odp" name="odp"/></p></div>');
    $('#wynik').val(wynik);
    $('#odp').focus();

}



function createStatement() {
}

function klik(em) {
    odpowiedz = $(em).html();
    $('#odp').val($(em).html());
    ok = obliczEnter();
    if (ok==1) {
        if (odpowiedz=="PRAWDA") $('#FAŁSZ').fadeOut('slow'); else $('#PRAWDA').fadeOut('slow');
    } else {
        if (odpowiedz=="PRAWDA") $('#PRAWDA').fadeOut('slow'); else $('#FAŁSZ').fadeOut('slow');
    }
    
    $('#dobrze').delay(2000).fadeOut("");
    $('#zle_odp').delay(2000).fadeOut("");
}


function obliczEnter() {
    if (checkEmpty()) return false;

    var odp = $('#odp').val();
    odp = str_replace(' ', '', odp);

        if (odp == $('#wynik').val()) {
            countCorrect();
            cleanSpace();
            $('.btn-matzoo').attr('onclick','los()');
            return 1;
        }
        else {
            countWrong();
            $('.btn-matzoo').attr('onclick','los()');
            return 0;
        } 
}


$(document).ready(function() {

    $('#content20').css('padding-left','5%');
    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('tekstowe');
    $('#zadanie').addClass('s21');    

    los();
    
});

