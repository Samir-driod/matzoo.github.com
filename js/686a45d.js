limit = 20;
function los() {
    // los
    var jedn_a  = ['zł' , 'gr'  ];
    var jedn_b  = ['gr', 'zł'   ];
    var iloczyn = ['100', '0.01'];

    var example = Math.round(Math.random() * (iloczyn.length - 1));
    var x = Math.round(Math.random() * (limit - 1)) + 1;
    if (example == 1) x = x * 100;

    var wynik = x * (iloczyn[example]);
    wynik = Math.round(wynik);

    var statement = x + ' ' +jedn_a[example]+ ' = '+wynik+' '+jedn_b[example];
    // wyswietl los
    $('#zadanie').html(x + ' ' +jedn_a[example]+ ' = <input name="odp" type="tel" class="wyrazm s60" id="odp" size="3" maxlength="6" autocomplete="off" /> '+jedn_b[example]+'\n\
    <input type="hidden" name="x" id= "x" value="' + x + '" /><input type="hidden" name="statement" id= "statement" value="' + statement + '" />\n\
    <input type="hidden" name="jedn" id= "jedn" value="' + jedn_b[example] + '" />');
    $('#wynik').val(wynik);
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
    $('#zadanie').addClass('s60');


});