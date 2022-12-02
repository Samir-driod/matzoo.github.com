
function los() {
    // los
    var mnoz = Math.round(Math.random() * 4);
    var  limit = 30;
    
    var jedn_a  = ['dag',   'g', 'dag',    'kg', 't',  'g',  'kg', 'kg'];
    var jedn_b  = [  'g', 'dag',  'kg',     't', 'kg', 'kg',   'g',  'dag'];
    var iloczyn = [ '10', '0.1',  '0.01','0.001','1000','0.001','1000','100'];
    
    var counter = iloczyn.length-1;
      
    var example = Math.round(Math.random() * counter);
    //example = 3;
    var x = Math.round(Math.random() * 300) + 1; 
    if (mnoz==1) x=x*10;
    if (mnoz==2 && iloczyn[example]<1) x=x*100;
    if (mnoz==3 && iloczyn[example]<1) x=x*1000;
    if (mnoz==3 && iloczyn[example]>100) x=x/10;
    if (mnoz==2 && iloczyn[example]>100) x=x/100;
    //x=8700;
    x=Math.decimal(x,2);
    //console.debug(x);
    var wynik = x*(iloczyn[example]);
    var wynik_round = wynik*1000;
    wynik_round = Math.round(wynik_round);
    wynik = wynik_round/1000;
    
        //console.debug(wynik);
        x = str_replace('.',',',x);
        wynik = str_replace('.',',',wynik);

        // wyswietl los
        $('#zadanie').html(x + ' ' +jedn_a[example]+ ' = <input name="odp" type="tel" class="wyrazm s50" id="odp" size="5" maxlength="12" /> '+jedn_b[example]+'\n\
        <input type="hidden" name="x" id= "x" value="' + x + '" />');
        $('#wynik').val(wynik);
        $('#odp').focus();        
   


}
Math.decimal = function(n, k) 
{
    var factor = Math.pow(10, k+1);
    n = Math.round(Math.round(n*factor)/10);
    return n/(factor/10);
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
    $('#zadanie').addClass('s50');
    los();
    keyboardEnter(0);

});