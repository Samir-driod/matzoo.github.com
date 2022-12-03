function createStatement() {
    var statement = ' Spróbuj ponownie.';
    return statement;    
}

$(document).ready(function() {

    $('#zadanie').removeClass('wyraz1');
    $('#zadanie').addClass('s50');
    $('#zadanie').addClass('wyrazm');  
    $('#zadanie').css('font-weight','normal');  
    los();
    keyboardEnter();

});


function los() {
    // los

    var pary = [
        '6 25 15 10',
        '10 9 6 15',
        '7 10 2 35',
        '3 20 4 15',
        '2 18 4 9',
        '8 8 4 16',
        '5 6 10 3',
        '3 16 6 8',
        '5 20 4 25',
        '5 9 15 3',
        '3 2 1 6',
        '9 2 3 6',
        '5 8 4 10',
        '6 6 9 4',
        '2 10 5 4',
        '1 10 2 5',
    ];
    var ile = pary.length-1;
    var liczby = pary[Math.round(Math.random()*ile)].split(' ');
    //var liczby = pary[0].split(' ');
    var c = liczby[0];
    var b = liczby[1];
    var a = liczby[2];
    var x = liczby[3];
    var example = Math.round(Math.random()*5);
    
    //example = 5;

    if (example==0){
        var nc = x-c; 
        if (nc<0) nc = '+'+(-nc);
        else nc = '-'+nc;
        var tresc = '<table class="geometria" style="margin-bottom:10px" border="0" align="center">\n\
<tr><td class="licznik">x'+nc+'</td><td rowspan="2" class="s50">=</td><td class="licznik">'+a+'</td></tr>\n\
<tr><td class="mianownik">x</td><td class="mianownik">'+b+'</td></tr></table>';
        var wynik = x;
    
    } else if (example==1) {
        a = liczby[0];
        b = liczby[3];
        c = liczby[1];
        x = liczby[2]; 
        var nc = x-c; 
        if (nc<0) nc = '+'+(-nc);
        else nc = '-'+nc;        
        var tresc = '<table class="geometria" style="margin-bottom:10px" border="0" align="center">\n\
<tr><td class="licznik">x</td><td rowspan="2" class="s50">=</td><td class="licznik">'+a+'</td></tr>\n\
<tr><td class="mianownik">x'+nc+'</td><td class="mianownik">'+b+'</td></tr></table>';
        wynik = x;
    
    } else if (example==2) {
        a = liczby[2];
        b = liczby[1];
        c = liczby[3];
        x = liczby[0];    
        var na = x-a; console.debug(na);
        if (na<0) na = '+'+(-na);
        else na = '-'+na;         
        var tresc = '<table class="geometria" style="margin-bottom:10px" border="0" align="center">\n\
<tr><td class="licznik">x'+na+'</td><td rowspan="2" class="s50">=</td><td class="licznik">x</td></tr>\n\
<tr><td class="mianownik">'+b+'</td><td class="mianownik">'+c+'</td></tr></table>';
        wynik = x;
        
    } else if (example==3) {
        a = liczby[0];
        b = liczby[3];
        c = liczby[1];
        x = liczby[2]; 
        var na = x-a; 
        if (na<0) na = '+'+(-na);
        else na = '-'+na;        
        var tresc = '<table class="geometria" style="margin-bottom:10px" border="0" align="center">\n\
<tr><td class="licznik">x</td><td rowspan="2" class="s50">=</td><td class="licznik">x'+na+'</td></tr>\n\
<tr><td class="mianownik">'+c+'</td><td class="mianownik">'+b+'</td></tr></table>';
        wynik = x;        
    } else if (example==4) {
        a = liczby[0];
        b = liczby[3];
        c = liczby[1];
        x = liczby[2]; 
        var na = x-a; 
        if (na<0) na = '+'+(-na);
        else na = '-'+na;        
        var tresc = '<table class="geometria" style="margin-bottom:10px" border="0" align="center">\n\
<tr><td class="licznik">'+c+'</td><td rowspan="2" class="s50">=</td><td class="licznik">'+b+'</td></tr>\n\
<tr><td class="mianownik">x</td><td class="mianownik">x'+na+'</td></tr></table>';
        wynik = x;        
    } else if (example==5) {
        var m = Math.round(Math.random()*4)+2;
        a = liczby[0];
        b = liczby[3];
        c = liczby[1];
        x = liczby[2]; 
        var na = x-a; 
        if (na<0) na = '+'+(-na);
        else na = '-'+na;        
        var tresc = '<table class="geometria" style="margin-bottom:10px" border="0" align="center">\n\
<tr><td class="licznik">'+m+'x</td><td rowspan="2" class="s50">=</td><td class="licznik">x'+na+'</td></tr>\n\
<tr><td class="mianownik">'+(m*c)+'</td><td class="mianownik">'+b+'</td></tr></table>';
        wynik = x;      
}


    
  // wyswietl los
  $('#zadanie').html(tresc+'x = <input name="odp" type="tel" id="odp" size="3" maxlength="8" autocomplete="off" /><input name="odp2" type="tel" style="opacity:0;float:left" size="1" maxlength="2" /><input name="odp3" type="tel" style="opacity:0;float:right" size="1" maxlength="2" />');
  $('#wynik').val(wynik);
  $('#odp').focus();

}