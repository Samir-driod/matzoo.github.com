
function los() {

    // los
    rysunki = [
        ['ostry1','ostry'],
        ['ostry2','ostry'],
        ['ostry3','ostry'],
        ['ostry4','ostry'],
        ['ostry5','ostry'],
        ['prosty1','prosty'],
        ['prosty2','prosty'],
        ['prosty3','prosty'],
        ['prosty4','prosty'],
        ['rozwarty1','rozwarty'],
        ['rozwarty2','rozwarty'],
        ['rozwarty3','rozwarty'],
        ['polpelny1','polpelny'],
        ['polpelny2','polpelny'],
        ['polpelny3','polpelny'],
        ['wklesly1','wklesly'],
        ['wklesly2','wklesly'],
        ['wklesly3','wklesly'],
        ['wklesly4','wklesly'],
        ['pelny1','pelny'],
        ['pelny2','pelny'],
        ['pelny3','pelny'],
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
    
    tab = [ 'rozwarty', 'prosty', 'ostry',  'pelny' , 'wklesly','polpelny'];
    nazwy = [ 'rozwarty', 'prosty', 'ostry','pełny', 'wklęsły', 'półpełny'  ];

    var wynik = rysunki[x][1];
    // wyswietl los
    $('#guziki').html('<div style="width:38%;margin:0 4%" class=pull-left><img src="imgtask/202nn/' + rysunki[x][0] + '.png" alt="" class="center-block img-responsive" /></div>');
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