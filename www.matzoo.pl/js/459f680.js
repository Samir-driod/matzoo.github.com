
function los() {
    // los
    var mnoz = Math.round(Math.random() * 4);
    var  limit = 30;
    
    var jedn_a  = ['cm' ,'mm', 'm', 'dm', 'cm',  'm',  'km', 'dm'];
    var jedn_b  = ['mm', 'cm','dm', 'cm', 'dm', 'cm',   'm',  'm'];
    var iloczyn = ['10','0.1','10', '10','0.1','100','1000','0.1'];
    
    var counter = iloczyn.length-1;
      
    var example = Math.round(Math.random() * counter);
    var x = Math.round(Math.random() * 300) + 1; 
    if (mnoz==1) x=x*10;
    if (mnoz==2 && iloczyn[example]<10) x=x*100;
    if (mnoz==3 && iloczyn[example]<10) x=x*1000;
    
    var wynik = x*(iloczyn[example]);
        
    wynik = wynik*10;
    wynik = Math.round(wynik);
    wynik = wynik/10;

    while (wynik != Math.round(wynik)) {
        mnoz = Math.round(Math.random() * 4);
        example = Math.round(Math.random() * counter);
        x = Math.round(Math.random() * 300) + 1; 
        if (mnoz==1) x=x*10;
        if (mnoz==2 && iloczyn[example]<10) x=x*100;
        if (mnoz==3 && iloczyn[example]<10) x=x*1000;

        wynik = x*(iloczyn[example]);

        wynik = wynik*10;
        wynik = Math.round(wynik);
        wynik = wynik/10;
    }
        
    //wynik = str_replace('.',',',wynik);

    var statement = x + ' ' +jedn_a[example]+ ' = '+wynik+' '+jedn_b[example];
    // wyswietl los
    $('#zadanie').html(x + ' ' +jedn_a[example]+ ' = <input name="odp" type="tel" class="wyrazm s50" id="odp" size="4" maxlength="12" autocomplete="off" /> '+jedn_b[example]+'\n\
    <input type="hidden" name="x" id= "x" value="' + x + '" /><input type="hidden" name="statement" id= "statement" value="' + statement + '" />\n\
    <input type="hidden" name="jedn" id= "jedn" value="' + jedn_b[example] + '" />');
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