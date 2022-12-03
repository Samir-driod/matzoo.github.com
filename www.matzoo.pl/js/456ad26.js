
function los() {

    // los
    var zdania = [
['Trójkąt prostokątny może być równoramienny', 1],
['Trójkąt prostokątny nie może być równoramienny', 0],
['Trójkąt równoboczny może mieć kąt prosty', 0],
['Trójkąt równoboczny może mieć kąt rozwarty', 0],
['Trójkąt, który ma wszystkie kąty równe ma też wszystkie boki równej długości', 1],
['Trójkąt, który ma wszystkie kąty równe nie musi mieć wszystkich boków równej długości', 0],
['Każdy trójkąt prostokątny ma dwa kąty ostre', 1],
['Każdy trójkąt rozwartokątny ma dwa kąty ostre', 1],
['Trójkąt może mieć dwa kąty rozwarte', 0],
['Trójkąt może mieć dwa kąty ostre', 1],
['Trójkąt może mieć wszystkie kąty ostre', 1],
['Trójkąt może mieć tylko jeden kąt prosty', 1],
['Trójkąt może mieć dwa kąty proste', 0],
['Trójkąt może mieć dwa kąty rozwarte', 0],
['Trójkąt nie może mieć dwóch kątów prostych', 1],
['Ramię trójkąta równoramiennego musi być dłuższe od połowy jego podstawy', 1],
['Przyprostokątna w trójkącie prostokątnym może być dłuższa od przeciwprostokątnej', 0],
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
['Każdy równoległobok jest prostokątem', 0],
['Każdy równoległobok jest kwadratem', 0],
['Przekątne w każdym równoległoboku są jednakowej długości', 0],
['Każdy prostokąt jest równoległobokiem', 1],
['Trójkąt równoboczny może mieć kąt prosty', 0],
['Trójkąt równoboczny ma tylko kąty ostre', 1],
['Trójkąt równoboczny może być trójkątem o różnych kątach', 0],
['Kąty ostre w trójkącie równobocznym są sobie równe', 1],
['Trójkąt równoramienny może być prostokątny', 1],
['Trójkąt równoramienny nie może być prostokątny', 0],
['Trójkąt równoramienny może być rozwartokątny', 1],
['Trójkąt równoramienny nie może być rozwartokątny', 0 ],
['Trójkąt równoramienny może mieć wszystkie kąty ostre', 1],
['Trójkąt równoramienny może mieć dwa kąty równej miary', 1],
['Trójkąt równoramienny może mieć trzy kąty równej miary', 1],
['Trójkąt równoramienny może mieć trzy kąty ostre, każdy o innej mierze', 0],
['Trójkąt równoramienny nie może być rozwartokątny', 0],
['Trójkąt prostokątny nie może być trójkątem równoramiennym', 0],
['Trójkąt prostokątny może mieć dwa kąty równej miary', 1],
['Trójkąt różnoboczny może być prostokątny', 1],
['Trójkąt różnoboczny może być rozwartokątny', 1],
['Trójkąt różnoboczny może mieć jedynie kąty ostre', 0],
['Istnieje trójkąt równoboczny rozwartokątny', 0],
['Istnieje trójkąt równoboczny prostokątny', 0],
['Istnieje trójkąt równoramienny prostokątny', 1],
['Istnieje trójkąt różnoboczny prostokątny', 1],
['Istnieje trójkąt różnoboczny ostrokątny', 1],
['Istnieje trójkąt różnoboczny, którego wszystkie kąty mają jednakową miarę', 0],
['Suma kątów w trójkącie wynosi 180 stopni', 1],
['Suma kątów w trójkącie wynosi 360 stopni', 0],
['Suma kątów ostrych w trójkącie prostokątnym wynosi 90 stopni', 1],
['Najdłuższy bok w trójkącie prostokątnym to przeciwprostokątna', 1],
['Najdłuższy bok w trójkącie równoramiennym to zawsze podstawa', 0],
['Istnieje trójkąt prostokątny, w którym długości przyprostokątnych i przeciwprostokątnej są takie same', 0],
['Obwód trójkąta równobocznego jest trzy razy większy od boku tego trójkąta', 1],
['Trójkąt, którego kąty ostre mają miary 30 i 60 stopni jest trójkątem prostokątnym', 1],
['Nie istnieje trójkąt, którego kąty ostre są równe i mają miarę 45 stopni', 0],
['Istnieje trójkąt, którego kąty mają miary 60, 70, 80 stopni', 0],
['Ramię trójkąta równoramiennego może być krótsze od jego podstawy', 1],
['Suma kątów w czworokącie wynosi 180 stopni', 0],
['Suma kątów w czworokącie wynosi 360 stopni', 1],

    ];

    var losuj = Math.round(Math.random() * (zdania.length - 1));
    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
    if ((previous_tab.length)>=68) { previous = ''; previous_tab = ''; }
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


