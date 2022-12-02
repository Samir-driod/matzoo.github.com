limit = 100; mlimit = 10;
function los() {
    
    var znak = Math.round(Math.random() * 1);    
    if (znak == 1) {
        // los
        var x = Math.round(Math.random() * 3) + 6;
        var y = Math.round(Math.random() * 3) + 6;
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        console.debug(previous_tab);
        console.debug(previous_tab.length);
        if ((previous_tab.length)>=15) { previous = ''; previous_tab = ''; }
        this_example = x+','+y;
            while (x * y > limit || (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1)) {
                x = Math.round(Math.random() * 3) + 6;
                y = Math.round(Math.random() * 3) + 6;
                this_example = x+','+y;
            }    
        $('#previous').val(previous+this_example+';');
        var wynik = x * y;
        // wyswietl los
        $('#zadanie').html(x + ' · ' + y + ' = <input name="odp" type="tel" class="wyraz1" id="odp" size="1" maxlength="3" autocomplete="off" />\n\
    <input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" /><input type="hidden" name="znak" id="znak" value="·" />');
        $('#wynik').val(wynik);
        $('#odp').focus();
    } else {
        // los
        var x = Math.round(Math.random() * 3) + 6;
        var y = Math.round(Math.random() * 3) + 6;
        x = x * y; 
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        console.debug(previous_tab);
        console.debug(previous_tab.length);
        if ((previous_tab.length)>=15) { previous = ''; previous_tab = ''; }
        this_example = x+','+y;
            while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
                x = Math.round(Math.random() * 3) + 6;
                y = Math.round(Math.random() * 3) + 6;
                x = x * y; 
                this_example = x+','+y;
            }    
        $('#previous').val(previous+this_example+';');        
        var wynik = x / y;
        // wyswietl los
        $('#zadanie').html(x + ' : ' + y + ' = <input name="odp" type="tel" class="wyraz1" id="odp" size="1" maxlength="3" autocomplete="off" />\n\
    <input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" /><input type="hidden" name="znak" id="znak" value=":" />');
        $('#wynik').val(wynik);
        $('#odp').focus();        
    }
}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    znak = ($('#znak').val());
    wyn = ($('#wynik').val());
    var statement = ' ' + x + ' ' + znak + ' ' + y + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {
    los();
    keyboardEnter(1);
});