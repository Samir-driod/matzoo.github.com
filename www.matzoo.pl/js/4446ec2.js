
function los() {
    // los
    var example = Math.round(Math.random() * 1);
    

    if (example==0) {        
        
        var a = Math.round(Math.random() * 4)+1; 
        var b = Math.round(Math.random() * 8)+2; 
        while (b==4 || b==9) b = Math.round(Math.random() * 8)+2; 
        while (a==b) {
            a = Math.round(Math.random() * 4)+1; 
            b = Math.round(Math.random() * 8)+2; 
            while (b==4 || b==9) b = Math.round(Math.random() * 8)+2;
        }
        
        var licznik = a;
        var mianownik = b;
        var czynwd = nwd(licznik,mianownik);
        licznik = licznik/czynwd;
        mianownik = mianownik/czynwd;
        if (licznik==1) licznik='';
        licznik=licznik+'√'+b;
        var wynik=licznik;
        var wynik2=mianownik;
        if (wynik2==1) wynik2='';
        // wyswietl los
        $('#zadanie').html('<p class="dogen pull-right"><input id="co" value="odp" type="hidden"><a class="znak btn btn-lsuccess btn-matzoo gradient s25 text-black" onclick="radic(\'√\')"><b>√</b></a></p>\n\
<table border="0" align="center" class="georgia">\n\
        <tr>\n\
        <td class="licznik">'+a+'</td>\n\
        <td rowspan="2" class="s40"> = </td>\n\
        <td class="licznik"><input name="odp" type="text" size="3" id="odp" maxlength="10" autocomplete="off"/></td>\n\
      </tr>\n\
      <tr>\n\
        <td class="mianownik">√'+b+'</td>\n\
        <td class="mianownik"><input name="odp2" type="text" size="3" maxlength="10" id="odp2" autocomplete="off"/></td>\n\
      </tr>\n\
     </table>');     
        $('#wynik').val(wynik);
        $('#wynik2').val(wynik2);
        
        
    }
    if (example==1) {        

        var a = Math.round(Math.random() * 6)+2; 
        var b = Math.round(Math.random() * 8)+2; 
        while (b==4 || b==9) b = Math.round(Math.random() * 8)+2;
        var c = Math.round(Math.random() * 3)+2;
        
        var czynwd = nwd(a,c);
        a = a/czynwd;
        c = c/czynwd;
        
        var licznik = a;
        var mianownik = b*c;
        czynwd = nwd(licznik,mianownik);
        licznik = licznik/czynwd;
        mianownik = mianownik/czynwd;
        if (licznik==1) licznik='';
        licznik=licznik+'√'+b;
        var wynik=licznik;
        var wynik2=mianownik;
        if (wynik2==1) wynik2='';
        if (c==1) c='';
        // wyswietl los
        $('#zadanie').html('<p class="dogen pull-right"><input id="co" value="odp" type="hidden"><a class="znak btn btn-lsuccess btn-matzoo gradient s25 text-black" onclick="radic(\'√\')"><b>√</b></a></p>\n\
<table border="0" align="center" class="georgia">\n\
        <tr>\n\
        <td class="licznik">'+a+'</td>\n\
        <td rowspan="2" class="s40"> = </td>\n\
        <td class="licznik"><input name="odp" type="text" size="3" id="odp" maxlength="10" autocomplete="off"/></td>\n\
      </tr>\n\
      <tr>\n\
        <td class="mianownik">'+c+'√'+b+'</td>\n\
        <td class="mianownik"><input name="odp2" type="text" size="3" maxlength="10" id="odp2" autocomplete="off"/></td>\n\
      </tr>\n\
     </table>');     
        $('#wynik').val(wynik);
        $('#wynik2').val(wynik2);
        

    }
    
        $('#odp').focus();        
   


}


function nwd(a, b) {
  while (b) {
    tmp = a % b;
    a = b;
    b = tmp;
  } return a;
}


function createStatement() {
    // tworzenie poprawnej odpowiedzi systemowej
    x = ($('#x').val());
    y = ($('#y').val());
    wyn = ($('#wyn').val());
    
    //var statement = ' ' + x + ' · ' + y + ' = ' + wyn + ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    var statement = '&nbsp; '+x+'<sup>'+y+'</sup> = '+wyn+ ' <span class="s15 pull-right black" style="font-family: ">wpisano: ' + $('#odp').val() + '</span>';
    var statement = '';
    return statement;
}


$(document).ready(function () {

   $('#zadanie').removeClass('wyraz1');
    los();
    keyboardEnter(1);

});

