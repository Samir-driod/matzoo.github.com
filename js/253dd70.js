// Dzielenie przez 6, 7, 8 i 9
const limit = 100;
const examplesLimit = 15;

function los() {
    
    
    var znak = 0;    // zawsze dzielenie
    
    if (znak == 1) {
        
        // los
        var x = Math.round(Math.random() * 3) + 6;
        var y = Math.round(Math.random() * 3) + 6;
        while (x * y > limit) {
            x = Math.round(Math.random() * 3) + 6;
            y = Math.round(Math.random() * 3) + 6;
        }
        
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        console.log(previous_tab);
        if ((previous_tab.length)>=examplesLimit) { previous = ''; previous_tab = ''; }
        this_example = x+'·'+y;
            while (x * y > limit || (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1)) {
                x = Math.round(Math.random() * 3) + 6;
                y = Math.round(Math.random() * 3) + 6;
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
        var x = Math.round(Math.random() * 3) + 6;
        var y = Math.round(Math.random() * 3) + 6;
        while (x * y > limit) {
            x = Math.round(Math.random() * 3) + 6;
            y = Math.round(Math.random() * 3) + 6;
        }
        var wynik = x; x = x*y;
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        console.log(previous_tab);
        if ((previous_tab.length)>=examplesLimit) { previous = ''; previous_tab = ''; }
        this_example = x+':'+y;
            while (x > limit || (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1)) {
                x = Math.round(Math.random() * 3) + 6;
                y = Math.round(Math.random() * 3) + 6;
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
