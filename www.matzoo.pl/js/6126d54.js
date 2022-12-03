
function los() {

    // los
    rysunki = [
        ['kwadrat','kwadrat'],
        ['kwadrat2','kwadrat'],
        ['kwadrat3','kwadrat'],
        ['trojkat','trojkat'],
        ['trojkat2','trojkat'],
        ['trojkat3','trojkat'],
        ['trojkat4','trojkat'],
        ['romb','romb'],
        ['romb2','romb'],
        ['romb3','romb'],
        ['romb4','romb'],
        ['prostokat','prostokat'],
        ['prostokat2','prostokat'],
        ['prostokat3','prostokat'],
        ['rownoleglobok','rownoleglobok'],
        ['rownoleglobok2','rownoleglobok'],
        ['rownoleglobok3','rownoleglobok'],
        ['trapez','trapez'],
        ['trapez2','trapez'],
        ['trapez3','trapez'],
        ['trapez4','trapez'],
        ['trapez5','trapez'],
    ];
    
    limit = (rysunki.length)-1;    
    $('#zadanie').html('');
    
    var x = Math.round(Math.random() * limit);
    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
        
    if ((previous_tab.length)>=20) { previous = ''; previous_tab = ''; }
    this_example = x.toString();
    while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
        x = Math.round(Math.random() * limit);
        this_example = x.toString();
    }    
    $('#previous').val(previous+this_example+';');      
    
    tab = ['kwadrat', 'prostokat', 'trojkat', 'trapez', 'romb', 'rownoleglobok'];
    nazwy = ['kwadrat', 'prostokąt', 'trójkąt', 'trapez', 'romb', 'równoległobok'];

    var wynik = rysunki[x][1];
    // wyswietl los
    $('#guziki').html('<div style="width:34%;margin:0 4%" class=pull-left><img src="imgtask/' + rysunki[x][0] + '.png" alt="" class="center-block img-responsive" /><br></div>');
    $('#guziki').addClass('col-sm-10');
    $('#wynik').val(wynik);
    for (i = 0; i < 6; i++) {
        $('#guziki').append('<span class="btn btn-matzoo btn-primary s15 pull-right" onclick="klik(\'' + tab[i] + '\')">' + nazwy[i] + '</span>');
        
    }

}


function oblicz() {

    // jesli dobra odpowiedź
    if ($('#odp').val() == $('#wynik').val()) {

        countCorrect();
        cleanSpace();
        los();

    } // jeśli zła odpowiedź
    else {

        countWrong();
    }
}

function klik(em) {
    $('#odp').val(em);
    oblicz();
}


$(document).ready(function () {

    los();

});