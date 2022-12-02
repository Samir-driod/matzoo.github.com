
function los() {
    // los
    
    var tab = [

        
        ['cm<sup>3</sup>', 'mm<sup>3</sup>', '1000'],      // cm3 = 1000 mm3
        ['mm<sup>3</sup>', 'cm<sup>3</sup>', '0.001'],     // 1000 mm3 = cm3
        
        ['dm<sup>3</sup>', 'cm<sup>3</sup>', '1000'],      // dm3 = 1000 cm3
        ['cm<sup>3</sup>', 'dm<sup>3</sup>', '0.001'],     // 1000 cm3 = dm3
        
        ['m<sup>3</sup>',  'dm<sup>3</sup>', '1000'],      // m3 = 1000 dm3
        ['dm<sup>3</sup>', 'm<sup>3</sup>',  '0.001'],     // 1000 dm3 = m3           
        
    ];
    
    
    var example = Math.round(Math.random() * 5);
    var x = Math.round(Math.random() * 99) + 1; 
    var wynik = x*tab[example][2];
    
    
    check_wynik = wynik*1000;
        if (Math.round(check_wynik)!=check_wynik) {
            wynik = Math.round(check_wynik)/1000;
        }
    // zeby nie bylo np. 0,8600000001 
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