
function los() {
  // los

    var example = Math.round(Math.random() * 1); // prostokat czy kwadrat
    
    if (example==1) { // kwadrat
        var a = Math.round(Math.random() * 14) + 6;
        //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        if ((previous_tab.length)>=50) { previous = ''; previous_tab = ''; }
        this_example = a;
        while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
            a = Math.round(Math.random() * (tab.length - 1));
            this_example = a;
        }    
        $('#previous').val(previous+this_example+';');    
        var wynik = a*4;        
    
    // wyswietl los
    $('#zadanie').addClass('s40');
    $('#zadanie').html('<table class="geometria" align="center">\n\
<tr>\n\<td><img src="imgtask/kwadrat.png" alt="" /></td><td><span>a = ' + a  + ' cm</span></td></tr>\n\
<tr><td colspan="2"><p class="dblue">Obwód kwadratu wynosi <input name="oo" type="tel" id="odp" size="2" maxlength="5" autocomplete="off"/> cm.</p></td></tr></table>\n\
<input type="hidden" name="tekst" id="tekst" value="Obwód kwadratu o boku ' + a  + '&nbsp;cm" />');
     
        
        
    } else { // prostokat
        var a = Math.round(Math.random() * 14) + 6;
        var b = Math.round(Math.random() * 5) + 5;
        while (a>=b) {
            a = Math.round(Math.random() * 14) + 6;
            b = Math.round(Math.random() * 5) + 5;
        }
    //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        if ((previous_tab.length)>=50) { previous = ''; previous_tab = ''; }
        this_example = a+','+b;
        while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
            a = Math.round(Math.random() * 14) + 6;
            b = Math.round(Math.random() * 5) + 5;
            this_example = a+','+b;
        }    
        $('#previous').val(previous+this_example+';');   
         var wynik = 2*(a+b);   
        
    // wyswietl los
    $('#zadanie').addClass('s40');
    $('#zadanie').html('<table class="geometria" align="center">\n\
<tr>\n\<td><img src="imgtask/prostokat.png" alt="" /></td><td><span>a = ' + a  + ' cm</span><br/><span>b = ' + b  + ' cm</span></td></tr>\n\
<tr><td colspan="2"><p class="dblue">Obwód prostokąta wynosi <input name="oo" id="odp" type="tel" size="2" maxlength="5" autocomplete="off"/> cm.</p></td></tr></table>\n\
<input type="hidden" name="tekst" id="tekst" value="Obwód prostokąta o bokach ' + a  + '&nbsp;cm i ' + b  + '&nbsp;cm" />');

                
    }

    $('#wynik').val(wynik);
    $('#odp').focus();   


}

function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    wyn = ($('#wynik').val());
    tekst = ($('#tekst').val());
    var statement = tekst + ' wynosi ' + wyn + '&nbsp;cm. <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '&nbsp;cm</span>';
    return statement;
}


$(document).ready(function () {
    
    $('#content20').css('padding-left','5%');
    $('#zle_odp').addClass('wrong3');
    $('#zadanie').addClass('s25');
    $('#zadanie').removeClass('wyraz1');
    
    los();
    keyboardEnter(1);

});