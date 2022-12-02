limit = 1000;

function los() {
    // los
    var x = Math.round(Math.random() * 10)+10;
    var y = x;
    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
    if ((previous_tab.length)>=6) { previous = ''; previous_tab = ''; }
    this_example = x+','+y;
        while (x * y > limit || (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1)) {
            x = Math.round(Math.random() * 10)+10;
            y = x;
            this_example = x+','+y;
        }    
        //console.debug(previous_tab);
    $('#previous').val(previous+this_example+';');
    var wynik = x * y;
    
    // wyswietl los
    $('#zadanie').html(x + ' · ' + y + ' = <input name="odp" type="tel" class="wyraz1" id="odp" size="1" maxlength="3" autocomplete="off" />\n\
<input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" />');
    $('#wynik').val(wynik);
    $('#odp').focus();

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    wyn = x * y;
    var statement = ' ' + x + ' · ' + y + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {

    los();
    keyboardEnter(1);

});