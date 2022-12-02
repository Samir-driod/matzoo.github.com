
function los() {

    // los
    rysunki = [
        ['graniastoslup','graniastoslup'],
        ['szescian','graniastoslup'],
        ['szesciokatny','graniastoslup'],
        ['szesciokatny2','graniastoslup'],
        ['trojkatny','graniastoslup'],
        ['trojkatny2','graniastoslup'],
        ['ostroslup','ostroslup'],
        ['ostroslup2','ostroslup'],
        ['ostroslup3','ostroslup'],
        ['stozek','stozek'],
        ['stozek2','stozek'],
        ['kula','kula'],
        ['kula2','kula'],
        ['walec','walec'],
        ['walec2','walec'],
    ];
    
    limit = (rysunki.length)-1;    
    $('#zadanie').html('');
    
    var x = Math.round(Math.random() * limit);
    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
        
    if ((previous_tab.length)>=13) { previous = ''; previous_tab = ''; }
    this_example = x.toString();
    while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
        x = Math.round(Math.random() * limit);
        this_example = x.toString();
    }    
    $('#previous').val(previous+this_example+';');      
    
    tab =   ['graniastoslup', 'ostroslup', 'stozek', 'kula', 'walec'];
    nazwy = ['graniastosłup', 'ostrosłup', 'stożek', 'kula', 'walec'];

    var wynik = rysunki[x][1];
    // wyswietl los
    $('#guziki').html('<div style="width:34%;margin:0 4%" class=pull-left><img src="imgtask/174/' + rysunki[x][0] + '.png" alt="" class="center-block img-responsive" /><br></div>');
    $('#guziki').addClass('col-sm-10');
    $('#wynik').val(wynik);
    for (i = 0; i < 5; i++) {
        $('#guziki').append('<span class="btn btn-matzoo btn-lsuccess text-black s17 pull-right" onclick="klik(\'' + tab[i] + '\')">' + nazwy[i] + '</span>');
        
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