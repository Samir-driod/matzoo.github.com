
function los() {
  // los

    var tab = ['11','40','41','42','43','44','52','54','56','59','62','63','64','66','68','69','70','72','73','82','86','88','90','135','180'];

    var losuj = Math.round(Math.random() * (tab.length - 1));
    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
    if ((previous_tab.length)>=24) { previous = ''; previous_tab = ''; }
    this_example = losuj.toString();
    console.log(previous_tab);
    while (previous_tab && jQuery.inArray(this_example,previous_tab)!=-1) {
        losuj = Math.round(Math.random() * (tab.length - 1));
        this_example = losuj.toString();
    }    
    $('#previous').val(previous+this_example+';');    
    
    wynik=tab[losuj];
    // wyswietl los
    $('#zadanie').addClass('s40');
    $('#zadanie').html('<table class="geometria" align="center"><tr><td><img src="imgtask/203n/'+tab[losuj]+'.png" class="img-responsive" alt="" /></td>\n\
                        <td>&nbsp;<input type="tel" id="odp" size=3 name="odp" autocomplete="off" />°<input name="odp3" type="tel" style="opacity:0;float:right" id="odp3" size="1" maxlength="2" autocomplete="off" /></td></tr></table>');
    $('#wynik').val(wynik);
    $('#odp').focus();

}

function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    var statement = '';
    return statement;
}


$(document).ready(function () {
    
    $('#content20').css('padding-left','5%');
    $('#zadanie').addClass('s25');
    
    los();
    keyboardEnter(0);

});