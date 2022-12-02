// Dzielenie ułamków dziesiętnych przez liczbę
const limit = 99;
const examplesLimit = 70;

function los() {
    
    
    var znak = 2;    // zawsze dzielenie
    
    if (znak == 1) {
        
        // los
        var x = Math.round(Math.random() * 8) + 2;
        var y = Math.round(Math.random() * 8) + 2;
        while (x * y > limit) {
            x = Math.round(Math.random() * 8) + 2;
            y = Math.round(Math.random() * 8) + 2;
        }
        
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        //console.log(previous_tab);
        if ((previous_tab.length)>=examplesLimit) { previous = ''; previous_tab = ''; }
        this_example = x+'·'+y;
            while (x * y > limit || (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1)) {
                x = Math.round(Math.random() * 9) + 1;
                y = Math.round(Math.random() * 9) + 1;
                this_example = x+'·'+y;
            }    
        $('#previous').val(previous+this_example+';');
        
        var wynik = x * y;

        var jedn = Math.round(Math.random() * 2);
        if (jedn == 1) {
            x = x/10;
            x = Math.round(x*10)/10;
            wynik = wynik/10;
            wynik = Math.round(wynik*10)/10;
        } else if (jedn == 2) {
            x = x/10;
            x = Math.round(x*10)/10;
            y = y*10;           
        } else if (jedn == 3) {
            x = x/100;
            x = Math.round(x*100)/100;
            y = y*10;   
            wynik = wynik/10;
            wynik = Math.round(wynik*10)/10;
        } else if (jedn == 4) {
            x = x/100;
            x = Math.round(x*100)/100;
            wynik = wynik/100;
            wynik = Math.round(wynik*100)/100;                            
        } else {
            x = x/1000;
            x = Math.round(x*1000)/1000;
            wynik = wynik/1000;
            wynik = Math.round(wynik*1000)/1000;            
        }
        wynik = str_replace('.', ',', wynik);
        x = str_replace('.', ',', x);

        // wyswietl los
        $('#zadanie').html(x + ' · ' + y + ' = <input name="odp" type="tel" class="wyraz1" id="odp" size="2" maxlength="6" autocomplete="off" />\n\
    <input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" /><input type="hidden" name="znak" id="znak" value="·" />');
        $('#wynik').val(wynik);
        $('#odp').focus();
        
    } else {
        
        // los
        var x = Math.round(Math.random() * 8) + 1;
        var y = Math.round(Math.random() * 8) + 1;
        while (x * y > limit || x*y==(x*y)/10) {
            x = Math.round(Math.random() * 8) + 1;
            y = Math.round(Math.random() * 8) + 1;
        }
        var wynik = x; x = x*y;
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        if ((previous_tab.length)>=examplesLimit) { previous = ''; previous_tab = ''; }
        this_example = x+':'+y;
            while (x > limit || x*y==(x*y)/10 || (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1)) {
                x = Math.round(Math.random() * 8) + 1;
                y = Math.round(Math.random() * 8) + 1;
                wynik = x; x = x*y;
                this_example = x+':'+y;
            }    
        $('#previous').val(previous+this_example+';');     

        
        var jedn = Math.round(Math.random() * 3);
        console.log(jedn);
        if (jedn == 1) {
            x = x/10;
            x = Math.round(x*10)/10;
        } else if (jedn == 2) {
            x = x/10;
            x = Math.round(x*10)/10;
            y = y*10;
        } else if (jedn == 3) {
            x = x/100;
            x = Math.round(x*100)/100;
            y = y*10;   
        } else {
            x = x/100;
            x = Math.round(x*100)/100;
        }
        wynik = x/y;
        wynik = Math.round(wynik*1000)/1000;
        wynik = str_replace('.', ',', wynik);
        x = str_replace('.', ',', x);
        
        //var wynik = x - y;
        // wyswietl los
        $('#zadanie').html(x + ' : ' + y + ' = <input name="odp" type="tel" class="wyraz1" id="odp" size="3" maxlength="6" autocomplete="off" />\n\
    <input type="hidden" name="x" id="x" value="' + x + '" /><input type="hidden" name="y" id="y" value="' + y + '" /><input type="hidden" name="znak" id="znak" value=":" />');
        $('#wynik').val(wynik);
        $('#odp').focus();        
    }
}
