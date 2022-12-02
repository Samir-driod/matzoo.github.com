
function los() {
    // los
    
    var tab = [
        ['m/s',  'km/h', '*', '3.6', '10'],         // m/s = 3.6 km/h
        ['km/h', 'm/s',  '/', '3.6', '36']

    ];
      
    var example = Math.round(Math.random() * 1);
    var x = Math.round(Math.random() * 9) + 1;     
    x = x*tab[example][4];
    

    //poprzednie
    previous = $('#previous').val();
    previous_tab = previous.split(';');
    console.debug(previous_tab);
    console.debug(previous_tab.length);
    if ((previous_tab.length)>=18) { previous = ''; previous_tab = ''; }
    this_example = x+','+example;
        while ((previous_tab && jQuery.inArray(this_example,previous_tab)!=-1)) {
            example = Math.round(Math.random() * 1);
            x = Math.round(Math.random() * 9) + 1;     
            x = x*tab[example][4];
            this_example = x+','+example;
        }    
    $('#previous').val(previous+this_example+';');



    if (tab[example][2]=='*') var wynik = x*tab[example][3];
    else if (tab[example][2]=='/') wynik = x/tab[example][3];
    
    var statement = x + ' ' +tab[example][0]+ ' = '+wynik+' '+tab[example][1];
 
        // wyswietl los
        $('#zadanie').html(x + ' ' +tab[example][0]+ ' = <input name="odp" type="tel" class="wyrazm s50" id="odp" size="4" maxlength="8" autocomplete="off" /> '+tab[example][1]+'\n\
        <input type="hidden" name="x" id= "x" value="' + x + '" /><input type="hidden" name="statement" id= "statement" value="' + statement + '" />\n\
        <input type="hidden" name="jedn" id= "jedn" value="' + tab[example][1] + '" /><p class=small>&nbsp;</p>');
        $('#wynik').val(wynik);
        $('#odp').focus();        
   


}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    statement = ($('#statement').val());
    jedn = ($('#jedn').val());
    
    var statement = ' ' + statement + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + ' '+jedn+'</span>';
    return statement;
}


$(document).ready(function () {

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('wyrazm');
    $('#zadanie').addClass('s50');
    los();
    keyboardEnter(1);

});