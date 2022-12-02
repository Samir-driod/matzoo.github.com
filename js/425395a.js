
function los() {
    // los
    var mnoz = Math.round(Math.random() * 4);
    var  limit = 30;
    
    var jedn_a  = [ 'cm<sup>2</sup>'  ,'mm<sup>2</sup>',  'm<sup>2</sup>', 'dm<sup>2</sup>',  'cm<sup>2</sup>',    'm<sup>2</sup>',     'km<sup>2</sup>',  'a', 'ha',   'm<sup>2</sup>',   'a',  'dm<sup>2</sup>',   'ha'];
    var jedn_b  = [ 'mm<sup>2</sup>',  'cm<sup>2</sup>', 'dm<sup>2</sup>', 'cm<sup>2</sup>',  'dm<sup>2</sup>',   'cm<sup>2</sup>',      'm<sup>2</sup>',  'm<sup>2</sup>',  'a',   'a',  'ha',   'm<sup>2</sup>',    'm<sup>2</sup>'];
    var iloczyn = ['100','0.01','100','100','0.01','10000','1000000','100','100','0.01','0.01','0.01','10000'];
      
    var example = Math.round(Math.random() * 12);
    var x = Math.round(Math.random() * 300) + 1; 
    if (mnoz==1) x=x*10;
    if (mnoz==2) x=x*100;
    if (mnoz==3 && iloczyn[example]<100) x=x*1000;
    if (mnoz==4 && iloczyn[example]<100) x=x*10000;
    var wynik = x*(iloczyn[example]);
    
    if (example==1 || example==4 || example==9 || example==10 || example==11) {
        wynik = Math.round(wynik*100)/100; 
    }
        
        wynik = str_replace('.',',',wynik);

        // wyswietl los
        $('#zadanie').html(x + ' ' +jedn_a[example]+ ' = <input name="odp" type="tel" class="wyrazm s40" id="odp" size="7" maxlength="12" autocomplete="off" /> '+jedn_b[example]+'\n\
        <input type="hidden" name="x" id= "x" value="' + x + '" />');
        $('#wynik').val(wynik);
        $('#odp').focus();        
   


}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
//    x = ($('#x').val());
//    y = ($('#y').val());
//    wyn = x * y;
    //var statement = ' ' + x + ' · ' + y + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    var statement = 'Spróbuj ponownie.';
    return statement;
}


$(document).ready(function () {

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('wyrazm');
    $('#zadanie').addClass('s35');
    los();
    keyboardEnter(0);

});