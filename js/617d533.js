
function los() {
    // los
    
    var tab = [
        ['l',              'dm<sup>3</sup>', '1'],         // litr = dm3
        ['dm<sup>3</sup>', 'l',              '1'],         // dm3 = litr
        
        ['ml',             'cm<sup>3</sup>', '1'],         // ml = cm3
        ['cm<sup>3</sup>', 'ml',             '1'],         // cm3 = ml
        
        ['l',              'cm<sup>3</sup>', '1000'],      // litr = 1000 cm3
        ['cm<sup>3</sup>', 'l',              '0.001'],     // 1000 cm3 = litr
        
        ['l',              'ml',             '1000'],      // litr = 1000 ml
        ['ml',             'l',              '0.001'],     // 1000 ml = litr
        
        ['dm<sup>3</sup>', 'cm<sup>3</sup>', '1000'],      // dm3 = 1000 cm3
        ['cm<sup>3</sup>', 'dm<sup>3</sup>', '0.001'],     // 1000 cm3 = dm3
        
        ['m<sup>3</sup>',  'dm<sup>3</sup>', '1000'],      // m3 = 1000 dm3
        ['dm<sup>3</sup>', 'm<sup>3</sup>',  '0.001'],     // 1000 dm3 = m3
            
        ['m<sup>3</sup>',  'l',              '1000'],      // m3 = 1000 litrów
        ['l',              'm<sup>3</sup>',  '0.001'],     // 1000 litrów = m3 
        
    ];
    
      
    var example = Math.round(Math.random() * 13);
    var x = Math.round(Math.random() * 99) + 1; 
    var wynik = x*tab[example][2];
    check_wynik = wynik*1000;
    if (Math.round(check_wynik)!=check_wynik) {
        wynik = Math.round(check_wynik)/1000;
    }
    wynik = wynik*1000/1000;
    wynik = str_replace('.',',',wynik);
    var statement = x + ' ' +tab[example][0]+ ' = '+wynik+' '+tab[example][1];
        // wyswietl los
        $('#zadanie').html(x + ' ' +tab[example][0]+ ' = <input name="odp" type="tel" class="wyrazm s50" id="odp" size="4" maxlength="8" autocomplete="off" /> '+tab[example][1]+'\n\
        <input type="hidden" name="x" id= "x" value="' + x + '" /><input type="hidden" name="statement" id= "statement" value="' + statement + '" />\n\
    <input type="hidden" name="jedn" id= "jedn" value="' + tab[example][1] + '" />');
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

function createCountWrong() {
    // ma losować przykład po błędnej odpowiedzi
    return 1;
}

$(document).ready(function () {

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('wyrazm');
    $('#zadanie').addClass('s50');
    los();
    keyboardEnter(1);

});