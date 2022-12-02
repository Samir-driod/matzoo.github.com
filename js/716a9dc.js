limit = 10;
function los() {
    // los
    var scale = ['2:1','1:2','5:1','10:1','1:4','1:5','1:10'];
    var operation = ['2','0.5','5','10','0.25','0.2','0.1'];

    var example = Math.round(Math.random() * (scale.length - 1));

    var x = Math.round(Math.random() * (limit - 1)) + 1;
    if (example == 4) {
        x = x * 4;
    } else if (example == 5) {
        x = x * 5;
    } else if (example == 5) {
        x = x * 10;
    }
    if (Math.round(Math.random() * 3) == 1) x = x*10;
    var wynik = x * operation[example];
    while (wynik != Math.round(wynik)) {
        x = Math.round(Math.random() * (limit - 1)) + 1;
        if (example == 4) {
            x = x * 4;
        } else if (example == 5) {
            x = x * 5;
        } else if (example == 5) {
            x = x * 10;
        }
        if (Math.round(Math.random() * 3) == 1) x = x*10;
        wynik = x * operation[example];
    }
    //console.log('x ' +x +' = ' + wynik);

    var y = wynik;
    wynik = scale[example];


    var statement = x + ' cm w skali '+scale[example]+' to '+y+' cm.';
    // wyswietl los
    $('#zadanie').html(x + ' cm ' +
        'w skali <span class="dblue"><input name="odp" type="tel" class="wyrazm" id="odp" size="3" maxlength="6" autocomplete="off" /></span> to ' + y + ' cm.' +
        '<input type="hidden" name="x" id= "x" value="' + x + '" /><input type="hidden" name="statement" id= "statement" value="' + statement + '" />');
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


});