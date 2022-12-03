
function los() {

    // los
    var losuj = Math.round(Math.random() * 24) + 1;
    if (losuj < 10)
        var zdania = '<img src="imgtask/flags/0' + losuj + '.png" alt=""/>';
    else
        zdania = '<img src="imgtask/flags/' + losuj + '.png" alt=""/>';

    if (losuj!=1 && losuj <= 16 || losuj==25) {
        var wynik = 'TAK';
    }
    else
        wynik = 'NIE';

    // wyswietl los
    $('#zadanie').css('line-height', '125%');
    $('#zadanie').html('<div class=""><p>' + zdania + '</p><p><span class="btn btn-matzoo btn-success s35" onclick="klik(this)">TAK</span> <span class="btn btn-matzoo btn-danger s35" onclick="klik(this)">NIE</span><input type="hidden" id="odp" name="odp"/></p></div>');
    $('#wynik').val(wynik);
    $('#odp').focus();

}


function createStatement() {
}

function klik(em) {
    $('#odp').val($(em).html());
    obliczEnter(1);
}


$(document).ready(function () {

    los();

});