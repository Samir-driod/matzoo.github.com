
function los() {

    // los
    var losuj = Math.round(Math.random() * 12) + 1;
    var example = Math.round(Math.random() * 1);
    
    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
//    console.debug(previous_tab);
//    console.debug(previous_tab.length);
    if ((previous_tab.length)>=22) { previous = ''; previous_tab = ''; }
    this_example = example+','+losuj;
        while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
            losuj = Math.round(Math.random() * 12) + 1;
            example = Math.round(Math.random() * 1);
            this_example = example+','+losuj;
        }    
    $('#previous').val(previous+this_example+';');    
    
    
    if (example==1) var napis = 'ok';
    else napis = 'n';

    if (example ==1) {
        var wynik = 'TAK';
    }
    else
        wynik = 'NIE';

    // wyswietl los
    $('#zadanie').css('line-height', '125%');
    $('#zadanie').html('<div class=""><p><img src="imgtask/633/' + napis + losuj + '.png" alt="" style="max-width:60%"/></p>\n\
<p><span class="btn btn-matzoo btn-success s35" onclick="klik(this)" id="TAK">TAK</span> <span class="btn btn-matzoo btn-danger s35" onclick="klik(this)" id="NIE">NIE</span><input type="hidden" id="odp" name="odp"/></p></div>');
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
        if (odpowiedz=="TAK") $('#NIE').fadeOut('slow'); else $('#TAK').fadeOut('slow');
    } else {
        if (odpowiedz=="TAK") $('#TAK').fadeOut('slow'); else $('#NIE').fadeOut('slow');
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

    los();


});
