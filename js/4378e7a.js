
function los() {
    // los
    var example = Math.round(Math.random() * 1);
    
example=1;
    if (example==0) {        
        
        
        
        var ex = Math.round(Math.random() * 2); 
        var x = Math.round(Math.random() * 1)+1; 
        
        var a = Math.round(Math.random() * 1)+1; 
        var b = Math.round(Math.random() * 6)+2; 
        var y = -2;
        while (a==2 && b%2==0) {
          b = Math.round(Math.random() * 6)+2;  
        }
        
        var licznik = b*b;
        var mianownik = (x*b+a)*(x*b+a);
        var liczba = Math.floor(licznik/mianownik);
        var nlicznik = licznik-(liczba*mianownik);
        var czynwd = nwd(nlicznik,mianownik);
        nlicznik = nlicznik/czynwd;
        mianownik = mianownik/czynwd;
        if (ex==2) x = -x;
        var wynik=liczba;
        var wynik2=nlicznik;
        var wynik3=mianownik;
        // wyswietl los
        $('#zadanie').html('<table border="0" align="center" class="ulamki">\n\
        <tr>\n\
        <td rowspan="2" class="liczba s50">('+x+'</td>\n\
        <td class="linia-black"><span class="s21">'+a+'</span></td>\n\
        <td rowspan="2" class="liczba s50">)<sup class="s30">'+y+'</sup></td><td rowspan="2" class="s40"> = <input name="liczb" tabindex="7" type="hidden" size="1" id="odp" maxlength="4" autocomplete="off" value="0"/>   </td>\n\
        \n\
        <td class="linia-black"><input name="li" tabindex="8" type="tel" size="2" id="odp2" maxlength="3" autocomplete="off"/></td>\n\
      </tr>\n\
      <tr>\n\
        <td><span class="s21">'+b+'</span></td>\n\
        <td><input name="odp" tabindex="9" type="tel" size="2" maxlength="3" id="odp3" autocomplete="off"/></td>\n\
      </tr>\n\
     </table>');     
      $('#wynik').val(wynik);
        $('#wynik2').val(wynik2);
        $('#wynik3').val(wynik3);   
         $('#odp2').focus();  
        
    }
    if (example==1) {        

        a = Math.round(Math.random() * 7)+1; 
        b = Math.round(Math.random() * 7)+2;
        y=-2;
        a=a/nwd(a,b);
        b=b/nwd(a,b);
        while (a>=b) {
           a = Math.round(Math.random() * 7)+1; 
         b = Math.round(Math.random() * 7)+2; 
        a=a/nwd(a,b);
        b=b/nwd(a,b); 
        }
        
        var licznik = b*b;
        var mianownik = a*a;
        var liczba = Math.floor(licznik/mianownik);
        var nlicznik = licznik-(liczba*mianownik);
        var czynwd = nwd(nlicznik,mianownik);
        nlicznik = nlicznik/czynwd;
        mianownik = mianownik/czynwd;
        var wynik=liczba;
        if (nlicznik!=0) wynik2=nlicznik;
        if (mianownik!=1) var wynik3=mianownik;
        // wyswietl los
        $('#zadanie').html('<table border="0" align="center" class="ulamki">\n\
        <tr>\n\
        <td rowspan="2" class="liczba s50">(</td>\n\
        <td class="linia-black"><span class="s21">'+a+'</span></td>\n\
        <td rowspan="2" class="liczba s50">)<sup class="s30">'+y+'</sup></td><td rowspan="2" class="s40"> = </td>\n\
        <td rowspan="2" class="liczba s50"><input name="liczb" tabindex="7" type="tel" size="1" id="odp" maxlength="4" autocomplete="off"/></td>\n\
        <td class="linia-black"><input name="li" tabindex="8" type="tel" size="2" id="odp2" maxlength="3" autocomplete="off"/></td>\n\
      </tr>\n\
      <tr>\n\
        <td><span class="s21">'+b+'</span></td>\n\
        <td><input name="odp3" tabindex="9" type="tel" size="2" maxlength="3" id="odp3" autocomplete="off"/></td>\n\
      </tr>\n\
     </table>');        
        $('#wynik').val(wynik);
        $('#wynik2').val(wynik2);
        $('#wynik3').val(wynik3);
        
        $('#odp').focus();  
    }
    
             
   


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

