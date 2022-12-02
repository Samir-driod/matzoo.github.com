
function los() {
    

        // los
        var c = Math.round(Math.random() * 19) + 1;
        var p = (Math.round(Math.random() * 9) + 1) * 10;
        var x = (p / 100) * c;
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        //console.debug(previous_tab);
        if ((previous_tab.length)>=48) { previous = ''; previous_tab = ''; }
        this_example = p+','+c;
            while (x!=(Math.round(x)) || previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
                c = Math.round(Math.random() * 19) + 1 * 2;
                p = (Math.round(Math.random() * 9) + 1) * 10;
                x = (p / 100) * c;
                this_example = p+','+c;
            }    
        $('#previous').val(previous+this_example+';');      
        
        
        var wynik = x;
        // wyswietl los
        $('#zadanie').html(p + '% <span class="wyrazm">z</span> ' + c + ' = <input name="odp" type="tel" class="wyraz1" id="odp" size="1" maxlength="3" autocomplete="off" />\n\
    <input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="c" id="c" value="' + c + '" /><input type="hidden" name="p" id="p" value="' + p + '" />');
        $('#wynik').val(wynik);
        $('#odp').focus();        

}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    p = ($('#p').val());
    c = ($('#c').val());
    wyn = ($('#wynik').val());
    var statement = ' ' + p + '% z ' + c + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    return statement;
}


$(document).ready(function () {
    los();
    keyboardEnter(1);
});