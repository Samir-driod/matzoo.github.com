
function los() {

    // los
    var zdania = [['Trójkąt prostokątny może być równoramienny', 1],
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
        ['Suma miar wszystkich kątów trójkąta jest równa 180°', 1],
        ['Suma miar wszystkich kątów trójkąta jest równa 360°', 0],
        ['Przyprostokątna w trójkącie prostokątnym może być dłuższa od przeciwprostokątnej', 0]
    ];

    var losuj = Math.round(Math.random() * (zdania.length - 1));
    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
    if ((previous_tab.length)>=17) { previous = ''; previous_tab = ''; }
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


