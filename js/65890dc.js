function los() {
    // los

    var tab = ['30','40','53','55','58','68','81','83','90','97','112','120','122','125','126','127','140'];
    
    var losuj = Math.round(Math.random() * (tab.length - 1));
    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
    if ((previous_tab.length)>=17) { previous = ''; previous_tab = ''; }
    this_example = losuj.toString();
    while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
        losuj = Math.round(Math.random() * (tab.length - 1));
        this_example = losuj.toString();
    }    
    $('#previous').val(previous+this_example+';');     

    var wynik = tab[losuj];
    // wyswietl los
    $('#zadanie').addClass('s40');
    $('#zadanie').html('<table class="geometria" align="center"><tr><td><img src="imgtask/658/' + tab[losuj] + '.png" class="img-responsive" alt="" /></td>\n\
                        <td>&nbsp;<input type="tel" id="odp" size=3 name="odp" autocomplete="off"/>°<input name="odp3" type="tel" style="opacity:0;float:right" id="odp3" size="1" maxlength="4" /></td></tr></table>');
    $('#wynik').val(wynik);
    $('#odp').focus();

}



function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    var statement = '';
    return statement;
}


$(document).ready(function () {

    los();
    keyboardEnter(0);

});