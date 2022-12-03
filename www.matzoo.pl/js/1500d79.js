
function los() {
  // los


    var losuj = Math.round(Math.random() * 12) + 2;
    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
    if ((previous_tab.length)>=23) { previous = ''; previous_tab = ''; }
    this_example = losuj;
    while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
        losuj = Math.round(Math.random() * (tab.length - 1));
        this_example = losuj;
    }    
    $('#previous').val(previous+this_example+';');    
    var wynik = losuj*4;
    
    // wyswietl los
    $('#zadanie').addClass('s40');
    $('#zadanie').html('<table class="geometria" align="center">\n\
<tr>\n\<td><img src="imgtask/kwadrat.png" alt="" /></td><td><span>a = ' + losuj  + ' cm</span></td></tr>\n\
<tr><td colspan="2"><p class="dblue">Obwód kwadratu wynosi:</p><p>4 · \n\
<input name="oa" type="tel" id="odp" size="1" maxlength="2" autocomplete="off"/> cm =\n\
<input name="oo" type="tel" id="odp2" size="2" maxlength="3" autocomplete="off"/> cm</p></td></tr></table><input type="hidden" name="x" id="x" value="' + losuj + '" />');
    $('#wynik').val(losuj);
    $('#wynik2').val(wynik);
    $('#odp').focus();

}

function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    wyn = x*4;
    var statement = 'Obwód kwadratu o boku ' + x + '&nbsp;cm wynosi ' + wyn + '&nbsp;cm. <span class="s15 pull-right black" style="font-family: ">wpisano: 4 · ' + $('#odp').val() + '&nbsp;cm = ' + $('#odp2').val() + '&nbsp;cm</span>';
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