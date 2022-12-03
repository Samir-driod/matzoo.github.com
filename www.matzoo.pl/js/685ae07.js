limit = 9;
function los() {
    // los
    var jedn_a  = ['kg'  ,'t'   , 'g'   , 'kg'   ];
    var jedn_b  = ['g'   ,'kg'  ,'kg'   , 't'    ];
    var iloczyn = ['1000','1000', '0.001','0.001'];

    var example = Math.round(Math.random() * (iloczyn.length - 1));

    var x = Math.round(Math.random() * (limit - 1)) + 1;
    var y = Math.round(Math.random() * (limit - 1)) + 1;
    for (i = 1; i < (Math.round(Math.random() * 2) + 1); i++) {
        y = y * 10;
    }

    if (example == 0 || example == 1) {
        var wynik = x * (iloczyn[example]) + y;
    } else {
        wynik = x;
        var wynik2 = y;
        x = x * 1000 + y;
    }


    // wyswietl los
    if (example == 0 || example == 1) {
        const statement = x + ' ' +jedn_a[example]+ ' ' + y + ' ' +jedn_b[example]+ ' = '+wynik+' '+jedn_b[example];
        $('#zadanie').html(x + ' ' +jedn_a[example]+ ' ' + y + ' ' +jedn_b[example]+ ' = <input name="odp" type="tel" class="wyrazm s50" id="odp" size="3" maxlength="6" autocomplete="off" /> '+jedn_b[example]+'\n\
    <input type="hidden" name="x" id= "x" value="' + x + '" /><input type="hidden" name="statement" id= "statement" value="' + statement + '" />\n\
    <input type="hidden" name="jedn" id= "jedn" value="' + jedn_b[example] + '" />');
    } else {
        statement = x + ' ' +jedn_a[example]+ ' = '+wynik+' '+jedn_b[example] + ' ' + wynik2 + ' ' +jedn_a[example]+ '';
        $('#zadanie').html(x + ' ' +jedn_a[example]+ ' = <input name="odp" type="tel" class="wyrazm s50" id="odp" size="1" maxlength="6" autocomplete="off" /> '+jedn_b[example]+'\n\
        \ <input name="odp" type="tel" class="wyrazm s50" id="odp" size="1" maxlength="6" autocomplete="off" /> '+jedn_a[example]+'\n\
    <input type="hidden" name="x" id= "x" value="' + x + '" /><input type="hidden" name="statement" id= "statement" value="' + statement + '" />\n\
    <input type="hidden" name="jedn" id= "jedn" value="' + jedn_b[example] + '" />');
    }



    $('#wynik').val(wynik);
    $('#wynik2').val(wynik2);
    $('#odp').focus();

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    statement = ($('#statement').val());
    jedn = ($('#jedn').val());

    var statement = ' ' + statement;
    return statement;
}

$(document).ready(function () {

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('wyrazm');
    $('#zadanie').addClass('s50');


});