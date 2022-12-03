
function los() {

    // los

    var zdania = [
        ['Czworokąt, który ma tylko jedną parę boków równoległych to równoległobok', 0],
        ['Czworokąt, który ma co najmniej jedną parę boków równoległych to trapez', 1],
        ['Prostokąt to czworokąt, który ma wszystkie kąty proste', 1],
        ['Każdy kwadrat jest trapezem', 1],
        ['Każdy kwadrat jest prostokątem', 1],
        ['Każdy prostokąt jest kwadratem', 0],
        ['Każdy prostokąt jest rombem', 0],
        ['Każdy romb jest równoległobokiem', 1],
        ['Każdy równoległobok jest rombem', 0],
        ['Każdy kwadrat jest rombem', 1],
        ['Kwadrat jest rombem i prostokątem', 1],
        ['Każdy czworokąt, którego przekątne są prostopadłe jest rombem', 0],
        ['Suma miar kątów leżących przy tym samym boku równoległoboku jest równa 180°', 1],
        ['Suma miar wszystkich kątów wewnętrznych czworokąta jest równa 180°', 0],
        ['Suma miar wszystkich kątów wewnętrznych czworokąta jest równa 360°', 1],
        ['Czworokąt, którego przekątne są prostopadłe jest prostokątem', 0],
        ['Każdy równoległobok jest prostokątem', 0],
        ['Każdy równoległobok jest kwadratem', 0],
        ['Przekątne w każdym równoległoboku są jednakowej długości', 0],
        ['Każdy prostokąt jest równoległobokiem', 1],
['W kwadracie przekątne przecinają się w połowie', 1],
['W kwadracie przekątne przecinają się pod kątem prostym', 1],
['W prostokącie przekątne przecinają się pod kątem prostym', 0],
['W prostokącie przekątne przecinają się w połowie', 1],
['Każdy prostokąt jest trapezem', 1],
['Każdy trapez jest prostokątem', 0],
['Każdy równoległobok jest prostokątem', 0],
['Każdy równoległobok jest trapezem', 1],
['Każdy trapez jest równoległobokiem', 0],
['Kwadrat, prostokąt, romb i równoległobok są trapezami', 1],
['Czworokąt, który ma wszystkie boki równe jest rombem', 1],
['Przekątne w rombie przecinają się w połowie', 1],
['Przekątne w równoległoboku przecinają się w połowie', 1],
['Istnieje trapez, który ma wszystkie boki równe', 1],
['Nie istnieje romb, który ma wszystkie kąty równe', 0],
['Nie istnieje trapez, którego każdy bok ma inną długość', 0],
['Istnieje prostokąt, którego każdy bok ma inną długość', 0],
['Nie istnieje trapez, którego ramiona i jedna z podstaw są równej długości', 0],
['Nie istnieje czworokąt, który ma wszystkie boki równe, ale przekątne różnej długości', 0],
['Trapez nie może mieć kąta prostego', 0],
['Równoległobok nie może mieć kąta prostego', 0],
['Jeśli w równoległoboku kąt ostry ma miarę 30 stopni, to kąt rozwarty ma miarę 150 stopni', 1],
['W równoległoboku suma miar kątów przy dowolnym boku wynosi 180 stopni', 1],
['W trapezie suma miar kątów przy dowolnym boku wynosi 180 stopni', 0],
['W trapezie suma miar kątów przy dowolnym ramieniu wynosi 180 stopni', 1],        
    ];        

    var losuj = Math.round(Math.random() * (zdania.length - 1));
    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
    if ((previous_tab.length)>=42) { previous = ''; previous_tab = ''; }
    this_example = losuj;
    while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
        losuj = Math.round(Math.random() * (zdania.length - 1));
        this_example = losuj;
    }    
    $('#previous').val(previous+this_example+';');  


    if (zdania[losuj][1] == 1) {
        var wynik = 'PRAWDA';
    }
    else
        wynik = 'FAŁSZ';


    // wyswietl los
    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('tekstowe');
    $('#zadanie').addClass('s21');
    $('#zadanie').html('<div class=""><p>' + zdania[losuj][0] + '.<br></p><p class="text-center">\n\
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


$(document).ready(function () {

    $('#content20').css('padding-left', '5%');
    $('#zadanie').addClass('tekstowe');
    $('#zadanie').addClass('s19');
    los();


});


