
function los() {
    // los

    var tab = [
        ['2pi-8','2π-8'],
        ['3','3π'],
        ['4','4π'],
        ['6','6π'],
        ['7','7π'],
        ['8','8π'],
        ['12','12π'],
        ['14','14π'],
        ['15','15π'],
        ['14pi-8','14π-8'],
        ['16pi-8','16π-8'],
        ['16pi-32','16π-22'],
        ['18','18π'],
        ['36-9pi','36-9π'],
        ['48-8pi','48-8π']
        ];
    var example = Math.round(Math.random() * (tab.length - 1));
    console.debug(example);

    var wynik = tab[example][1];
    // wyswietl los
    $('#zadanie').addClass('s40');
    $('#zadanie').html('<table class="geometria" align="center"><tr><td><img src="imgtask/537/' + tab[example][0] + '.png" class="img-responsive" alt="" /></td>\n\
                        <td><p class="dogen text-right"><input type="hidden" id="co"/><a class="znak btn btn-lsuccess btn-matzoo gradient s21 text-black margin0" style="padding:8px" onclick="radic(\'&pi;\')"><img alt="&pi;" src="img/zn_pism.png"></a></p>\n\
 &nbsp;P<sub>f</sub> =&nbsp;<input type="tel" id="odp" size=5 name="odp" class=wyrazm maxlength=10/><input name="odp3" type="tel" style="opacity:0;float:right" id="odp3" size="3" maxlength="6" /></td></tr></table>');
    $('#wynik').val(wynik);
    $('#odp').focus();
    console.debug(wynik);

}



function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    var statement = 'Spróbuj ponownie.';
    return statement;
}


$(document).ready(function () {

    los();
    keyboardEnter(0);

});