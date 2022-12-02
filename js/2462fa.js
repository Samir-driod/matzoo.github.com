// Dodawanie dziesiątek do różnych liczb
const limit = 100;
const examplesLimit = 100;

function los() {
    
    
    var znak = 0; // zawsze odejmowanie   
    
    if (znak == 1) {
        
        // los
        var x = Math.round(Math.random() * limit);
        var y = (Math.round(Math.random() * 9) + 1) * 10;
        while (x + y > 100) {
            x = Math.round(Math.random() * limit);
            y = (Math.round(Math.random() * 9) + 1) * 10;
        }
        
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        if ((previous_tab.length)>=examplesLimit) { previous = ''; previous_tab = ''; }
        this_example = x+'+'+y;
            while (x + y > 100 || (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1)) {
                x = Math.round(Math.random() * limit);
                y = (Math.round(Math.random() * 9) + 1) * 10;
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
        var x = Math.round(Math.random() * limit);
        var y = (Math.round(Math.random() * 9) + 1) * 10;
        while (x < y) {
            x = Math.round(Math.random() * limit);
            y = (Math.round(Math.random() * 9) + 1) * 10;
        }
        
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        if ((previous_tab.length)>=examplesLimit) { previous = ''; previous_tab = ''; }
        this_example = x+'-'+y;
            while (x < y || (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1)) {
                x = Math.round(Math.random() * limit);
            y = (Math.round(Math.random() * 9) + 1) * 10;
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
