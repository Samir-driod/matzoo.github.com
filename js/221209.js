// Odejmowanie  dziesiątek w zakresie 100
const limit = 10;
const examplesLimit = 60;

function los() {
    
    
    var znak = 0; // zawsze odejmowanie   
    
    if (znak == 1) {
        
        // los
        var x = Math.round(Math.random() * limit) * 10;
        var y = Math.round(Math.random() * limit) * 10;
        while (x + y > 100) {
            x = Math.round(Math.random() * limit) * 10;
            y = Math.round(Math.random() * limit) * 10;
        }
        
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        //console.log(previous_tab);
        if ((previous_tab.length)>=examplesLimit) { previous = ''; previous_tab = ''; }
        this_example = x+'+'+y;
            while (x + y > 100 || (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1)) {
                x = Math.round(Math.random() * limit) * 10;
                y = Math.round(Math.random() * limit) * 10;
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
        var x = Math.round(Math.random() * limit) * 10;
        var y = Math.round(Math.random() * limit) * 10;
        while (x < y) {
            x = Math.round(Math.random() * limit) * 10;
            y = Math.round(Math.random() * limit) * 10;
        }
        
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        //console.log(previous_tab);
        if ((previous_tab.length)>=examplesLimit) { previous = ''; previous_tab = ''; }
        this_example = x+'-'+y;
            while (x < y || (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1)) {
                x = Math.round(Math.random() * limit) * 10;
                y = Math.round(Math.random() * limit) * 10;
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
