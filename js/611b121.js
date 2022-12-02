
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
    $('#zadanie').html('<div class=""><p><img src="imgtask/611/' + napis + losuj + '.png" alt=""/></p><p><span class="btn btn-matzoo btn-success s35" onclick="klik(this)">TAK</span> <span class="btn btn-matzoo btn-danger s35" onclick="klik(this)">NIE</span><input type="hidden" id="odp" name="odp"/></p></div>');
    $('#wynik').val(wynik);
    $('#odp').focus();

}


function createStatement() {
}

function klik(em) {
    $('#odp').val($(em).html());
    obliczEnter(0);
}


$(document).ready(function () {

    los();

});