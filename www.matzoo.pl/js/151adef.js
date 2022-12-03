
function los() {
  // los

        var a = Math.round(Math.random() * 10) + 2;
        var b = Math.round(Math.random() * 10) + 2;
        while (a>=b) {
            a = Math.round(Math.random() * 10) + 2;
            b = Math.round(Math.random() * 10) + 2;
        }
    //poprzednie
        previous = $('#previous').val();
        previous_tab = previous.split(';');
        if ((previous_tab.length)>=30) { previous = ''; previous_tab = ''; }
        this_example = a+','+b;
        while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
            a = Math.round(Math.random() * 10) + 2;
            b = Math.round(Math.random() * 10) + 2;
            this_example = a+','+b;
        }    
        $('#previous').val(previous+this_example+';');   
         var wynik = 2*(a+b);   
        
    // wyswietl los
    $('#zadanie').addClass('s40');
    $('#zadanie').html('<table class="geometria" align="center">\n\
<tr>\n\<td><img src="imgtask/prostokat.png" alt="" /></td><td><span>a = ' + a  + ' cm</span><br/><span>b = ' + b  + ' cm</span></td></tr>\n\
<tr><td colspan="2"><p class="dblue">Obwód prostokąta wynosi:</p>\n\
          <p>2 · (<input name="oa" type="tel" id="oa" size="1" maxlength="2" autocomplete="off"/> cm +\n\
            <input name="ob" id="ob" type="tel"  size="1" maxlength="2" autocomplete="off"/> cm) =\n\
            <input name="oo" id="odp" type="tel" size="2" maxlength="3" autocomplete="off"/> cm</p></td></tr></table>\n\
<input type="hidden" name="a" id="a" value="' + a + '" /><input type="hidden" name="b" id="b" value="' + b + '" />\n\
<input type="hidden" name="tekst" id="tekst" value="" />');

    $('#wynik').val(wynik);
    $('#oa').focus(); 
}

function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    a = ($('#a').val());
    b = ($('#b').val());
    wyn = ($('#wynik').val());
    var statement = 'Obwód prostokąta o bokach ' + a  + '&nbsp;cm i ' + b  + '&nbsp;cm wynosi ' + wyn + '&nbsp;cm. <span class="s15 pull-right black" style="font-family: ">wpisano: 2 · (' + $('#oa').val() + '&nbsp;cm + ' + $('#ob').val() + '&nbsp;cm) = ' + $('#odp').val() + '&nbsp;cm </span>';
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