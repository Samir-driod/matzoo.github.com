// Mnożenie i dzielenie w zakresie 30 WIĘKSZE LICZBY
const limit = 30;
const examplesLimit = 12;

function los() {
    
    
    var znak = Math.round(Math.random() * 1);  
    
    if (znak == 1) {
        
        // los
        var x = Math.round(Math.random() * 7) + 3;
        var y = Math.round(Math.random() * 4) + 6; 
        while (x * y > limit) {
            x = Math.round(Math.random() * 7) + 3;
            y = Math.round(Math.random() * 4) + 6; 
        }
        
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        //console.log(previous_tab);
        if ((previous_tab.length)>=examplesLimit) { previous = ''; previous_tab = ''; }
        this_example = x+'·'+y;
            while (x * y > limit || (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1)) {
                x = Math.round(Math.random() * 7) + 3;
                y = Math.round(Math.random() * 4) + 6; 
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
        var x = Math.round(Math.random() * 7) + 3;
        var y = Math.round(Math.random() * 4) + 6; 
        while (x * y > limit) {
            x = Math.round(Math.random() * 7) + 3;
                y = Math.round(Math.random() * 4) + 6; 
        }
        var wynik = x; x = x*y;
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        //console.log(previous_tab);
        if ((previous_tab.length)>=examplesLimit) { previous = ''; previous_tab = ''; }
        this_example = x+':'+y;
            while (wynik * y > limit || (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1)) {
                x = Math.round(Math.random() * 7) + 3;
                y = Math.round(Math.random() * 4) + 6; 
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
