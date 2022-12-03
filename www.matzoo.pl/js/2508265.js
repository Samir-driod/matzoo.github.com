// Mnożenie przez 2, 3, 4 i 5
const limit = 100;
const examplesLimit = 35;

function los() {
    
    
    var znak = 1;    // zawsze mnożenie
    
    if (znak == 1) {
        
        // los
        var x = Math.round(Math.random() * 8) + 2;
        var y = Math.round(Math.random() * 3) + 2;
        while (x * y > limit) {
            x = Math.round(Math.random() * 8) + 2;
            y = Math.round(Math.random() * 3) + 2;
        }
        
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        console.log(previous_tab);
        if ((previous_tab.length)>=examplesLimit) { previous = ''; previous_tab = ''; }
        this_example = x+'·'+y;
            while (x * y > limit || (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1)) {
                x = Math.round(Math.random() * 8) + 2;
                y = Math.round(Math.random() * 3) + 2;
                this_example = x+'·'+y;
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
        var x = Math.round(Math.random() * 9) + 1;
        var y = Math.round(Math.random() * 9) + 1;
        while (x * y > limit) {
            x = Math.round(Math.random() * 9) + 1;
            y = Math.round(Math.random() * 9) + 1;
        }
        var wynik = x; x = x*y;
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        if ((previous_tab.length)>=examplesLimit) { previous = ''; previous_tab = ''; }
        this_example = x+':'+y;
            while (x * y > limit || (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1)) {
                x = Math.round(Math.random() * 9) + 1;
                y = Math.round(Math.random() * 9) + 1;
                wynik = x; x = x*y;
                this_example = x+':'+y;
            }    
        $('#previous').val(previous+this_example+';');        
        
        //var wynik = x - y;
        // wyswietl los
        $('#zadanie').html(x + ' : ' + y + ' = <input name="odp" type="tel" class="wyraz1" id="odp" size="1" maxlength="3" autocomplete="off" />\n\
    <input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" /><input type="hidden" name="znak" id="znak" value=":" />');
        $('#wynik').val(wynik);
        $('#odp').focus();        
    }
}
