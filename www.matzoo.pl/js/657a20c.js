function los() {
    // los

    var tab = ['37','45','58','67','70','72','76','82','84','85','86','96','98','99','108','110','113','115','143'];
    
    var losuj = Math.round(Math.random() * (tab.length - 1));
    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
    if ((previous_tab.length)>=17) { previous = ''; previous_tab = ''; }
    this_example = losuj;
    while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
        losuj = Math.round(Math.random() * (tab.length - 1));
        this_example = losuj;
    }    
    $('#previous').val(previous+this_example+';');     

    var wynik = tab[losuj];
    // wyswietl los
    $('#zadanie').addClass('s40');
    $('#zadanie').html('<table class="geometria" align="center"><tr><td><img src="imgtask/657/' + tab[losuj] + '.png" class="img-responsive" alt="" /></td>\n\
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