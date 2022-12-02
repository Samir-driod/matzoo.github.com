
function los() {
  // los

    var tab = ['11','40','41','42','43','44','52','54','55','56','59','62','63','64','66','68','69','70','72','73','82','86','88','90','135','180'];
    var example = Math.round(Math.random()*(tab.length-1));
    
    wynik=tab[example];
    // wyswietl los
    $('#zadanie').addClass('s40');
    $('#zadanie').html('<table class="geometria" align="center"><tr><td><img src="imgtask/203n/'+tab[example]+'.png" class="img-responsive" alt="" /></td>\n\
                        <td>&nbsp;<input type="tel" id="odp" size=1 name="odp" autocomplete="off"/>°<input name="odp3" type="tel" style="opacity:0;float:right" id="odp3" size="1" maxlength="2" /></td></tr></table>');
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
    keyboardEnter(1);

});