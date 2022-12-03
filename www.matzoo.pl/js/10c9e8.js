// Dodawanie z przekraczaniem progu dziesiątkowego
const limit = 20;
const examplesLimit = 35;

function los() {
    
    
    var znak = 1; // zawsze dodawanie   
    
    if (znak == 1) {
        
        // los
        var x = Math.round(Math.random() * 9);
        var y = Math.round(Math.random() * 9);
        while (x + y > limit || x + y <= 10) {
            x = Math.round(Math.random() * 9);
            y = Math.round(Math.random() * 9);
        }
        
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        //console.log(previous_tab);
        if ((previous_tab.length)>=examplesLimit) { previous = ''; previous_tab = ''; }
        this_example = x+'+'+y;
            while (x + y > limit || x + y <= 10 || (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1)) {
                x = Math.round(Math.random() * 9);
                y = Math.round(Math.random() * 9);
                this_example = x+'+'+y;
            }    
        $('#previous').val(previous+this_example+';');
        
        var wynik = x + y;
        // wyswietl los
        $('#zadanie').html(x + ' + ' + y + ' = <input name="odp" type="tel" class="wyraz1" id="odp" size="1" maxlength="3" autocomplete="off" />\n\
    <input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" /><input type="hidden" name="znak" id="znak" value="+" />');
        $('#wynik').val(wynik);
        $('#odp').focus();
        
    } else {
        
        // los
        var x = Math.round(Math.random() * 9) + 11;
        var y = Math.round(Math.random() * 9) + 1;
        while (x - y >= 10) {
            x = Math.round(Math.random() * 9) + 11;
            y = Math.round(Math.random() * 9) + 1;
        }
        
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        //console.log(previous_tab);
        if ((previous_tab.length)>=examplesLimit) { previous = ''; previous_tab = ''; }
        this_example = x+'-'+y;
            while (x - y >= 10 || (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1)) {
                x = Math.round(Math.random() * 9) + 11;
                y = Math.round(Math.random() * 9) + 1;
                this_example = x+'-'+y;
            }    
        $('#previous').val(previous+this_example+';');        
        
        var wynik = x - y;
        // wyswietl los
        $('#zadanie').html(x + ' - ' + y + ' = <input name="odp" type="tel" class="wyraz1" id="odp" size="1" maxlength="3" autocomplete="off" />\n\
    <input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" /><input type="hidden" name="znak" id="znak" value="-" />');
        $('#wynik').val(wynik);
        $('#odp').focus();        
    }
}
